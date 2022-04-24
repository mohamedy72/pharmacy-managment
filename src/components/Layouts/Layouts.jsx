import classes from "./layouts.module.css";

const Layouts = ({ children }) => {
  return <main className={classes.main_app}>{children}</main>;
};

const GridLayout = ({ gridClass, children }) => {
  return <div className={(gridClass, classes.grid)}>{children}</div>;
};

export { Layouts, GridLayout };
