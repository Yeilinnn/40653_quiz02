import { useState } from 'react';
import './App.css';
import Stepper from './quiz02/Stepper';
import Content from './quiz02/Content';

function App() {

  const [products] = [
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ];

  const [step, setStep] = useState(1);

  const handlePrev = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  return (
    <>
      <h1>Quiz 02</h1>
      <Stepper step={step} setStep={setStep} />
      <Content />
      <div className="flex">
        <button type="button" onClick={handlePrev} disabled={step === 1}>
          Prev
        </button>
        <button type="button" onClick={handleNext} disabled={step === 3}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;