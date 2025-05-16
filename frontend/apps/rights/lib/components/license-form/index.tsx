'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ACCEPTED_DOCUMENT_FILE_EXTENSIONS,
  ACCEPTED_DOCUMENT_TYPES,
  ACCEPTED_IMAGE_TYPES,
  createBookLicenseClientAction,
  formatBytes,
  MAX_FILE_SIZE_10_MB,
  SUPPORTED_IMAGE_FILE_EXTENSIONS,
  TypeOfRights,
  typeOfRightsToReadableWord,
  uploadToTemporaryBucket,
} from '@pw-fe-monorepo/configs';
import {
  BookGenresContext,
  Button,
  Checkbox,
  ConfirmationDialogContext,
  CurrentUserContext,
  DragDropUploader,
  ErrorMessage,
  FormGroup,
  Input,
  InputLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  TagSelect,
  useHookFormMask,
  useMounted,
} from '@pw-fe-monorepo/ui';
import {
  MyBookLicensesContext,
  PurchasedBookLicensesContext,
} from '@rights/lib/providers';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { licenseFormSchema } from './schema';

export const LicenseForm = () => {
  const mounted = useMounted();
  const router = useRouter();

  const { show } = useContext(ConfirmationDialogContext);
  const { user } = useContext(CurrentUserContext);
  const { genres, fetchGenres } = useContext(BookGenresContext);
  const { fetchPurchasedBookLicenses } = useContext(
    PurchasedBookLicensesContext,
  );
  const { fetchMyBookLicenses } = useContext(MyBookLicensesContext);

  const [manuscriptAssetUploadProgress, setManuscriptAssetUploadProgress] =
    useState(0);
  const [coverAssetUploadProgress, setCoverAssetUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const nonCustodialWallets = user?.wallets?.filter(
    (wallet) => !wallet.isCustodial,
  );

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    disabled: isLoading,
    resolver: zodResolver(licenseFormSchema),
    defaultValues: {
      isForCommercialUse: true,
    },
  });

  const registerWithMask = useHookFormMask(register);

  const {
    onChange: onChangeOwnerWalletAddressField,
    ref: refOwnerWalletAddressField,
    ...ownerWalletAddressField
  } = register('ownerWalletAddress');

  const { onChange: onChangeIsForCommercialUse, ...isForCommercialUseField } =
    register('isForCommercialUse');

  const { onChange: onChangeTypeOfRights, ...typeOfRightsField } =
    register('typeOfRights');

  const { onChange: onChangeAgreement, ...agreementField } =
    register('agreement');

  const { onChange: onChangeTerms, ...termsField } = register('terms');

  const onSubmit = async (data: z.infer<typeof licenseFormSchema>) => {
    setIsLoading(true);

    show({
      heading: 'Create License',
      description: 'Are you sure you want to create this license?',
      onCancel: () => {
        setIsLoading(false);
      },
      onSuccess: async () => {
        if (!data.manuscriptAsset || !data.coverAsset) {
          return;
        }

        try {
          const [manuscriptAssetKey, coverAssetKey] = await Promise.all([
            uploadToTemporaryBucket(data.manuscriptAsset, (progress) => {
              setManuscriptAssetUploadProgress(progress);
            }),
            uploadToTemporaryBucket(data.coverAsset, (progress) => {
              setCoverAssetUploadProgress(progress);
            }),
          ]);

          if (!manuscriptAssetKey || !coverAssetKey) {
            return;
          }

          const typeOfRights =
            data.typeOfRights.length === 2
              ? TypeOfRights.Both
              : data.typeOfRights[0];

          await createBookLicenseClientAction({
            title: data.title,
            description: data.description,
            authorName: data.authorName,
            genresIds: data.genresIds.map(Number),
            manuscriptAssetKey,
            coverAssetKey,
            ownerWalletAddress: data.ownerWalletAddress,
            priceInCents: data.priceInCents,
            isForCommercialUse: data.isForCommercialUse,
            isbn: data.isbn,
            typeOfRights,
          });

          await fetchMyBookLicenses();
          await fetchPurchasedBookLicenses();

          router.push('/licenses/registered');
        } catch (error) {
          const err = error as Error;
          toast.error(
            err.message ||
              'Failed to create license. Please reach out to support for assistance.',
          );
        } finally {
          setIsLoading(false);
        }
      },
    });
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14">
        <FormGroup>
          <InputLabel>Title</InputLabel>
          <Input
            {...register('title')}
            aria-invalid={!!errors.title}
            placeholder="Enter the title"
          />
          {errors.title && <ErrorMessage message={errors.title.message} />}
        </FormGroup>

        <FormGroup>
          <InputLabel>Short description</InputLabel>
          <Input
            {...register('description')}
            aria-invalid={!!errors.description}
            placeholder="Enter a short description"
          />
          {errors.description && (
            <ErrorMessage message={errors.description.message} />
          )}
        </FormGroup>

        <FormGroup>
          <InputLabel>Author name or Pen name</InputLabel>
          <Input
            {...register('authorName')}
            aria-invalid={!!errors.authorName}
            placeholder="Enter author name or pen name"
          />
          {errors.authorName && (
            <ErrorMessage message={errors.authorName.message} />
          )}
        </FormGroup>

        <FormGroup>
          <InputLabel>Genre</InputLabel>
          <Controller
            control={control}
            name="genresIds"
            render={({ field }) => (
              <TagSelect
                {...field}
                aria-invalid={!!errors.genresIds}
                items={genres}
                placeholder="Select genres.."
              />
            )}
          />
          {errors.genresIds && (
            <ErrorMessage message={errors.genresIds.message} />
          )}
        </FormGroup>

        <FormGroup>
          <InputLabel>Document</InputLabel>

          <DragDropUploader
            {...register('manuscriptAsset')}
            className="!p-0"
            accept={ACCEPTED_DOCUMENT_TYPES.join(',')}
            description={`Maximum file size: ${formatBytes(MAX_FILE_SIZE_10_MB)}. Supported formats: ${ACCEPTED_DOCUMENT_FILE_EXTENSIONS}`}
            errorMessage={errors.manuscriptAsset?.message}
            uploadProgresses={[manuscriptAssetUploadProgress.toString()]}
          />
        </FormGroup>

        <FormGroup>
          <InputLabel>Cover image</InputLabel>

          <DragDropUploader
            {...register('coverAsset')}
            className="!p-0"
            accept={ACCEPTED_IMAGE_TYPES.join(',')}
            description={`Maximum file size: ${formatBytes(MAX_FILE_SIZE_10_MB)}. Supported formats: ${SUPPORTED_IMAGE_FILE_EXTENSIONS}`}
            errorMessage={errors.coverAsset?.message}
            uploadProgresses={[coverAssetUploadProgress.toString()]}
          />
        </FormGroup>

        <FormGroup>
          <div className="flex items-center gap-2">
            <InputLabel className="flex items-center gap-3">Price</InputLabel>

            {/* <span className="flex items-center gap-1">
                            <Switch
                                {...registerFree}
                                id={freeName}
                                checked={watch('free')}
                                onCheckedChange={(checked) => {
                                    freeOnChange({
                                        target: {
                                            value: checked,
                                            name: freeName,
                                        },
                                        type: 'change',
                                    });
                                    resetField('priceInCents');
                                }}
                            />
                            <label htmlFor={freeName} className="text-sm">
                                Free
                            </label>
                        </span> */}
          </div>

          <Input
            type="text"
            {...registerWithMask('priceInCents', {
              alias: 'numeric',
              allowMinus: false,
              rightAlign: false,
              digits: 2,
              prefix: '$',
            })}
            placeholder="Enter price"
            aria-invalid={!!errors.priceInCents}
          />
          {errors.priceInCents && (
            <ErrorMessage message={errors.priceInCents.message} />
          )}
        </FormGroup>

        <FormGroup className="flex-1">
          <InputLabel htmlFor="ownerWalletAddress">
            Wallet address to receive payment for license
          </InputLabel>

          {nonCustodialWallets && nonCustodialWallets.length > 0 ? (
            <Select
              {...ownerWalletAddressField}
              value={watch('ownerWalletAddress')}
              onValueChange={(val) =>
                onChangeOwnerWalletAddressField({
                  target: { value: val, name: 'ownerWalletAddress' },
                })
              }
            >
              <SelectTrigger
                id="ownerWalletAddress"
                ref={refOwnerWalletAddressField}
                aria-invalid={!!errors.ownerWalletAddress}
                className={twMerge('w-full', !mounted && 'skeleton-loader')}
              >
                <SelectValue placeholder="Select owner wallet address" />
              </SelectTrigger>
              <SelectContent>
                {nonCustodialWallets.map((wallet) => (
                  <SelectItem key={wallet.address} value={wallet.address}>
                    {wallet.address}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              {...register('ownerWalletAddress')}
              aria-invalid={!!errors.ownerWalletAddress}
              placeholder="Enter wallet address"
            />
          )}
          {errors.ownerWalletAddress && (
            <ErrorMessage message={errors.ownerWalletAddress.message} />
          )}
        </FormGroup>

        <FormGroup>
          <InputLabel>ISBN (Optional)</InputLabel>
          <Input
            {...register('isbn')}
            aria-invalid={!!errors.isbn}
            placeholder="Enter ISBN number"
          />
          {errors.isbn && <ErrorMessage message={errors.isbn.message} />}
        </FormGroup>

        {/* Reset the grid for empty space */}
        <div className="hidden lg:block"></div>

        <FormGroup>
          <InputLabel>Commercial use</InputLabel>
          <span className="flex items-center gap-1">
            <Switch
              {...isForCommercialUseField}
              id="isForCommercialUse"
              className={twMerge(!mounted && 'skeleton-loader')}
              checked={watch('isForCommercialUse')}
              onCheckedChange={(checked) =>
                onChangeIsForCommercialUse({
                  target: {
                    value: checked,
                    name: 'isForCommercialUse',
                  },
                  type: 'change',
                })
              }
            />
            <label htmlFor="isForCommercialUse" className="text-sm">
              {watch('isForCommercialUse') ? 'Yes' : 'No'}
            </label>
          </span>
          {errors.isbn && <ErrorMessage message={errors.isbn.message} />}
        </FormGroup>

        <FormGroup>
          <InputLabel>Type of rights (select at least one)</InputLabel>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {[TypeOfRights.ReferenceRights, TypeOfRights.TrainingRights].map(
              (type) => (
                <label
                  htmlFor={type}
                  key={type}
                  className="flex items-center gap-1"
                >
                  <Checkbox
                    // {...typeOfRightsField} - no need for this because we are handling the value manually
                    id={type}
                    value={type}
                    onCheckedChange={(checked) => {
                      const currentValues = watch('typeOfRights') || [];
                      const newValues = checked
                        ? [...currentValues, type]
                        : currentValues.filter((value) => value !== type);

                      onChangeTypeOfRights({
                        target: {
                          value: newValues.length > 0 ? newValues : undefined,
                          name: 'typeOfRights',
                        },
                        type: 'change',
                      });
                    }}
                  />
                  {typeOfRightsToReadableWord(type)}
                </label>
              ),
            )}
          </div>

          {errors.typeOfRights && (
            <ErrorMessage message={errors.typeOfRights.message} />
          )}
        </FormGroup>

        <div className="col-span-full flex flex-col gap-2">
          <FormGroup>
            <label
              htmlFor="agreement"
              className="flex items-start gap-1 cursor-pointer"
            >
              <Checkbox
                className="mt-0.5"
                {...agreementField}
                id="agreement"
                onCheckedChange={(checked) => {
                  onChangeAgreement({
                    target: { value: !!checked, name: 'agreement' },
                  });
                }}
              />
              I agree to the terms of the Non‑Exclusive Lifetime AI License
              Agreement.{' '}
            </label>

            {errors.agreement && (
              <ErrorMessage message={errors.agreement.message} />
            )}
          </FormGroup>

          <FormGroup>
            <label
              htmlFor="terms"
              className="flex items-start gap-1 cursor-pointer"
            >
              <Checkbox
                className="mt-0.5"
                {...termsField}
                id="terms"
                onCheckedChange={(checked) => {
                  onChangeTerms({
                    target: { value: !!checked, name: 'terms' },
                  });
                }}
              />
              I confirm that I am the copyright holder or have the legal
              authority to license this work.{' '}
            </label>

            {errors.terms && <ErrorMessage message={errors.terms.message} />}
          </FormGroup>
        </div>

        <div className="col-span-full">
          <hr />
        </div>

        <div className="col-span-full flex flex-col lg:flex-row items-stretch lg:items-center justify-end gap-4">
          <Button type="submit" loading={isLoading}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
