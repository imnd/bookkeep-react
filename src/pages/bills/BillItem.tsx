import React from "react";
import { IBill} from "../../types/types";

interface BillItemProps {
  bill: IBill;
  onClick: (bill: IBill) => void;
}

export default function BillForm({ bill, onClick }: BillItemProps) {
  return (
    <>
      <td className="p-4" onClick={() => onClick(bill)}>
        {bill.id}
      </td>
      <td className="p-4">
        {bill.contractNum}
      </td>
      <td className="p-4">{bill.sum}</td>
      <td className="p-4">{bill.remainder}</td>
    </>
  );
};
