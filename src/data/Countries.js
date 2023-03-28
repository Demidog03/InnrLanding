import {useEffect, useState} from 'react';
const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const fetchCountriesData = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(() => {

        fetchCountriesData().then(r => console.log(r)).catch(error => console.error(error))
    }, [])
    return (
        <>
            {countries.map((country) => {
                return (
                    <option value={country.name.common}>{country.name.common}</option>
                )
            })}
        </>
    );
};

export default Countries;