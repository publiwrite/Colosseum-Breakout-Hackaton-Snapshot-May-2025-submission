export const FieldAsLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="flex-1">
      <span className="line-clamp-1">{children}</span>
    </p>
  );
};
