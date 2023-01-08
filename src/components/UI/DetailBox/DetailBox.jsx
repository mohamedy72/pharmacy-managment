const DetailBox = ({ title }) => {
  return (
    <article className="detail_box">
      <div className="top">
        <h4>{title}</h4>
      </div>
      <hr />
      <div className="bottom"></div>
    </article>
  );
};

export default DetailBox;
