import { useMatches } from "react-router-dom";

export function Breadcrumbs() {
  let matches = useMatches();
  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  const breadcrumbs = crumbs.map((crumb, ind) => {
    console.log(crumb);
    const notLast = ind < crumbs.length - 1;
    if (notLast) {
      return (
        <>
          <span className="name">{crumb}</span>
          <span className="arrow">&gt;</span>
        </>
      );
    } else {
      return <span className="name">{crumb}</span>;
    }
  });

  return <div>{breadcrumbs}</div>;
}
