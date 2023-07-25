import React, { FC, useContext, useEffect, useState } from "react";
import List from "../../components/list/List";
import { IArticleSubcategory, IKeyVal } from "../../types/types";
import ArticleSubcategoryItem from "./ArticleSubcategoryItem";
import ArticleSubcategoryForm from "./ArticleSubcategoryForm";
import { useHistory } from "react-router-dom";
import { PageContext } from "../../App";
import { fetch, flatten } from "../../helpers/helpers";

const ArticleSubcategoriesList: FC = () => {
  const history = useHistory();
  const { setPageTitle } = useContext(PageContext);
  const [categories, setCategories] = useState<IKeyVal<string>>(
    {} as IKeyVal<string>,
  );

  useEffect(() => {
    setPageTitle("Articles subcategories");
    fetch("categories").then((response) =>
      setCategories(flatten(response.data)),
    );
  }, []);

  return (
    <List
      entityName="article subcategory"
      hatItems={["ID", "Category", "Name"]}
      renderItem={(item: IArticleSubcategory) => (
        <ArticleSubcategoryItem
          onClick={(item) => history.push("/article-subcategories/" + item.id)}
          item={item}
          key={item.id}
        />
      )}
      renderForm={(item: IArticleSubcategory) => (
        <ArticleSubcategoryForm model={item} categories={categories} />
      )}
      apiPath="article-subcategories"
    />
  );
};

export default ArticleSubcategoriesList;
