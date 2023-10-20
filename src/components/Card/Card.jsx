import "./card.css";
import frontCardLogo from "../../assets/card-logo.svg";

const Card = ({name, number, cvc, date}) => {
  return (
    <section className="card">
      <div className="front-card">
        <div className="front-card-logo">
         <img src={frontCardLogo} alt="card-logo-svg" />
        </div>
        <div className="front-card-content">
         <p className="front-card-number">{number ? number : "1234 1234 1234 1234"}</p>
         <div className="front-card-name-year">
          <p className="front-card-name">{name ? name : "Your Name"}</p>
          <p className="front-card-year">{date.replace("-", "/") ? date : "year/month"}</p>
         </div>
        </div>
      </div>
      <div className="back-card">
       <span className="cvc">{cvc ? cvc : "cvc"}</span>
      </div>
    </section>
  );
};

export default Card;
