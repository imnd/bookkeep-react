import React, { FC } from "react";
import { IClient } from "../../types/types";

interface ClientItemProps {
  client: IClient;
  onClick: (client: IClient) => void;
}

const ClientItem: FC<ClientItemProps> = ({ client, onClick }) => {
  return (
    <>
      <td className="p-4" onClick={() => onClick(client)}>
        {client.id}
      </td>
      <td className="p-4" onClick={() => onClick(client)}>{client.name}</td>
      <td className="p-4">{client.region.name}</td>
      <td className="p-4">{client.address}</td>
      <td className="p-4">{client.phone}</td>
      <td className="p-4">{client.contactName}</td>
      <td className="p-4">{client.contactPosition}</td>
      <td className="p-4">{client.bank.name}</td>
      <td className="p-4">{client.bankAccountNum}</td>
      <td className="p-4">{client.UTR}</td>
      <td className="p-4">{client.nextCallDate}</td>
      <td className="p-4">{client.active}</td>
    </>
  );
};

export default ClientItem;
