function CountryFilter({ countries, search }) {
    const filteredCountries = countries
        .map(country => country.name.common)
        .filter(item => {
            return search.toLocaleLowerCase() === '' ? item : item.toLowerCase().includes(search);
        });

    return filteredCountries;
}

export default CountryFilter;
