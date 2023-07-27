import { IArrayKeyVal, IKeyVal, IModel } from "../../types/types";
import React from "react";

export class FormHelpers {
  model?: IModel;

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

export function getRequestData(
  e: React.ChangeEvent<HTMLFormElement>,
): IKeyVal<string | string[]> {
  e.preventDefault();

  const requestData = {} as IKeyVal<string | string[]>;
  const formData = new FormData(e.target);

  formData.forEach((val, key) => {
    requestData[key] = val as string;
  });

  return requestData;
}

export function getRequestDataWithRows(
  e: React.ChangeEvent<HTMLFormElement>,
): IKeyVal<string | string[]> {
  e.preventDefault();

  const formData = new FormData(e.target);

  let requestData = {
    rows: [] as IArrayKeyVal<string>,
  } as any;

  const keys: string[] = [];
  formData.forEach((val, key) => {
    const value = val as string;

    if (key.indexOf("[]") !== -1) {
      if (keys.includes(key)) {
        const values = requestData[key] as string[];
        values.push(value);
        requestData[key] = values;
      } else {
        keys.push(key);
        requestData[key] = [value];
      }
    } else {
      requestData[key] = value;
    }
  });

  for (const dataKey in requestData) {
    if (dataKey.indexOf("[]") !== -1) {
      const key = dataKey.replace("[]", "");
      const data = requestData[dataKey] as string[];

      data.forEach((val, rowKey) => {
        if (val) {
          if (requestData.rows[rowKey] === undefined) {
            requestData.rows[rowKey] = {} as IKeyVal<string>;
          }
          requestData.rows[rowKey][key] = val;
        }
      });
      delete requestData[dataKey];
    }
  }

  return requestData;
}
