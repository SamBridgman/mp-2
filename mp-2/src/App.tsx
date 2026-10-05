import './App.css'
import type {Country} from "./interfaces/Country.ts";
import {useEffect, useState} from "react";
import CountryList from "./components/CountryList.tsx";

function App() {
    const [data, setData] = useState<Country[]>([]);

    useEffect(() => {

        async function fetchSkins(): Promise<void> {
            const res = await fetch("https://countries.dev/countries")
            const json : Country[] = await res.json()
            setData(json)
        }
        fetchSkins()
            .then(() => console.log("Fetched Skins successfully"))
            .catch(err => console.log(err));

    }, [data.length])

    return (
        <>
            <CountryList countries={data}/>
        </>
    )
}

export default App
