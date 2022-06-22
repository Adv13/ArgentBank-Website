import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProfile } from "../../store";
import { updateProfile } from "../../API/api";
/**
* This function create the profile page based on the user's info recovered from the database.
*/
function User() {

  //const { userId } = useParams();
  const userDatas = useSelector((state) => state.profile);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  async function save() {
    try{
      const firstName = document.querySelector(".firstNameInput");
      const lastName = document.querySelector(".lastNameInput");
      if (firstName.value === "" && lastName.value !== ""){
        alert("Veuillez renseigner votre prénom.");
      }else if (firstName.value !== "" && lastName.value === ""){
        alert("Veuillez renseigner votre nom.");
      }else if(firstName.value === "" && lastName.value === ""){
        alert("Veuillez renseigner votre prénom et votre nom.");
      }else{
        const response = await updateProfile(firstName.value, lastName.value);
        dispatch(saveProfile(response.data.body));
        setEdit(false);
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <main className="main bg-dark">
      {edit ? (
        <div className="header">
          <h1>Welcome back</h1>
          <div className="editor">
            <input
            type="text"
            placeholder="{userDatas.firstName}"
            className="firstNameInput"
            />
            <input
            type="text"
            placeholder="{userDatas.lastName}"
            className="lastNameInput"
            />
          </div>
          <div className="editor">
            <button className="editor-button" onClick={save}>Save</button>
            <button className="editor-button" onClick={()=>setEdit(false)}>Cancel</button>
          </div>
        </div>
      ):(
        <div className="header">
          <h1>Welcome back
          <br/>
          {userDatas.firstName + " " + userDatas.lastName} !
          </h1>
          <button className="edit-button" onClick={()=>setEdit(true)}>Edit Name</button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link className="transaction-button" to={"../transactions"}>
            View transactions
          </Link>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link className="transaction-button" to={"../transactions"}>
            View transactions
          </Link>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link className="transaction-button" to={"../transactions"}>
            View transactions
          </Link>
        </div>
      </section>
    </main>
  );
}
export default User;