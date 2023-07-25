import { IClient, IKeyVal } from "../../types/types";
import BaseText from "../../components/form/BaseText";
import BaseSelect from "../../components/form/BaseSelect";
import React from "react";
import BaseCheckbox from "../../components/form/BaseCheckbox";

export default function ClientForm(props: {
  model: IClient;
  regions: IKeyVal<string>;
  banks: IKeyVal<string>;
}) {
  return (
    <>
      <BaseSelect
        name="regionId"
        label="region"
        options={props.regions}
        model={props.model}
      />
      <BaseText name="name" model={props.model} />
      <BaseText name="address" model={props.model} />
      <BaseText name="phone" label="Contact phone" model={props.model} />
      <BaseText name="contactName" label="Contact name" model={props.model} />
      <BaseText
        name="contactPosition"
        label="Contact position"
        model={props.model}
      />
      <BaseSelect
        name="bankId"
        label="bank"
        options={props.banks}
        model={props.model}
      />
      <BaseText name="bankAccountNum" model={props.model} />
      <BaseText name="UTR" model={props.model} />
      <BaseText
        name="nextCallDate"
        label="Next call date"
        type="date"
        model={props.model}
      />
      <BaseCheckbox
        name="active"
        label="status"
        model={props.model}
        default={true}
      />
    </>
  );
}
