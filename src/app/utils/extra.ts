export const convertViewsToHumanReadable = (views: string[]) => {
  const readableViewsArray = views.map(
    (view) =>
      view
        .trim() // Remove any extra spaces
        .toLowerCase()
        .replace("_view", "") // Remove view word
        .split("_") // Split based on underscore
        .map((viewWord) => viewWord.charAt(0).toUpperCase() + viewWord.slice(1)) // Capitalize first letter of each word
        .join(" ") // Join again to form the view
  );

  const commaSeparatedViews = readableViewsArray.join(", ");
  return commaSeparatedViews;
};
