import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Table = forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div className="overflow-x-auto p-2 -m-2">
      <table
        ref={ref}
        {...props}
        className={twMerge(
          'rounded-xl w-full table-auto shadow-base overflow-hidden',
          'bg-white dark:bg-gray-dark-800',
          className,
        )}
      >
        {children}
      </table>
    </div>
  );
});

export const TableHead = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ children, className, ...props }, ref) => {
  return (
    <thead ref={ref} {...props} className={twMerge(className)}>
      {children}
    </thead>
  );
});

export const TableHeadCell = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ children, className, ...props }, ref) => {
  return (
    <th
      ref={ref}
      {...props}
      className={twMerge(
        'p-5 text-left text-sm font-normal text-gray-700 dark:text-gray-dark-300 whitespace-nowrap',
        className,
      )}
    >
      {children}
    </th>
  );
});

export const TableCell = forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ children, className, ...props }, ref) => {
  return (
    <td
      ref={ref}
      {...props}
      className={twMerge('whitespace-nowrap', className)}
    >
      {children}
    </td>
  );
});

export const TableRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    disableHoverHighlight?: boolean;
  }
>(({ children, disableHoverHighlight, className, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      {...props}
      className={twMerge(
        'group-[.tbody]:odd:bg-gray-100 group-[.tbody]:odd:dark:bg-gray-800',
        !disableHoverHighlight &&
          'group-[.tbody]:hover:bg-gray-200 group-[.tbody]:hover:dark:bg-gray-700',
        className,
      )}
    >
      {children}
    </tr>
  );
});

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ children, className, ...props }, ref) => {
  return (
    <tbody ref={ref} {...props} className={twMerge('group tbody', className)}>
      {children}
    </tbody>
  );
});

export const TableEmpty = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <TableRow>
      <TableCell colSpan={107}>
        <div
          ref={ref}
          {...props}
          className={twMerge('p-5 text-center flex flex-col gap-4', className)}
        >
          {children}
        </div>
      </TableCell>
    </TableRow>
  );
});
