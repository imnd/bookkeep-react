import React from "react";
import BaseText from "../../components/form/BaseText";
import BaseCheckbox from "../../components/form/BaseCheckbox";
import {IBank} from "../../types/types";

export default function BankForm(props: { model: IBank; }) {
    return (
      <>
        <BaseText name="name" model={props.model} />
        <BaseText name="BIC" model={props.model} />
        <BaseCheckbox name="active" model={props.model} default={true} />
      </>
    );
}
