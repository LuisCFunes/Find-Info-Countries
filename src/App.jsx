import { useEffect, useState } from 'react';
import CountryDetails from './components/CountryDetails';
import CountryList from './components/CountryList';
import ReturnError from './components/ReturnError';
import axios from 'axios';
import CountryFilter from './utilities/CountriesFilter';
import findCountryByName from './utilities/FindCountry';

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3/all`)
      .then(({ data }) => {
        setCountries(data);
      })
      .catch(error => {
        console.log("Error fetching countries:", error);
        setCountries([]);
      });
  }, []);

  const filteredCountries = CountryFilter({ countries, search });
  const foundCountry = findCountryByName({ countries, search });

  return (
    <>
      <div>
        Find info of countries:<input type='search' value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {filteredCountries.length < 10 && search && (
        <CountryList list={filteredCountries} />
      )}

      {filteredCountries.length > 10 && search && (
        <ReturnError error={"Too many matches."} />
      )}

      {filteredCountries.length === 0 && search && (
        <ReturnError error={"No countries found."} />
      )}

      {foundCountry && (
        <CountryDetails foundCountry={foundCountry} />
      )}

    </>
  );
}

export default App;
