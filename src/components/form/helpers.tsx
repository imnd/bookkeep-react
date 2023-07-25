import { IModel } from "../../types/types";

export class FormRowHelpers {
  model: IModel | undefined;

  constructor(model: IModel | undefined) {
    this.model = model;
  }

  getRowId() {
    return this.model ? "row-" + this.model.id : "emptyRow";
  }

  deleteRow() {
    const htmlElement = document.getElementById(`${this.getRowId()}`);
    htmlElement?.remove();
  }

  cloneRow() {
    const row = document.getElementById(`${this.getRowId()}`);
    const clone = row?.cloneNode(true) as HTMLElement;
    if (clone) {
      clone.setAttribute("id", "_id");
      row?.parentElement?.appendChild(clone);
    }
  }
}
