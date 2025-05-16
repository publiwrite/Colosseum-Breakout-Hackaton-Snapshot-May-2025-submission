import { Logo } from '../logo';

export const NotFound = (props: {
  showLogo?: boolean;
  title?: string;
  description?: string;
}) => {
  return (
    <div className="h-full flex items-center justify-center my-auto py-8">
      <div className="container max-w-3xl flex flex-col items-start gap-4 lg:gap-8 my-auto">
        {props.showLogo && (
          <div className="mb-10 lg:mb-14">
            <Logo />
          </div>
        )}

        <h1 className="text-5xl font-bold mb-6">
          {props.title || 'File not found'}
        </h1>

        <p className="mb-4 lg:mb-8">
          {props.description ||
            'It seems like you have the required permission to open this document. Please check with the document owner or administrator to grant you access.'}
        </p>

        <p>If you think there is a problem, you can visit our help center.</p>
      </div>
    </div>
  );
};
