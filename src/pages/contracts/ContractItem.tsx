import React, { FC } from "react";
import { IContract } from "../../types/types";

interface ContractItemProps {
  contract: IContract;
  onClick: (contract: IContract) => void;
}

const ContractItem: FC<ContractItemProps> = ({ contract, onClick }) => {
  return (
    <>
      <td className="p-4" onClick={() => onClick(contract)}>
        {contract.id}
      </td>
      <td className="p-4" onClick={() => onClick(contract)}>
        {contract.contractNum}
      </td>
      <td className="p-4">{contract.client?.name ?? ""}</td>
      <td className="p-4">{contract.paid}</td>
      <td className="p-4">{contract.date}</td>
    </>
  );
};

export default ContractItem;
