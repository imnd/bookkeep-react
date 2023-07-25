import React, { FC } from "react";
import { IArticle } from "../../types/types";
import StatusWidget from "../../components/list/StatusWidget";

interface ArticleItemProps {
  article: any;
  onClick: (article: IArticle) => void;
}

const ArticleItem: FC<ArticleItemProps> = ({ article, onClick }) => {
  return (
    <>
      <td className="p-4" onClick={() => onClick(article)}>
        {article.id}
      </td>
      <td className="p-4" onClick={() => onClick(article)}>
        {article.name}
      </td>
      <td className="p-4">{article.price}</td>
      <td className="p-4">{article.unit}</td>
      <td className="p-4">
        <StatusWidget active={article?.active} />
      </td>
    </>
  );
};

export default ArticleItem;
