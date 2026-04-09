"use client"

import PokeBox from "./poke-box";
import {Box, Grid} from "@mui/material";
import {getAllPokemonByRegion, getAllRegionalForms, typesMap} from "../app/db-client";
import {useEffect, useState} from "react";

export default function GenerationLayout({ region }) {

    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function load() {
            const data = region === "regional-variants" ? await getAllRegionalForms() : await getAllPokemonByRegion(region);
            if (isMounted && data) setData(data || null);
        }

        load();

        return () => {
            isMounted = false;
        };
    }, []);

    return(
        <Grid container spacing={2} justifyContent="center" pb={8}>
            {data?.map((pokemon, i) => (
                <PokeBox pokemon={pokemon} key={i} />
            ))}
        </Grid>
    )
}