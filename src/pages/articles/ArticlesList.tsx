import React, { FC, useContext, useEffect, useState } from "react";
import List from "../../components/list/List";
import ArticleForm from "./ArticleForm";
import ArticleItem from "./ArticleItem";
import { useHistory } from "react-router-dom";
import { PageContext } from "../../App";
import { IArticle, IKeyVal } from "../../types/types";
import { fetch, flatten } from "../../helpers/helpers";

const ArticlesList: FC = () => {
  const { setPageTitle } = useContext(PageContext);
  const [subcategories, setSubcategories] = useState<IKeyVal<string>>(
    {} as IKeyVal<string>,
  );

  useEffect(() => {
    setPageTitle("Articles");
    fetch("article-subcategories").then((response) =>
      setSubcategories(flatten(response.data)),
    );
  }, []);

  const history = useHistory();

  return (
    <List
      entityName="article"
      apiPath="articles"
      hatItems={["ID", "Name", "Price", "Unit", "Status"]}
      renderItem={(item: IArticle) => (
        <ArticleItem
          onClick={(item) => history.push(`/articles/${item.id}`)}
          article={item}
        />
      )}
      renderForm={(item: IArticle) => (
        <ArticleForm model={item} subcategories={subcategories} />
      )}
    />
  );
};

export default ArticlesList;
