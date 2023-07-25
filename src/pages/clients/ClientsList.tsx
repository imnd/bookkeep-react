import React, { FC, useContext, useEffect, useState } from "react";
import { IClient, IKeyVal } from "../../types/types";
import List from "../../components/list/List";
import ClientItem from "./ClientItem";
import { useHistory } from "react-router-dom";
import { PageContext } from "../../App";
import ClientForm from "./ClientForm";
import { fetch, flatten } from "../../helpers/helpers";

const ClientsList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);
  const [regions, setRegions] = useState<IKeyVal<string>>(
    {} as IKeyVal<string>,
  );
  const [banks, setBanks] = useState<IKeyVal<string>>({} as IKeyVal<string>);

  useEffect(() => {
    setPageTitle("Clients");
    fetch("regions").then((response) => setRegions(flatten(response.data)));
    fetch("banks").then((response) => setBanks(flatten(response.data)));
  }, []);

  return (
    <List
      entityName="client"
      apiPath="clients"
      hatItems={[
        "ID",
        "Name",
        "Region",
        "Address",
        "Phone",
        "Contact name",
        "Contact position",
        "Bank",
        "Bank account",
        "UTR",
        "Next call date",
        "Status",
      ]}
      renderItem={(item: IClient) => (
        <ClientItem
          onClick={(item: IClient) => history.push("/clients/" + item.id)}
          client={item}
          key={item.id}
        />
      )}
      renderForm={(item: IClient) => (
        <ClientForm model={item} regions={regions} banks={banks} />
      )}
    />
  );
};

export default ClientsList;
