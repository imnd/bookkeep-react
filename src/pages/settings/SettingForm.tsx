import BaseText from "../../components/form/BaseText";
import {ISetting} from "../../types/types";

export default function SettingForm(props: { model: ISetting; }) {
    return (
      <>
        <BaseText name="name" model={props.model} />
        <BaseText name="key" model={props.model} />
        <BaseText name="value" model={props.model} />
      </>
    );
}
