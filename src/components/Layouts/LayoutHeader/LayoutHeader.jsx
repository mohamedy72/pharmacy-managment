import Button from "../../UI/Button/Button";

const LayoutHeader = ({
  layoutClass,
  textClass,
  btnClass,
  iconDir,
  label,
  text,
  paragraph,
}) => {
  return (
    <section className={layoutClass}>
      <div className={textClass}>
        <h2>{text}</h2>
        <p>{paragraph}</p>
      </div>
      <Button btnClass={btnClass} iconDir={iconDir} label={label} />
    </section>
  );
};

export default LayoutHeader;
