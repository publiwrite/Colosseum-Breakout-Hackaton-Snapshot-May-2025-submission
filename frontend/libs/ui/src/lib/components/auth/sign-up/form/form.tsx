'use client';

import { useLazyQuery } from '@apollo/client';
import { SignUpCommand } from '@aws-sdk/client-cognito-identity-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  cognitoClient,
  GET_AVAILABLE_USERNAME,
  passwordSchema,
} from '@pw-fe-monorepo/configs';
import {
  Button,
  ErrorMessage,
  FormGroup,
  gtmEvent,
  Input,
  InputLabel,
  RevealPasswordButton,
} from '@pw-fe-monorepo/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

type Schema = z.infer<typeof schema>;

export const Form = ({
  defaultValues,
  source,
  onSignUpComplete,
}: {
  defaultValues?: Partial<Schema>;
  source: 'modal' | 'page';
  onSignUpComplete?: () => void;
}) => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [getAvailableUsername] = useLazyQuery(GET_AVAILABLE_USERNAME);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<z.input<typeof schema>, object, z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: Schema) => {
    const { data: availableUsernameData } = await getAvailableUsername({
      variables: {
        input: { username: data.email.split('@')[0] },
      },
    });

    const username = availableUsernameData!.getAvailableUsername;

    const command = new SignUpCommand({
      ClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID,
      Username: username,
      Password: data.password,
      UserAttributes: [{ Name: 'email', Value: data.email }],
    });

    try {
      const awsResponse = await cognitoClient.send(command);

      if (onSignUpComplete) {
        gtmEvent('sign_up_method_selected', {
          method: 'email_password',
          source,
        });

        onSignUpComplete();

        return;
      }

      if (!awsResponse.UserConfirmed) {
        gtmEvent('sign_up_method_selected', {
          method: 'email_password',
          source,
        });

        return router.replace(`/account-verified?username=${username}`);
      }

      router.replace('/');
    } catch (e) {
      const error = e as Error;

      if (error?.message?.includes('already in use')) {
        setError('root', {
          message:
            'This email is already registered. Please sign in or reset your password.',
        });
      } else {
        setError('root', { message: error?.message ?? 'Something went wrong' });
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate={true}
    >
      {errors.root && <ErrorMessage message={errors.root.message} />}

      <FormGroup>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          type="email"
          autoCapitalize="none"
          {...register('email')}
          aria-invalid={!!errors.email}
          placeholder="example@gmail.com"
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
      </FormGroup>

      <FormGroup className="relative">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type={passwordVisible ? 'text' : 'password'}
          {...register('password')}
          aria-invalid={!!errors.password}
          placeholder="Enter your password"
        />
        <RevealPasswordButton
          onVisibilityChange={setPasswordVisible}
          className="absolute right-3 top-[38px] lg:top-12"
        />

        {errors.password && <ErrorMessage message={errors.password.message} />}
      </FormGroup>

      <Button type="submit" loading={isSubmitting}>
        Sign up
      </Button>
    </form>
  );
};
