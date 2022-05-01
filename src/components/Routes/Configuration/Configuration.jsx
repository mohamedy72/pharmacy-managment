import classes from "./configuration.module.css";
import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";
import { Config } from "../../UI/Widgets";

const Configuration = () => {
  return (
    <section className={classes.config}>
      <LayoutHeader
        layoutClass={classes.config_header}
        textClass={classes.config_header_text}
        btnClass={classes.config_btn}
        iconDir="left"
        text="Configurations"
        paragraph="Configure your pharmacy application."
      />
      <section className={classes.configs}>
        <Config
          label="branding"
          value="enter name"
          property="pharmacist name"
          value_2="PH349TY228"
          property_2="pharmacy id"
        />
        <Config
          label="owner"
          value="enter name"
          property="owner name"
          value_2="user@email.com"
          property_2="owner email"
        />
      </section>
    </section>
  );
};
export default Configuration;
