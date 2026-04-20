"use client"

import PokeBox from "./poke-box";
import {Grid} from "@mui/material";
import {getAllPokemonByRegion, getAllRegionalForms} from "../app/db-client";
import {useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {prefetchSprites} from "../lib/prefetchSprites";

export default function GenerationLayout({ region }) {

    const { data } = useQuery({
        queryKey: ["generation-layout", region],
        queryFn: async () => {
            return region === "regional-variants" ? await getAllRegionalForms() : await getAllPokemonByRegion(region);
        },
        enabled: !!region
    });

    useEffect(() => {
        prefetchSprites(region, data);
    }, [region]);

    return(
        <Grid container spacing={2} justifyContent="center" pb={8}>
            {data?.map((pokemon, i) => (
                <PokeBox pokemon={pokemon} key={i} />
            ))}
        </Grid>
    )
}