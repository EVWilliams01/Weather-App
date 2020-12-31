export default function Locationsweather({ loc, location }) {

    const handleMap = (forecast, index) => {
        return <div className="date" key={index}>{forecast.date}</div>
    }


    return (
        <>
            <div className="title">Weather forecast for {location}:</div>
            <ul>
                {loc.map(handleMap)}
            </ul>

        </>
    )
}
