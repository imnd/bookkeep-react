import { IPurchase, IKeyVal, IRow } from "../../types/types";
import BaseText from "../../components/form/BaseText";
import BaseDate from "../../components/form/BaseDate";
import PurchaseRow from "./PurchaseRow";

export default function PurchaseForm(props: {
  model: IPurchase;
  articleSubcategories: IKeyVal<string>;
}) {
  return (
    <>
      <BaseText name="number" label="number" model={props.model} />
      <BaseText name="sum" type="number" model={props.model} />
      <BaseDate name="date" model={props.model} />

      <table>
        <tbody>
          <tr>
            <th scope="col" className="p-4">
              article subcategory
            </th>
          </tr>
          {props.model?.rows &&
            props.model.rows.map((item: IRow, index) => (
              <PurchaseRow
                key={index}
                model={item}
                articleSubcategories={props.articleSubcategories}
              />
            ))}
          <PurchaseRow articleSubcategories={props.articleSubcategories} />
        </tbody>
      </table>
    </>
  );
}
