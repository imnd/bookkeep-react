import React, { FC } from "react";
import { IArticleSubcategory } from "../../types/types";

interface ArticleSubcategoryItemProps {
  item: IArticleSubcategory;
  onClick: (article: IArticleSubcategory) => void;
}

const ArticleSubcategoryItem: FC<ArticleSubcategoryItemProps> = ({
  item,
  onClick,
}) => {
  return (
    <>
      <td className="p-4" onClick={() => onClick(item)}>
        {item.id}
      </td>
      <td className="p-4" onClick={() => onClick(item)}>
        {item.category.name}
      </td>
      <td className="p-4">{item.name}</td>
    </>
  );
};

export default ArticleSubcategoryItem;
