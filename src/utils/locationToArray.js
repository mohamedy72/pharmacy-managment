export const locationToArray = (path) => {
  const arrOfPaths = path.split("/").filter((path) => path !== "");
  const finishedPath = arrOfPaths.map(
    (path) => path[0].toUpperCase() + path.slice(1)
  );

  return finishedPath;
};
