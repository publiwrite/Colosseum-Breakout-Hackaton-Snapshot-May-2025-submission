import { NotFound } from '@pw-fe-monorepo/ui';

export default function NF() {
  return (
    <NotFound
      title="License not found"
      description="The license you are looking for does not exist."
    />
  );
}
