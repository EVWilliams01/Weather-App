import { useEffect, useState } from 'react'
import LocationsWeather from './components/LocationsWeather'



function App() {
  const [location, setLocation] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [days, setDays] = useState(null)
  const [daysInput, setDaysInput] = useState("")
  const [locationInput, setLocationInput] = useState("")

  useEffect(() => {
    const req = async () => {
      if (!location) {
        return
      }
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6560691824ef4f03819123320202912&q=${location}&days=${days}`)
      const json = await response.json()

      console.log(json)
      setForecast(json.forecast.forecastday)

      //so json becomes the error, i just tried but it didnt work , 
      // how do we normally handle errors? a function?

    }
    req()
  }, [location, days])

  const HandleLocationInput = (e) => {
    setLocationInput(e.target.value)
  }

  const HandleDaysInput = (e) => {

    setDaysInput(e.target.value)
  }



  return (
    <div className="App">
      <div className="search">
        <input className="search-input" placeholder="Location..." onChange={HandleLocationInput} type="text" />
        <br />
        <input className="search-input" placeholder="days..." max="3" onChange={HandleDaysInput} type="number" />
        <div className="go-button" onClick={() => {

          setLocation(locationInput)
          setDays(daysInput)

        }}>GO</div>
      </div>
      <div className="locationsWeather">
        {forecast && <LocationsWeather loc={forecast} location={location} />}
      </div>



    </div>
  );
}

export default App;
