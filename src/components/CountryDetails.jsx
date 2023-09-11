/* eslint-disable react/prop-types */
function CountryDetails({ foundCountry }) {
    return (
        <div>
            <h2>Country Details</h2>
            <ul>
                <li>Name: {foundCountry.name.common}</li>
                <li>Capital: {foundCountry.capital}</li>
                <li>Region: {foundCountry.region}</li>
                <li>Population: {foundCountry.population}</li>
                <img style={{ width: '200px', height: '200px' }} src={`${foundCountry.flags[0]}`} alt={`flag from ${foundCountry.name.common}`} />
            </ul>
        </div>
    )
}

export default CountryDetails