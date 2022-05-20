import iconChat from "../../assets/icon-chat.png"
import iconMoney from "../../assets/icon-money.png"
import iconSecurity from "../../assets/icon-security.png"


function Infos() {
    return(
        <div className="infos d-flex flex-column flex-lg-row">
            <div className="row">
                <div className="chatPart col-12 col-lg-4 text-align-center align-items-center">
                    <img src={iconChat} alt="Icone chat"></img>
                    <h3>You are our #1 priority</h3>
                    <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
                </div>
                <div className="moneyPart col-12 col-lg-4">
                    <img src={iconMoney} alt="Icone Money"></img>
                    <h3>More savings means higher rates</h3>
                    <p>The more you save with us, the higher your interest rate will be!</p>
                </div>
                <div className="securityPart col-12 col-lg-4">
                    <img src={iconSecurity} alt="Icone Security"></img>
                    <h3>Security you can trust</h3>
                    <p>We use top of the line encryption to make sure your data and money is always safe.</p>
                </div>
            </div>
        </div>
        )
}

export default Infos;