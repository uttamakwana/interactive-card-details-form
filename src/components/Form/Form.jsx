import { useState } from "react";
import "./form.css";
import ThankYou from "../../assets/icon-complete.svg";

const Form = ({
  name,
  number,
  date,
  cvc,
  setName,
  setNumber,
  setCvc,
  setDate,
}) => {
  const [active, setActive] = useState("");
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number || !date || !cvc)
      return alert("Please enter the details!");
    setConfirm(true);
  };

  return !confirm ? (
    <section className="form-container">
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            className={active === "name" ? "active" : ""}
            name="name"
            id="name"
            placeholder="e.g. Uttam Makwana"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setActive("name");
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">CARDHOLDER NUMBER</label>
          <input
            type="text"
            name="number"
            id="number"
            className={active === "number" ? "active" : ""}
            placeholder="e.g. 1234 1234 1234 1234"
            required
            maxLength={19}
            value={number
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            onChange={(e) => {
              setNumber(e.target.value);
              setActive("number");
            }}
          />
        </div>
        <div className="form-group even">
          <div className="date">
            <label htmlFor="number">EXP. Date(MM/YY)</label>
            <input
              type="month"
              name="date"
              id="date"
              required
              placeholder="e.g 12/2023"
              value={date}
              className={active === "date" ? "active" : ""}
              onChange={(e) => {
                setDate(e.target.value);
                setActive("date");
              }}
            />
          </div>
          <div className="cvc">
            <label htmlFor="cvc-number">CVC</label>
            <input
              type="number"
              name="cvc-number"
              id="cvc-number"
              placeholder="e.g. 123"
              required
              value={cvc}
              className={active === "cvc" ? "active" : ""}
              onChange={(e) => {
                setCvc(e.target.value);
                setActive("cvc");
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Confirm</button>
        </div>
      </form>
    </section>
  ) : (
    <section className="form-container">
      <div className="form thank-you-form">
        <div className="form-group">
          <img src={ThankYou} alt="thank-you" className="thank-you-img" />
        </div>
        <h1 className="form-group">
          Thank you <span className="strong">{name}</span>
        </h1>
        <p className="form-group">We have added your details!</p>
        <div className="form-group">
          <button onClick={() => setConfirm(false)}>Go back</button>
        </div>
      </div>
    </section>
  );
};

export default Form;
