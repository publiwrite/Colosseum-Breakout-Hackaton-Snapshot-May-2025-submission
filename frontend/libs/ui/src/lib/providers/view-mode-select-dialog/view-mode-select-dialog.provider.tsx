'use client';

import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE_VIEW_MODE, ViewMode } from '@pw-fe-monorepo/configs';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { PwModal } from '../../components';
import { CurrentUserContext } from '../current-user/current-user.provider';
import { ViewModeSelect } from './view-mode-select';

const schema = z.object({
  viewMode: z.nativeEnum(ViewMode, {
    required_error: 'Please select a view mode',
  }),
});
type InputSchemaType = z.input<typeof schema>;
type OutputSchemaType = z.output<typeof schema>;

export const ViewModeSelectDialogContext = createContext<{
  loading: boolean;
  formMethods: UseFormReturn<InputSchemaType, object, OutputSchemaType>;
  onSubmit: (data: OutputSchemaType) => Promise<void>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>(null as any);

export const ViewModeSelectDialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { refetchUser } = useContext(CurrentUserContext);
  const { user } = useContext(CurrentUserContext);
  const [updateProfileViewMode, { loading }] = useMutation(
    UPDATE_PROFILE_VIEW_MODE,
  );

  const [open, setOpen] = useState(false);

  const formMethods = useForm<InputSchemaType, object, OutputSchemaType>({
    defaultValues: {
      viewMode: user?.profile?.viewMode ?? ViewMode.Author,
    },
  });

  // To check whether the user has selected a view mode
  // and open the dialog if not
  useEffect(() => {
    const isRightsAppUrl = window.location.href.includes(
      `${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}`,
    );

    if (user?.profile && !user?.profile?.viewMode && !isRightsAppUrl) {
      setOpen(true);
    }
  }, [user]);

  const onSubmit = async (data: OutputSchemaType) => {
    await updateProfileViewMode({
      variables: { input: { viewMode: data.viewMode } },
    });
    setOpen(false);
    formMethods.reset();
    refetchUser();
  };

  const value = {
    loading,
    formMethods,
    onSubmit,
    setOpen,
  };

  return (
    <ViewModeSelectDialogContext.Provider value={value}>
      {children}

      <PwModal
        // noCloseButton
        open={open}
        onOpenChange={async (open) => {
          setOpen(open);

          // If the user closes the modal without selecting a view mode
          // we need to set the view mode to the default value
          if (!open) {
            await onSubmit({ viewMode: ViewMode.Author });
          }
        }}
        // onInteractOutside={(e) => e.preventDefault()}
        // onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <ViewModeSelect />
      </PwModal>
    </ViewModeSelectDialogContext.Provider>
  );
};
