import banner from "../../assets/bank-tree.jpeg"


function Presentation() {
    return(
        <div className="presentation">
            <img className="banner" src={banner} alt="Bannière photo"></img>
            <div className="textBanner">
                <h1 className="title">No fees.<br></br>No minimum deposit.<br></br>High interest rates.</h1>
                <h2 className="subtitle">Open a savings account with<br></br>Argent Bank today!</h2>
            </div>
        </div>
        )
}

export default Presentation;