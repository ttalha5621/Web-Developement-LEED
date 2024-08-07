// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [city, setCity] = useState("");
  let [wDetails, setWDetails] = useState();
  let [isLoading, setIsLoading] = useState(false);
  let [counter, setCounter] = useState(1);

  let getData = (event) => {
    setIsLoading(true);
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7715841c6944dd0d98f822a9495e2a7e&units=metric`
      )
        .then((res) => res.json())
        .then((finalRes) => {
          if (finalRes.cod === "404") {
            setWDetails(undefined);
            console.log("Error 404");

          } else {
            setWDetails(finalRes);
          }
          setIsLoading(false);
        });
    } catch (error) {
      console.log("Error fetching weather data", error);
    }

    event.preventDefault();
    setCity("");
  };

  useEffect(() => {
    console.log("Hello");
  }, [counter]);

  let chnageCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[#4aacb1]">
      {counter}
      <button onClick={chnageCounter}>Counter</button>
      <div className="max-w[1320px] mx-auto">
        <h1 className="text-[40px] font-bold py-[50px] text-white">
          Simple Weather App
        </h1>

        <form onSubmit={getData}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[300px] h-[40px] pl-3"
            placeholder="City Name"
          />
          <button className="bg-[#1f3e40] text-white font-bold p-[10px_20px] mx-2">
            Search
          </button>
        </form>

        <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] relative">
          <img
            src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/media/1df2396f1eaa146bcb7dd3e73c1dc77b.gif"
            alt="Loading"
            width={100}
            className={`absolute left-[40%] ${isLoading ? "" : "hidden"} `}
          />
          {wDetails !== undefined ? (
            <>
              <h3 className="font-bold text-[30px]">
                {wDetails.name}{" "}
                <span className="bg-[yellow]">{wDetails.sys.country}</span>
              </h3>
              <h2 className="font-bold text-[30px]">{wDetails.main.temp}°C</h2>
              <img
                src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}
                alt=""
              />
              <p>{wDetails.weather[0].description}</p>
            </>
          ) : (
            "No Data Found"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
