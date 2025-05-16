'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, ErrorMessage, FormGroup, Input } from '@pw-fe-monorepo/ui';
import { subscribeToNewsletterAction } from 'libs/configs/src/lib/actions/newsletter.action';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

type NewsletterFormProps = {
  newsletterButton: string;
  mailchimpGroup: string;
  successMessage: string;
};

export type InputSchemaType = z.input<typeof schema>;
export type OutputSchemaType = z.output<typeof schema>;

export const NewsletterForm = ({
  newsletterButton,
  mailchimpGroup,
  successMessage,
}: NewsletterFormProps) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputSchemaType, object, OutputSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: OutputSchemaType) => {
    try {
      setLoading(true);
      const newsletterResponse = await subscribeToNewsletterAction(
        data.email,
        mailchimpGroup,
      );
      if (
        newsletterResponse.statusCode == 400 &&
        newsletterResponse.title == 'Member Exists'
      ) {
        toast.success(
          'You are already subscribed. Thank you for your interest!',
        );
      } else {
        toast.success(successMessage);
      }
      reset();
      setLoading(false);
    } catch (error) {
      const err = error as Error;
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full flex flex-col sm:flex-row items-start justify-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate={true}
    >
      <FormGroup className="w-full sm:w-auto">
        <Input
          id="email"
          type="email"
          autoCapitalize="none"
          {...register('email')}
          className="sm:min-w-96"
          aria-invalid={!!errors.email}
          placeholder="example123@gmail.com"
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
      </FormGroup>

      <Button type="submit" loading={loading} className="w-full sm:w-auto">
        {newsletterButton}
      </Button>
    </form>
  );
};
