import { twMerge } from 'tailwind-merge';
import './paper-size-option.scss';

export const PaperSizeOptionSkeletonLoader = () => {
  return (
    <label className="paper-size-label">
      <span
        className={twMerge('paper-size-label__wrapper', 'skeleton-loader')}
      ></span>

      <span className="paper-size-label__text-wrapper">
        <span className="paper-size-label__text-wrapper__name skeleton-loader rounded-lg">
          demo name
        </span>
        <span className="paper-size-label__text-wrapper__size skeleton-loader rounded-lg">
          demo size
          <br />
          demo size
        </span>
      </span>
    </label>
  );
};
