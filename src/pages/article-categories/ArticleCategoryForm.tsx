import { IArticleCategory } from "../../types/types";
import BaseText from "../../components/form/BaseText";
import BaseTextarea from "../../components/form/BaseTextarea";

export default function ArticleCategoryForm(props: {
  model: IArticleCategory;
}) {
  return (
    <>
      <BaseText name="name" model={props.model} />
      <BaseTextarea name="description" model={props.model} />
    </>
  );
}
