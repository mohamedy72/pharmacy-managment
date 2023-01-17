import "./breadcrumbs.css";

import { useMatches } from "react-router-dom";
import { Fragment } from "react";

export function Breadcrumbs() {
  let matches = useMatches();
  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  const breadcrumbs = crumbs.map((crumb, ind) => {
    const notLast = ind < crumbs.length - 1;

    return (
      <Fragment key={ind * 1.2}>
        {notLast ? (
          <>
            <span className="name">{crumb}</span>
            <span className="arrow">&gt;</span>
          </>
        ) : (
          <span className="name">{crumb}</span>
        )}
      </Fragment>
    );
  });

  return breadcrumbs;
}
