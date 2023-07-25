import React, { FC } from "react";
import { IInvoice } from "../../types/types";

interface InvoiceItemProps {
  invoice: IInvoice;
  onClick: (invoice: IInvoice) => void;
}

const InvoiceItem: FC<InvoiceItemProps> = ({ invoice, onClick }) => {
  return (
    <>
      <td className="p-4" onClick={() => onClick(invoice)}>
        {invoice.id}
      </td>
      <td className="p-4" onClick={() => onClick(invoice)}>
        {invoice.invoiceNum}
      </td>
      <td className="p-4">{invoice.contractNum}</td>
      <td className="p-4">{invoice.client.name}</td>
      <td className="p-4">{invoice.paid}</td>
      <td className="p-4">{invoice.date}</td>
    </>
  );
};

export default InvoiceItem;
