
import React, { useState } from 'react';

const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const changeHandler = (e) => {
    setCity(e.target.value);
  }

  const setHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then(response => response.json())
      .then(data => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setResult("Temperature at " + city + "\n" + Math.round(celsius) + "°C");
      })
      .catch(error => console.log(error));

    setCity("");
  }

  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
          }

          .input-field {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-right: 10px;
            width: 200px;
          }

          .submit-btn {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .submit-btn:hover {
            background-color: #0056b3;
          }

          .card {
            width: 300px;
            background-color: #f4f4f4;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            margin: auto;
            margin-top: 100px;
          }

          .card-body {
            padding: 20px;
          }
        `}
      </style>
      <div className="card">
        <div className="card-body">
          <h1>Weather App</h1>
          <form onSubmit={setHandler}>
            <input type="text" className="input-field" name="city" value={city} onChange={changeHandler} />
            <input type="submit" className="submit-btn" name="add" value="Get temperature" />
          </form>
          <br /><br />
          <div>
            <h1>{result}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;









