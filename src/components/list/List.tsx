import React, { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import DeleteForm from "./DeleteForm";
import axios from "axios";
import { IModel } from "../../types/types";
import CreateButton from "./CreateButton";
import Hat from "./Hat";
import FormDocker from "./FormDocker";
import FormBody from "./FormBody";
import FormModal from "./FormModal";
import { getRequestData, getRequestDataWithRows } from "../form/helpers";

interface ModelContextProps<T> {
  model: T | null;
  setModel: (value: ((prevState: T) => T) | T) => void;
}

export const ModelContext = React.createContext<ModelContextProps<any> | null>(
  null,
);

interface ListProps {
  entityName: string;
  renderItem: (item: any) => React.ReactNode;
  renderForm: (item: any) => React.ReactNode;
  apiPath: string;
  formMode?: string;
  hatItems: string[];
  withRows?: boolean;
}

export default function List(props: ListProps) {
  const [model, setModel] = useState<IModel | undefined>({
    id: -1,
  } as IModel | undefined);
  const [action, setAction] = useState<string>("");
  const [items, setItems] = useState<IModel[]>([]);

  // Item form show / hide
  const [itemFormVisible, setItemFormVisible] = useState(false);
  const showCreateForm = () => {
    setModel(undefined);
    setAction("Create");
    setItemFormVisible(true);
  };
  const showUpdateForm = (item: IModel) => {
    setModel(item);
    setAction("Update");
    setItemFormVisible(true);
  };
  const hideItemForm = () => {
    setItemFormVisible(false);
  };
  // Delete form show / hide
  const [deleteFormVisible, setDeleteFormVisible] = useState(false);
  const showDeleteForm = (item: IModel | undefined) => {
    setModel(item);
    setDeleteFormVisible(true);
  };
  const hideDeleteForm = () => {
    setDeleteFormVisible(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const apiPath = `${process.env.REACT_APP_API_PATH}/${props.apiPath}`;

  async function fetchItems() {
    try {
      const response = await axios.get<IModel[]>(apiPath);
      setItems(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const requestData = props?.withRows
      ? getRequestDataWithRows(e)
      : getRequestData(e);

    await axios
      .post(apiPath + (model ? `/${model?.id}` : ""), requestData)
      .then(() => {
        fetchItems();
        hideItemForm();
      });
  };

  const deleteModel = async (
    e: React.MouseEvent<HTMLAnchorElement | MouseEvent>,
  ) => {
    e.preventDefault();
    await axios.delete(`${apiPath}/${model?.id}`).then(() => {
      fetchItems();
      hideDeleteForm();
    });
  };

  return (
    <div>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <CreateButton
              entityName={props.entityName}
              handler={showCreateForm}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-100">
                  <tr className="text-xs font-medium text-left text-gray-500 uppercase">
                    <Hat items={props.hatItems} />
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map((item, index) => (
                    <tr
                      className={
                        "hover:bg-gray-100 cursor-pointer text-base font-medium text-gray-900 whitespace-nowrap" +
                        (index % 2 === 1 ? " bg-gray-50" : "")
                      }
                      key={index}
                    >
                      {props.renderItem(item)}
                      <td className="p-4 space-x-2 whitespace-nowrap">
                        <UpdateButton item={item} handler={showUpdateForm} />
                        <DeleteButton item={item} handler={showDeleteForm} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {itemFormVisible && (
        <ModelContext.Provider value={{ model: model, setModel: setModel }}>
          {props.formMode && props.formMode === "modal" && (
            <FormModal
              onClick={hideItemForm}
              entityName={props.entityName}
              action={action}
              contents={
                <FormBody
                  action={action}
                  model={model}
                  submitForm={submitForm}
                  hideItemForm={hideItemForm}
                  showDeleteForm={showDeleteForm}
                  renderForm={props.renderForm}
                />
              }
            />
          )}
          {(!props.formMode || props.formMode === "docker") && (
            <FormDocker
              onClick={hideItemForm}
              entityName={props.entityName}
              action={action}
              contents={
                <FormBody
                  action={action}
                  model={model}
                  submitForm={submitForm}
                  hideItemForm={hideItemForm}
                  showDeleteForm={showDeleteForm}
                  renderForm={props.renderForm}
                />
              }
            />
          )}
        </ModelContext.Provider>
      )}
      {deleteFormVisible && (
        <DeleteForm onDelete={deleteModel} onClose={hideDeleteForm} />
      )}
      {(itemFormVisible || deleteFormVisible) && (
        /* overlay */
        <div
          onClick={() => {
            hideItemForm();
            hideDeleteForm();
          }}
          className="bg-gray-900 bg-opacity-50 fixed inset-0 z-30"
        />
      )}
    </div>
  );
}
