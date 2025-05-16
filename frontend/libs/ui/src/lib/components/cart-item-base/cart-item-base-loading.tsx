import { Button, ThrashIcon } from '@pw-fe-monorepo/ui';
import { twMerge } from 'tailwind-merge';

export const CartItemBaseLoading = () => {
  return (
    <div className={twMerge('flex items-stretch gap-4 transition-opacity')}>
      <div className={twMerge('shrink-0 relative w-[104px]')}>
        <div className="w-full h-full skeleton-loader rounded-lg"></div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg skeleton-loader rounded-lg">test</p>

          <p className="skeleton-loader rounded-lg">test test</p>

          <p className="text-lg skeleton-loader rounded-lg mt-2">test</p>
        </div>

        <div className="flex items-center gap-4">
          {/* DISABLED FOR THE MVP */}
          {/* <QuantitySelector
            value={localQuantity}
            onChange={async (event) => {
              const newValue = Number(event.target.value);
              setLocalQuantity(newValue);
              debouncedUpdateCountOnCart({ quantity: newValue });
            }}
          /> */}

          <Button variant="secondary" size="icon" className="skeleton-loader">
            <ThrashIcon className="w-5 h-5 stroke-black dark:stroke-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};
