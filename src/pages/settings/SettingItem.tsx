import { FC } from "react";
import { ISetting } from "../../types/types";

interface SettingItemProps {
  setting: ISetting;
  onClick: (setting: ISetting) => void;
}

const SettingItem: FC<SettingItemProps> = ({ setting, onClick }) => {
  return (
    <>
      <td className="p-4">
        {setting.id}
      </td>
      <td className="p-4">
        {setting.name}
      </td>
      <td className="p-4">
        {setting.key}
      </td>
      <td className="p-4">
        {setting.value}
      </td>
    </>
  );
};

export default SettingItem;
