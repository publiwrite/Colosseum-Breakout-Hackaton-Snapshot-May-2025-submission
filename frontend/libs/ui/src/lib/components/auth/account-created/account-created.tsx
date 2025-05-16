'use client';

import { SIGN_UP_REQUESTED_TITLE } from '../constants';
import { AuthHeading } from '../shared';

export const AccountCreated = () => {
  return (
    <AuthHeading
      heading={SIGN_UP_REQUESTED_TITLE}
      description="A verification email has been sent to your inbox. Please check your email and click the link to verify your address and complete the registration process."
      supportSection="Having troubles? Please visit our"
      supportLink="https://helpdesk.publiwrite.com"
    />
  );
};
