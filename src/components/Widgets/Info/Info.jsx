import "./info.css";

const Info = ({
  title,
  withSingleParagraph,
  withMultipleStats,
  stats = [],
  paragraph,
}) => {
  return (
    <div className="info_card">
      <h3 className="info_title">{title}</h3>
      <hr />
      <div className="info_body">
        {withSingleParagraph ? (
          <p>{paragraph}</p>
        ) : (
          withMultipleStats &&
          stats && <RenderMultipleStats statsData={stats} />
        )}
      </div>
    </div>
  );
};

const RenderMultipleStats = ({ statsData }) => {
  return statsData?.map((el, ind) => (
    <p className="info_page_item" key={ind * 2}>
      <span className="info_body_value">{el.value}</span>
      <span className="info_body_label">{el.label}</span>
    </p>
  ));
};

export default Info;
