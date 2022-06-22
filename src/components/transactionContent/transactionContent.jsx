import { useRef } from "react";

/**
* This function manage the content part of the transaction's infos based on the user's info received from the database.
*/
function TransactionContent(props) {
  const arrow1 = useRef();
  const arrow2 = useRef();
  const moreInfo = useRef();

  /**
  * This function manage opening and closing for the transaction's details.
  */
  function openClose() {
    arrow1.current.classList.toggle("downArrow_no");// The toggle() method toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden.
    arrow2.current.classList.toggle("upArrow_yes");//toggle ( token ) - removes token from string and returns false. If token doesn't exist it's added and the function returns true
    moreInfo.current.classList.toggle("moreInfo_open");
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
          <span className="downArrow" ref={arrow1}>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
          <span className="upArrow" ref={arrow2}>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </span>
        </div>
        <div id="date">{props.date}</div>
        <div id="descr">{props.descr}</div>
        <div id="amount">{props.amount}</div>
        <div id="balance">{props.balance}</div>
      </div>
      <div className="moreInfo" ref={moreInfo}>
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
    </div>
  );
}

export default TransactionContent;