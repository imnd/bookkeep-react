import React from "react";
import { IBill, IKeyVal } from "../../types/types";
import BaseText from "../../components/form/BaseText";
import BaseTextarea from "../../components/form/BaseTextarea";
import BaseSelect from "../../components/form/BaseSelect";

export default function BillForm(props: {
  model: IBill;
  clients: IKeyVal<string>;
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
      <BaseText name="sum" type="number" model={props.model} />
      <BaseText name="remainder" type="number" model={props.model} />
      <BaseTextarea name="description" model={props.model} />
    </>
  );
}
