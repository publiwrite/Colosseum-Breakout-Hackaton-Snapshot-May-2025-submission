'use client';

import { Button } from '@pw-fe-monorepo/ui';
import { useState } from 'react';
import { Logo } from '../logo';

interface IErrorPreviewProps {
  docType: 'epub' | 'pdf';
  problemData: any;
}

export const ErrorPreview = ({ docType, problemData }: IErrorPreviewProps) => {
  const [isErrorReported, setIsErrorReported] = useState(false);

  const reportProblem = () => {
    fetch(`${process.env.NEXT_PUBLIC_GATEWAY_API_URL}/report/ui-issue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(problemData),
      credentials: 'include',
    }).then((res) => {
      if (res.status === 200) {
        setIsErrorReported(true);
      }
    });
  };

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white dark:bg-gray-dark-800">
      <div className="absolute block container max-w-3xl">
        <div className="mb-5 lg:mb-7">
          <Logo />
        </div>
        <h1 className="text-2xl font-bold mb-6">We can't show the preview</h1>
        <p className="mb-4 lg:mb-8">
          It seems there's been an issue getting the {docType} preview for the
          manuscript. This is a problem on our end. Please click the report
          button below so that we investigate it. Apologise for the
          inconvenience and Happy Writing!
        </p>
        <div className="flex justify-center mt-10">
          <Button variant="primary" onClick={reportProblem}>
            {' '}
            Report problem{' '}
          </Button>
        </div>
        {isErrorReported && (
          <div className="flex justify-center mt-5">
            <p className="mb-4 lg:mb-8">
              Thank you! We'll do our best to sort it as soon as possible
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
