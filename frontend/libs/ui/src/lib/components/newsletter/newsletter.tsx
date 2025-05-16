import { SectionHeader } from '../section-header';
import { NewsletterForm } from './newsletter-form';

export async function Newsletter({
  newsletterHeader = 'Keep up with the latest',
  newsletterBody = 'Subscribe to our newsletter to get the latest PubliWrite news.',
  newsletterButton = 'Subscribe',
  mailchimpGroup = 'newsletter',
  successMessage = 'You have successfully subscribed to our newsletter.',
}) {
  return (
    <div className="bg-white dark:bg-transparent">
      <div className="container flex flex-col items-center gap-6 relative z-10 pb-14 md:pb-24">
        <SectionHeader>{newsletterHeader}</SectionHeader>

        <p className="text-gray-700 dark:text-gray-dark-100 text-center">
          {newsletterBody}
        </p>

        <NewsletterForm
          newsletterButton={newsletterButton}
          mailchimpGroup={mailchimpGroup}
          successMessage={successMessage}
        />
      </div>
    </div>
  );
}
