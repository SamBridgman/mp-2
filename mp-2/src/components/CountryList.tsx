import styled from "styled-components";
import type {Country} from '../interfaces/Country.ts'

const CountryCard = styled.div<{ region: string }>`
    padding: 2%;
    border: 3px solid darkred;
    background-color: ${(props) => (props.region === "Europe" ? "lightblue" : "lightgreen")};
`;

const AllCountriesDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
`;

export default function CountryList({ countries }: { countries: Country[] }) {
    return (
        <AllCountriesDiv>
            {countries.map((country : Country) => (
                <CountryCard key={country.name} region={country.region}>
                    <h1>{country.name}</h1>
                    <p>Population: {country.population}</p>
                    <p>Alpha 3 Code: {country.alpha3code}</p>
                    <p>Flag: {country.flag}</p>
                </CountryCard>
            ))}
        </AllCountriesDiv>
    );
}