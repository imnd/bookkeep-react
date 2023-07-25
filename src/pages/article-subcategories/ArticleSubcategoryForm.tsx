import { IArticleSubcategory, IKeyVal } from "../../types/types";
import BaseText from "../../components/form/BaseText";
import BaseSelect from "../../components/form/BaseSelect";

export default function ArticleSubcategoryForm(props: {
  model: IArticleSubcategory;
  categories: IKeyVal<string>;
}) {
  return (
    <>
      <BaseSelect
        name="subcatId"
        label="category"
        options={props.categories ?? {}}
        model={props.model}
      />
      <BaseText name="name" model={props.model} />
    </>
  );
}
