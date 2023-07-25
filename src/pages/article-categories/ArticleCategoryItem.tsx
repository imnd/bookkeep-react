import React, { FC } from "react";
import { IArticleCategory } from "../../types/types";

interface ArticleCategoryItemProps {
  item: IArticleCategory;
  onClick: (article: IArticleCategory) => void;
}

const ArticleCategoryItem: FC<ArticleCategoryItemProps> = ({
  item,
  onClick,
}) => {
  return (
    <>
      <td className="p-4" onClick={() => onClick(item)}>
        {item.id}
      </td>
      <td className="p-4" onClick={() => onClick(item)}>
        {item.name}
      </td>
      <td className="p-4">{item.description}</td>
    </>
  );
};

export default ArticleCategoryItem;
