import React, { FC, useContext, useEffect } from "react";
import List from "../../components/list/List";
import { PageContext } from "../../App";
import { useHistory } from "react-router-dom";
import { IBank } from "../../types/types";
import BankItem from "./BankItem";
import BankForm from "./BankForm";

const BanksList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);

  useEffect(() => {
    setPageTitle("Banks");
  }, []);

  return (
    <List
      entityName="bank"
      hatItems={["ID", "Name", "BIC", "Status"]}
      renderItem={(bank: IBank) => (
        <BankItem
          onClick={(bank: IBank) => history.push("/banks/" + bank.id)}
          bank={bank}
          key={bank.id}
        />
      )}
      renderForm={(bank: IBank) => <BankForm model={bank} />}
      apiPath="banks"
    />
  );
};

export default BanksList;
