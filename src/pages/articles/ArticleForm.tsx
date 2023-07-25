import { IArticle, IKeyVal } from "../../types/types";
import BaseText from "../../components/form/BaseText";
import BaseCheckbox from "../../components/form/BaseCheckbox";
import BaseRadio from "../../components/form/BaseRadio";
import BaseSelect from "../../components/form/BaseSelect";

export default function ArticleForm(props: {
  model: IArticle;
  subcategories: IKeyVal<string>;
}) {
  return (
    <>
      <BaseSelect
        name="subcatId"
        label="subcategory"
        options={props.subcategories}
        model={props.model}
      />
      <BaseText name="name" model={props.model} />
      <BaseText name="price" model={props.model} />
      <BaseRadio name="unit" values={["kg", "item"]} model={props.model} />
      <BaseCheckbox
        name="active"
        label="status"
        model={props.model}
        default={true}
      />
    </>
  );
}
