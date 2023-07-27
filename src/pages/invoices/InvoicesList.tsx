import React, { FC, useContext, useEffect, useState } from "react";
import { IInvoice, IKeyVal } from "../../types/types";
import List from "../../components/list/List";
import InvoiceItem from "./InvoiceItem";
import { useHistory } from "react-router-dom";
import { PageContext } from "../../App";
import InvoiceForm from "./InvoiceForm";
import { fetch, flatten } from "../../helpers/helpers";

const InvoicesList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);
  const [clients, setClients] = useState<IKeyVal<string>>(
    {} as IKeyVal<string>,
  );
  const [articles, setArticles] = useState<IKeyVal<string>>(
    {} as IKeyVal<string>,
  );

  useEffect(() => {
    setPageTitle("Invoices");
    fetch("clients").then((response) => setClients(flatten(response.data)));
    fetch("articles").then((response) => setArticles(flatten(response.data)));
  }, []);

  return (
    <List
      entityName="invoice"
      apiPath="invoices"
      hatItems={[
        "ID",
        "Invoice number",
        "Contract number",
        "Client",
        "Paid",
        "Date",
      ]}
      renderItem={(item: IInvoice) => (
        <InvoiceItem
          onClick={(item: IInvoice) => history.push("/invoices/" + item.id)}
          invoice={item}
          key={item.id}
        />
      )}
      renderForm={(item: IInvoice) => (
        <InvoiceForm model={item} clients={clients} articles={articles} />
      )}
      formMode="modal"
      withRows={true}
    />
  );
};

export default InvoicesList;
