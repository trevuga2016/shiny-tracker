"use client"

import PokeBox from "./poke-box";
import {Grid} from "@mui/material";
import {getCurrentTarget, getRecentTarget} from "../app/db-client";
import {useQuery} from "@tanstack/react-query";

export default function TargetTracker() {

    const { data } = useQuery({
        queryKey: ["target-tracker"],
        queryFn: async () => {
            const currentTarget = await getCurrentTarget();
            const recentTarget = await getRecentTarget();
            return {
                currentTarget,
                recentTarget
            }
        },
    });

    return(
        <Grid container justifyContent="center" pb={4}>
            <Grid container direction="column" paddingX="10px" justifyContent="center" textAlign="center" alignItems="center">
                <Grid fontWeight="bold">Current Target</Grid><PokeBox pokemon={data?.currentTarget} />
            </Grid>
            <Grid container direction="column" paddingX="10px" justifyContent="center" textAlign="center" alignItems="center">
                <Grid fontWeight="bold">Recently Caught</Grid><PokeBox pokemon={data?.recentTarget} />
            </Grid>
        </Grid>
    )
}