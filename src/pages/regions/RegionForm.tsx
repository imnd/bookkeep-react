import BaseText from "../../components/form/BaseText";
import {IRegion} from "../../types/types";

export default function RegionForm(props: { model: IRegion; }) {
    return (
      <>
        <BaseText name="name" model={props.model} />
      </>
    );
}
