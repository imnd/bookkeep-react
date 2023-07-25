import React, { FC, useContext, useEffect, useState } from "react";
import { IPurchase, IKeyVal } from "../../types/types";
import List from "../../components/list/List";
import PurchaseItem from "./PurchaseItem";
import { useHistory } from "react-router-dom";
import { PageContext } from "../../App";
import PurchaseForm from "./PurchaseForm";
import { fetch, flatten } from "../../helpers/helpers";

const PurchasesList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);
  const [articleSubcategories, setArticleSubcategories] = useState<
    IKeyVal<string>
  >({} as IKeyVal<string>);

  useEffect(() => {
    setPageTitle("Purchases");
    fetch("article-subcategories").then((response) =>
      setArticleSubcategories(flatten(response.data)),
    );
  }, []);

  return (
    <List
      entityName="purchase"
      apiPath="purchases"
      hatItems={["ID", "Number", "Sum", "Date"]}
      renderItem={(item: IPurchase) => (
        <PurchaseItem
          onClick={(item: IPurchase) => history.push("/purchases/" + item.id)}
          purchase={item}
          key={item.id}
        />
      )}
      renderForm={(item: IPurchase) => (
        <PurchaseForm
          model={item}
          articleSubcategories={articleSubcategories}
        />
      )}
      formMode="modal"
    />
  );
};

export default PurchasesList;
