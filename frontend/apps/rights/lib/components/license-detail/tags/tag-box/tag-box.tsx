export const TagBox = ({
  heading,
  desc,
}: {
  heading: string;
  desc: string | React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-dark-300">
        {heading}
      </p>

      <p className="lg:text-lg font-bold">{desc}</p>
    </div>
  );
};
