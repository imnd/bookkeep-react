import { IKeyVal } from "../types/types";
import axios from "axios";

export function flatten(
  data: IKeyVal<string>[],
  indexKey?: string,
  valueKey?: string,
): IKeyVal<string> {
  let toReturn: IKeyVal<string> = {} as IKeyVal<string>;
  data.forEach((datum) => {
    let index = indexKey !== undefined ? datum[indexKey] : datum["id"];
    toReturn[index] = valueKey !== undefined ? datum[valueKey] : datum["name"];
  });
  return toReturn;
}

export async function fetch(path: string) {
  try {
    return await axios.get<IKeyVal<string>[]>(
      `${process.env.REACT_APP_API_PATH}/${path}`,
    );
  } catch (e) {
    console.log(e);
    return { data: [{} as IKeyVal<string>] };
  }
}
