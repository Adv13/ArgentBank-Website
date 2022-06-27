import { useState } from "react";

/**
* This function manage the content part of the transaction's infos based on the user's info received from the database.
*/
function TransactionContent(props) {
  const [isUp, setIsUp] = useState(false);

  /**
  * This function manage opening and closing for the transaction's details.
  */
  function openClose() {
    if(!isUp){
      setIsUp(true);
    }else{
      setIsUp(false);
    }
  }

  /**
  * This function show an alert message when we want to modify the category of the transaction.
  */
  function selectCategory() {
    alert("Choisir une catégorie");
  }
  /**
  * This function show an alert message when we want to modify the note of the transaction.
  */
  function addNotes() {
    alert("Ajouter des notes");
  }

  return (
    <div>
      <div className="dataLine">
        <div id="arrow" onClick={openClose}>
          {isUp ?(
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          ):(
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </div>
        <div id="date">{props.date}</div>
        <div id="descr">{props.descr}</div>
        <div id="amount">{props.amount}</div>
        <div id="balance">{props.balance}</div>
      </div>
      {isUp &&(
      <div className="moreInfo">
        <p>Transaction Type: {props.transType}</p>
        <p>
          Category: {props.category}{" "}
          <i
            className="fa fa-pencil"
            aria-hidden="true"
            onClick={selectCategory}
          ></i>
        </p>
        <p>
          Notes:{" "}
          <i className="fa fa-pencil" aria-hidden="true" onClick={addNotes}></i>
        </p>
      </div>
      )}
    </div>
  );
}

export default TransactionContent;