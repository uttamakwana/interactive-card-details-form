import { useState } from 'react';
import './App.css';
import {Card, Form} from "./components"

const App = () => {
 const [name, setName] = useState("");
 const [number, setNumber] = useState("");
 const [date, setDate] = useState("");
 const [cvc, setCvc] = useState("");
  return (
    <main className="app">
      <section className="bg-img"></section>
      <Card name={name} number={number} date={date} cvc={cvc} />
      <Form
        setName={setName}
        setNumber={setNumber}
        setDate={setDate}
        setCvc={setCvc}
        name={name}
        number={number}
        date={date}
        cvc={cvc}
      />
    </main>
  );
}

export default App
