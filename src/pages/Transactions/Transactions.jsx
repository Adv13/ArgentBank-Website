import TransactionContent from "../../components/transactionContent/transactionContent";
import TransactionTitle from "../../components/transactionTitle/transactionTitle";

/**
* This function create the transaction page based on the user's info recovered from the database.
*/
function Transactions() {
    return (
      <div>
        <TransactionTitle
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          amountDescr="Available Balance"
        />
        <main className="main bg-dark transac">
          <div className="dataHead">
            <div id="arrow" className="dataLineItem"></div>
            <div id="date" className="dataLineItem">
              DATE
            </div>
            <div id="descr" className="dataLineItem">
              DESCRIPTION
            </div>
            <div id="amount" className="dataLineItem">
              AMOUNT
            </div>
            <div id="balance" className="dataLineItem">
              BALANCE
            </div>
          </div>
          <TransactionContent
            date="June 20th, 2020"
            descr="Golden Sun Bakery"
            amount="$5.00"
            balance="$2082.79"
            transType="Electronic"
            category="Food"
          />
          <TransactionContent
            date="June 20th, 2020"
            descr="Golden Sun Bakery"
            amount="$10.00"
            balance="$2087.79"
            transType="Electronic"
            category="Food"
          />
          <TransactionContent
            date="June 20th, 2020"
            descr="Golden Sun Bakery"
            amount="$20.00"
            balance="$2097.79"
            transType="Electronic"
            category="Food"
          />
          <TransactionContent
            date="June 20th, 2020"
            descr="Golden Sun Bakery"
            amount="$30.00"
            balance="$2117.79"
            transType="Electronic"
            category="Food"
          />
          <TransactionContent
            date="June 20th, 2020"
            descr="Golden Sun Bakery"
            amount="$40.00"
            balance="$2147.79"
            transType="Electronic"
            category="Food"
          />
          <TransactionContent
            date="June 20th, 2020"
            descr="Golden Sun Bakery"
            amount="$50.00"
            balance="$2187.79"
            transType="Electronic"
            category="Food"
          />
        </main>
      </div>
    );
  }
  
  export default Transactions;