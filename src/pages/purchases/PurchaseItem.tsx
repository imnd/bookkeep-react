import React, { FC } from "react";
import { IPurchase } from "../../types/types";

interface PurchaseItemProps {
  purchase: IPurchase;
  onClick: (purchase: IPurchase) => void;
}

const PurchaseItem: FC<PurchaseItemProps> = ({ purchase, onClick }) => {
  return (
    <>
      <td className="p-4" onClick={() => onClick(purchase)}>
        {purchase.number}
      </td>
      <td className="p-4">{purchase.sum}</td>
      <td className="p-4">{purchase.date}</td>
    </>
  );
};

export default PurchaseItem;
