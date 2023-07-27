import React, { FC, useContext, useEffect } from "react";
import { IArticleCategory } from "../../types/types";
import List from "../../components/list/List";
import ArticleCategoryItem from "./ArticleCategoryItem";
import ArticleCategoryForm from "./ArticleCategoryForm";
import { useHistory } from "react-router-dom";
import { PageContext } from "../../App";

const ArticleCategoriesList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);

  useEffect(() => {
    setPageTitle("Articles categories");
  }, []);

  return (
    <List
      entityName="article category"
      apiPath="article-categories"
      hatItems={["ID", "Name"]}
      renderItem={(item: IArticleCategory) => (
        <ArticleCategoryItem
          onClick={(item) => history.push("/article-categories/" + item.id)}
          item={item}
          key={item.id}
        />
      )}
      renderForm={(item: IArticleCategory) => (
        <ArticleCategoryForm model={item} />
      )}
    />
  );
};

export default ArticleCategoriesList;
