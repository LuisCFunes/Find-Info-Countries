function findCountryByName({ countries, search }) {
  const findCountry = countries.find(
    (country) => country.name.common.toLowerCase() === search.toLowerCase()
  );
  return findCountry;
}

export default findCountryByName;
