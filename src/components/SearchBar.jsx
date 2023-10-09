import { useContextData } from "../App"
import {useRef} from 'react'

export default function SearchBar(){

    const { setQuery, data, query } = useContextData()

    const day = useRef()
    switch(data?.current?.is_day){
      case 0:
        day.current = "Saturday"
        break
      case 1:
        day.current = "Sunday"
        break
      case 2:
        day.current = "Monday"
        break
      case 3:
        day.current = "Tuesday"
        break
      case 4:
        day.current = "Wednesday"
        break
      case 5:
        day.current = "Thursday"
        break
      case 6:
        day.current = "Friday"
        break
      default:
        day.current = "No Day"
    }
    
  
  return (
    <div className="aside-search-bar">
        <aside className="searchBar">
          <span className="search-label">Search City Weather: </span>
          <input className="search-input" type="text" placeholder="enter a city name..." onChange={(e)=> setQuery(e.target.value)}/>
        </aside>
        {
            query ? <div className="disp_data">
                        <span className="query_res">Search result for:- {query}</span>
                        <div className="condition-icon">
                            <span className="weather_cond">{data?.current?.condition?.text}</span>
                            <span className="temp temp_c">{data?.current?.temp_c}&deg;C</span>
                            <span className="temp temp_f">{data?.current?.temp_f}&deg;F</span>
                            <img className="icon" src={data?.current?.condition?.icon} alt="no-image"/>
                            <p className="climate_cond_region">Climate Condition in region <span className="region">{`${data?.location?.country.toUpperCase()},${data?.location?.region.toUpperCase()}`}</span> </p>
                            <p className="climate_cond_humidity">Humidity: <span className="humidity">{data?.current?.humidity}</span> </p>
                            <p className="day-date">{`${day.current}, ${data?.current?.last_updated}`}</p>
                        </div>
                    </div> : null
        }
    </div>
  )
}