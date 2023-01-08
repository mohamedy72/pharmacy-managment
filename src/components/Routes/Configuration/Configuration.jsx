import "./configuration.css";
import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";
import { Config, Page, Pages } from "../../UI/Widgets";

import { pages } from "../../../data/pages";

const Configuration = () => {
  return (
    <section className="configuration">
      <LayoutHeader
        layoutClass="config_header"
        textClass="config_header_text"
        btnClass="config_btn"
        iconDir="left"
        text="Configurations"
        paragraph="Configure your pharmacy application."
      />
      <section className="configs">
        <Config
          label="branding"
          value="enter name"
          property="pharmacist name"
          value_2="PH349TY228"
          property_2="pharmacy id"
          hasIcon
        />
        <Config
          label="owner"
          value="enter name"
          property="owner name"
          value_2="user@email.com"
          property_2="owner email"
          hasIcon
        />
        <Pages label="pages" action="Action">
          {pages?.map((page) => (
            <tr key={page.id}>
              <Page page_name={page.page_name} />
            </tr>
          ))}
        </Pages>
      </section>
    </section>
  );
};
export default Configuration;
