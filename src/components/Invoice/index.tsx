import styles from "../../styles/Invoice/Invoice.module.scss";

const Invoice = ({ invoices }: any) => {
  console.log("invoices", invoices);

  return (
    <div>
      <div> Detalhes da Nota</div>

      {invoices.map((invoice: any) => (
        <>
          <div>
            <span>Numero da Nota</span>
            <p>{invoice?.invoiceNumber}</p>
          </div>

          <div>
            <div>
              <span>Valor da NF</span>
              <p>{invoice?.invoiceValue}</p>
            </div>

            <div>
              <span>Data e Hora</span>
              <p>{invoice?.issuanceDate}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Invoice;
