import React, { FC, useContext, useEffect } from "react";
import List from "../../components/list/List";
import { PageContext } from "../../App";
import { useHistory } from "react-router-dom";
import { ISetting } from "../../types/types";
import SettingItem from "./SettingItem";
import SettingForm from "./SettingForm";

const SettingsList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);

  useEffect(() => {
    setPageTitle("Settings");
  }, []);

  return (
    <List
      entityName="setting"
      apiPath="settings"
      hatItems={["ID", "Name", "Key", "Value"]}
      renderItem={(setting: ISetting) => (
        <SettingItem
          onClick={(setting: ISetting) => history.push("/settings/" + setting.id)}
          setting={setting}
          key={setting.id}
        />
      )}
      renderForm={(setting: ISetting) => <SettingForm model={setting} />}
    />
  );
};

export default SettingsList;
