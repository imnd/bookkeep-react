import BaseSelect from "../../components/form/BaseSelect";
import BaseText from "../../components/form/BaseText";
import FormRowButtons from "../../components/form/FormRowButtons";
import { FormHelpers } from "../../components/form/helpers";
import { IKeyVal, IRow } from "../../types/types";

export default function InvoiceRow(props: {
  model?: IRow;
  articles: IKeyVal<string>;
}) {
  const formRowHelpers = new FormHelpers(props.model);

  return (
    <tr id={formRowHelpers.getRowId()}>
      <td>
        <BaseSelect
          name="articleId"
          options={props.articles}
          multiple={true}
          model={props.model}
          showLabel={false}
          voidText="Select article"
        />
      </td>
      <td>
        <BaseText
          name="quantity"
          type="number"
          multiple={true}
          model={props.model}
          showLabel={false}
        />
      </td>
      <td>
        <BaseText
          name="price"
          type="number"
          multiple={true}
          model={props.model}
          showLabel={false}
        />
      </td>
      <FormRowButtons model={props.model} />
    </tr>
  );
}
