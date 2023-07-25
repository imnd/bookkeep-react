import React, { FC, useContext, useEffect, useState } from "react";
import { IContract, IKeyVal } from "../../types/types";
import List from "../../components/list/List";
import ContractItem from "./ContractItem";
import { useHistory } from "react-router-dom";
import { PageContext } from "../../App";
import ContractForm from "./ContractForm";
import { fetch, flatten } from "../../helpers/helpers";

const ContractsList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);
  const [clients, setClients] = useState<IKeyVal<string>>(
    {} as IKeyVal<string>,
  );
  const [articles, setArticles] = useState<IKeyVal<string>>(
    {} as IKeyVal<string>,
  );

  useEffect(() => {
    setPageTitle("Contracts");
    fetch("clients").then((response) => setClients(flatten(response.data)));
    fetch("articles").then((response) => setArticles(flatten(response.data)));
  }, []);

  return (
    <List
      entityName="contract"
      apiPath="contracts"
      hatItems={[
        "ID",
        "Contract number",
        "Contract number",
        "Client",
        "Paid",
        "Date",
      ]}
      renderItem={(item: IContract) => (
        <ContractItem
          onClick={(item: IContract) => history.push("/contracts/" + item.id)}
          contract={item}
          key={item.id}
        />
      )}
      renderForm={(item: IContract) => (
        <ContractForm model={item} clients={clients} articles={articles} />
      )}
      formMode="modal"
    />
  );
};

export default ContractsList;
