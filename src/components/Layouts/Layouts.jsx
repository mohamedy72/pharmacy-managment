import "./layouts.css";

const Layouts = ({ children }) => {
  return <main className="main_app">{children}</main>;
};

const GridLayout = ({ gridClass, children }) => {
  return (
    <div
      className={`
      grid ${gridClass}
    `}
    >
      {children}
    </div>
  );
};

export { Layouts, GridLayout };
