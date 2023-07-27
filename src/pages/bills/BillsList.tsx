import React, { FC, useContext, useEffect, useState } from "react";
import List from "../../components/list/List";
import { PageContext } from "../../App";
import { useHistory } from "react-router-dom";
import { IBill, IKeyVal } from "../../types/types";
import BillItem from "./BillItem";
import BillForm from "./BillForm";
import { fetch, flatten } from "../../helpers/helpers";

const BillsList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);
  const [clients, setClients] = useState<IKeyVal<string>>(
    {} as IKeyVal<string>,
  );

  useEffect(() => {
    setPageTitle("Bills");
    fetch("clients").then((response) => setClients(flatten(response.data)));
  }, []);

  return (
    <List
      entityName="bill"
      apiPath="bills"
      hatItems={["ID", "Contract number", "Sum", "Remainder"]}
      renderItem={(bill: IBill) => (
        <BillItem
          onClick={(bill: IBill) => history.push(`/bills/${bill.id}`)}
          bill={bill}
          key={bill.id}
        />
      )}
      renderForm={(bill: IBill) => <BillForm model={bill} clients={clients} />}
    />
  );
};

export default BillsList;
