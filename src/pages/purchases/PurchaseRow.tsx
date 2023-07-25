import BaseSelect from "../../components/form/BaseSelect";
import BaseText from "../../components/form/BaseText";
import FormRowButtons from "../../components/form/FormRowButtons";
import { FormRowHelpers } from "../../components/form/helpers";
import { IKeyVal, IRow } from "../../types/types";

export default function PurchaseRow(props: {
  model?: IRow;
  articleSubcategories: IKeyVal<string>;
}) {
  const formRowHelpers = new FormRowHelpers(props.model);

  return (
    <tr id={formRowHelpers.getRowId()}>
      <td>
        <BaseSelect
          name="articleSubcategoryId"
          options={props.articleSubcategories}
          multiple={true}
          model={props.model ?? null}
          showLabel={false}
          voidText="Select article subcategory"
        />
      </td>
      <td>
        <BaseText
          name="quantity"
          type="number"
          multiple={true}
          model={props.model ?? null}
          showLabel={false}
        />
      </td>
      <td>
        <BaseText
          name="price"
          type="number"
          multiple={true}
          model={props.model ?? null}
          showLabel={false}
        />
      </td>
      <FormRowButtons model={props.model} />
    </tr>
  );
}
