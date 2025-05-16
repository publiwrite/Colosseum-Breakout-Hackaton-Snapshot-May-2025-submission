'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { NextAuthProviders, passwordSchema } from '@pw-fe-monorepo/configs';
import {
  Button,
  ErrorMessage,
  FormGroup,
  Input,
  InputLabel,
  PwLink,
  RevealPasswordButton,
  buttonVariants,
  useMounted,
} from '@pw-fe-monorepo/ui';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { EmailSignInLoading } from '../email-sign-in-loading';

const schema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

type Schema = z.infer<typeof schema>;

export const EmailPasswordForm = ({
  callbackUrl,
}: {
  callbackUrl?: string;
}) => {
  const mounted = useMounted();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.input<typeof schema>, object, z.output<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Schema) => {
    setIsLoading(true);

    const res = await signIn(NextAuthProviders.EMAIL_PASSWORD, {
      redirect: !!callbackUrl,
      username: data.email,
      password: data.password,
      callbackUrl,
    });

    if (res?.error) {
      setError('root', { message: res?.error ?? 'Sign in failed' });
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return <EmailSignInLoading />;
  }

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate={true}
    >
      {errors.root && <ErrorMessage message={errors.root.message} />}

      <div className="flex flex-col gap-4">
        <FormGroup>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="email"
            autoCapitalize="none"
            {...register('email')}
            aria-invalid={!!errors.email}
            placeholder="example123@gmail.com"
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
            placeholder="******"
          />
          <RevealPasswordButton
            onVisibilityChange={setPasswordVisible}
            className="absolute right-3 top-[38px] lg:top-12"
          />

          {errors.password && (
            <ErrorMessage message={errors.password.message} />
          )}

          <p className="text-gray-700 dark:text-gray-dark-300 flex items-center">
            Forgot password?&nbsp;
            <PwLink
              href={`${process.env.NEXT_PUBLIC_AUTH_PROJECT_URL}/forgot-password`}
              target="_blank"
              className={buttonVariants({ variant: 'tertiary' })}
            >
              Reset
            </PwLink>
          </p>
        </FormGroup>
      </div>

      <Button variant="primary" type="submit" loading={isLoading}>
        Sign in
      </Button>
    </form>
  );
};
