function CountryList({ list }) {

    return (
        <ul>
            {list.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}

export default CountryList