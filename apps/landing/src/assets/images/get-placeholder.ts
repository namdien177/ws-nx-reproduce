const defaultIndex = 1;

export const DEFAULT_PLACEHOLDER_IMAGE = `./placeholder-${defaultIndex}.jpg`;

export const getPlaceholderImage = (index?: number) => {
  const imageIndex = Math.round(index ?? Math.floor(Math.random() * 4) + 1);
  let image: string;

  switch (imageIndex) {
    case 1:
    case 2:
    case 3:
    case 4:
      image = `/placeholder/${imageIndex}.jpg`;
      break;
    default:
      image = DEFAULT_PLACEHOLDER_IMAGE;
      break;
  }

  return image;
};
