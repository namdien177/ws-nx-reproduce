type SortingMapper<T> = (v: T) => Date;

export const sortingCollectionNewestFirst = <T>(
  collection: T[],
  mapper?: SortingMapper<T>,
) => {
  return collection.sort((a, b) => {
    const dateA = mapper ? mapper(a) : a;
    const dateB = mapper ? mapper(b) : b;

    // check if the date is a Date object
    if (!(dateA instanceof Date) || !(dateB instanceof Date)) {
      throw new Error(
        'The collection provided is not a Date collection. Consider using a mapper to transform the collection to a Date object.',
      );
    }

    return dateB.valueOf() - dateA.valueOf();
  });
};
