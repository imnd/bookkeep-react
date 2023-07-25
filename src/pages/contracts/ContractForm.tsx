import { IContract, IKeyVal, IRow } from "../../types/types";
import BaseText from "../../components/form/BaseText";
import BaseSelect from "../../components/form/BaseSelect";
import BaseDate from "../../components/form/BaseDate";
import ContractRow from "./ContractRow";

export default function ContractForm(props: {
  model: IContract;
  clients: IKeyVal<string>;
  articles: IKeyVal<string>;
}) {
  return (
    <>
      <BaseSelect
        name="clientId"
        label="client"
        options={props.clients}
        model={props.model}
      />
      <BaseText
        name="contractNum"
        label="contract number"
        model={props.model}
      />
      <BaseText
        name="contractNum"
        label="contract number"
        model={props.model}
      />
      <BaseText name="sum" type="number" model={props.model} />
      <BaseText name="paid" type="number" model={props.model} />
      <BaseDate name="date" model={props.model} />

      <table>
        <tbody>
          <tr>
            <th scope="col" className="p-4">
              article
            </th>
            <th scope="col" className="p-4">
              quantity
            </th>
            <th scope="col" className="p-4">
              price
            </th>
          </tr>
          {props.model?.rows &&
            props.model.rows.map((item: IRow, index) => (
              <ContractRow key={index} model={item} articles={props.articles} />
            ))}
          <ContractRow articles={props.articles} />
        </tbody>
      </table>
    </>
  );
}
