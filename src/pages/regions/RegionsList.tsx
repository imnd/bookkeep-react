import React, { FC, useContext, useEffect } from "react";
import List from "../../components/list/List";
import { PageContext } from "../../App";
import { useHistory } from "react-router-dom";
import { IRegion } from "../../types/types";
import RegionItem from "./RegionItem";
import RegionForm from "./RegionForm";

const RegionsList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);

  useEffect(() => {
    setPageTitle("Regions");
  }, []);

  return (
    <List
      entityName="region"
      apiPath="regions"
      hatItems={["ID", "Name"]}
      renderItem={(region: IRegion) => (
        <RegionItem
          onClick={(region: IRegion) => history.push("/regions/" + region.id)}
          region={region}
          key={region.id}
        />
      )}
      renderForm={(region: IRegion) => <RegionForm model={region} />}
    />
  );
};

export default RegionsList;
