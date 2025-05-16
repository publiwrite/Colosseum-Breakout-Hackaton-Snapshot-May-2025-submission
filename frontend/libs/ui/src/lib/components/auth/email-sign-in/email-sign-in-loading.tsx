import {
  Button,
  FormGroup,
  Input,
  InputLabel,
  PwLink,
  buttonVariants,
} from '@pw-fe-monorepo/ui';

export const EmailSignInLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <FormGroup className="flex-1">
        <InputLabel>Email</InputLabel>
        <Input type="text" className="skeleton-loader" placeholder="Email" />
      </FormGroup>

      <FormGroup className="flex-1">
        <InputLabel>Password</InputLabel>
        <Input type="text" className="skeleton-loader" placeholder="Password" />
        <p className="skeleton-loader rounded-lg">
          Placeholder&nbsp;
          <PwLink
            href="/placeholder"
            className={buttonVariants({ variant: 'tertiary' })}
          >
            With link
          </PwLink>
        </p>
      </FormGroup>

      <Button variant="primary" className="skeleton-loader">
        Sign In
      </Button>
    </div>
  );
};
