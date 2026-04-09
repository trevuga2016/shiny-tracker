"use client"

import PokeBox from "./poke-box";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {getCurrentTarget, getRecentTarget} from "../app/db-client";

export default function TargetTracker() {

    const [current, setCurrent] = useState(null);
    const [recent, setRecent] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function load() {
            const current = await getCurrentTarget();
            if (isMounted && current) setCurrent(current || null);
            const recent = await getRecentTarget();
            if (isMounted && recent) setRecent(recent || null);
        }

        load();

        return () => {
            isMounted = false;
        };
    }, []);

    return(
        <Grid container justifyContent="center" pb={4}>
            <Grid container direction="column" paddingX="10px" justifyContent="center" textAlign="center" alignItems="center">
                <Grid fontWeight="bold">Current Target</Grid><PokeBox pokemon={current?.[0]} />
            </Grid>
            <Grid container direction="column" paddingX="10px" justifyContent="center" textAlign="center" alignItems="center">
                <Grid fontWeight="bold">Recently Caught</Grid><PokeBox pokemon={recent?.[0]} />
            </Grid>
        </Grid>
    )
}