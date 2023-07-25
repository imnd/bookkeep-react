import { FC } from "react";
import { IRegion } from "../../types/types";

interface RegionItemProps {
  region: IRegion;
  onClick: (region: IRegion) => void;
}

const RegionItem: FC<RegionItemProps> = ({ region, onClick }) => {
  return (
    <>
      <td className="p-4" onClick={() => onClick(region)}>
        {region.id}
      </td>
      <td className="p-4" onClick={() => onClick(region)}>
        {region.name}
      </td>
    </>
  );
};

export default RegionItem;
