import React, { FC } from "react";
import { IBank } from "../../types/types";
import StatusWidget from "../../components/list/StatusWidget";

interface BankItemProps {
  bank: IBank;
  onClick: (bank: IBank) => void;
}

const BankItem: FC<BankItemProps> = ({ bank, onClick }) => {
  return (
    <>
      <td className="p-4" onClick={() => onClick(bank)}>
        {bank.id}
      </td>
      <td className="p-4" onClick={() => onClick(bank)}>
        {bank.name}
      </td>
      <td className="p-4">{bank.BIC}</td>
      <td className="p-4">
        <StatusWidget active={bank.active} />
      </td>
    </>
  );
};

export default BankItem;
