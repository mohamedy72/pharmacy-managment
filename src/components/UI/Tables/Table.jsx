import "./tables.css";

const Table = ({ children }) => {
  return <table className="table">{children}</table>;
};

Table.Header = (props) => (
  <thead className="table_header">{props.children}</thead>
);
Table.Body = (props) => <tbody className="table_body">{props.children}</tbody>;
Table.Footer = (props) => (
  <tfoot className="table_footer">{props.children}</tfoot>
);

export default Table;
