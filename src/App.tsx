import { useState } from "react";
import "./App.css";

function MinutesToHours() {
  const INITIAL_VALUE = "";
  const INITIAL_UNIT = "Minutes";
  const [value, setValue] = useState(INITIAL_VALUE);
  const [unit, setUnit] = useState(INITIAL_UNIT);
  const reset = () => {
    setValue(INITIAL_VALUE);
  };
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === "") {
      setValue(value);
    }
  };
  const onChangeUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
  };
  const numericValue = Number(value) || 0;

  let displayedValue;
  if (unit === "Minutes") {
    displayedValue = `${numericValue}min = ${Math.floor(numericValue / 60)}hr ${
      numericValue % 60
    }min`;
  } else {
    displayedValue = `${numericValue}hr = ${numericValue * 60}min`;
  }
  return (
    <div className="container">
      <label htmlFor="inputValue">{unit}</label>
      <input
        value={value}
        type="number"
        id="inputValue"
        onChange={onChangeValue}
      ></input>
      <select className="unit-select" value={unit} onChange={onChangeUnit}>
        <option value="Minutes">Minutes</option>
        <option value="Hours">Hours</option>
      </select>
      <p>{displayedValue}</p>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
function CmToInch() {
  const INITIAL_VALUE = "";
  const INITIAL_UNIT = "cm";
  const [value, setValue] = useState(INITIAL_VALUE);
  const [unit, setUnit] = useState(INITIAL_UNIT);
  const reset = () => {
    setValue(INITIAL_VALUE);
  };
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === "") {
      setValue(value);
    }
  };
  const onChangeUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
  };
  const numericValue = Number(value) || 0;

  let displayedValue;
  if (unit === "cm") {
    displayedValue = `${numericValue}cm = ${(numericValue / 2.54).toFixed(
      5
    )} inches`;
  } else {
    displayedValue = `${numericValue} inches = ${(numericValue * 2.54).toFixed(
      5
    )}cm`;
  }

  return (
    <div className="container">
      <label htmlFor="inputValue">{unit}</label>
      <input
        value={value}
        type="number"
        id="inputValue"
        onChange={onChangeValue}
      ></input>
      <select className="unit-select" value={unit} onChange={onChangeUnit}>
        <option value="cm">cm</option>
        <option value="inch">inch</option>
      </select>
      <p>{displayedValue}</p>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
function App() {
  const [convertType, setConvertType] = useState<number>(0);
  const handleConvertChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const onHandleConvertChange = e.target.value;
    setConvertType(Number(onHandleConvertChange));
  };

  const renderOutput = () => {
    switch (convertType) {
      case 0:
        return <h2>Please select units</h2>;
      case 1:
        return <MinutesToHours />;
      case 2:
        return <CmToInch />;
      default:
        return null;
    }
  };
  return (
    <div className="container">
      <h2 className="title">Converter</h2>
      <select
        className="convert-type-select"
        value={convertType}
        onChange={handleConvertChange}
      >
        <option value={0}>Select Unit</option>
        <option value={1}>Minutes & Hours</option>
        <option value={2}>Cm & Inch</option>
      </select>
      <hr />
      {renderOutput()}
    </div>
  );
}

export default App;
