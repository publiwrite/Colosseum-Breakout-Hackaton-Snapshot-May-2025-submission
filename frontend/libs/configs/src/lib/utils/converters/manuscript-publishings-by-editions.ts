export const getPublishingsByEditions = <
  T extends {
    edition?: { name: string; [key: string]: unknown } | null;
    [key: string]: unknown;
    createdAt: string;
  },
>(
  publishings: T[],
) => {
  return publishings.reduce(
    (acc, publishing) => {
      const edition = publishing.edition?.name;

      if (!edition) return acc;

      if (!acc[edition]) {
        acc[edition] = [];
      }

      acc[edition].push(publishing);
      acc[edition].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

      // Sort editions in descending order
      const sortedAcc = Object.entries(acc)
        .sort(([editionA], [editionB]) => editionB.localeCompare(editionA))
        .reduce(
          (obj, [key, value]) => {
            obj[key] = value;
            return obj;
          },
          {} as Record<string, T[]>,
        );

      return sortedAcc;
    },
    {} as Record<string, T[]>,
  );
};
