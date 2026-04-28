"use client"

import PokeBox from "./poke-box";
import {Box, Grid, Skeleton} from "@mui/material";
import {getCurrentTarget, getRecentTarget} from "../app/db-client";
import {useQuery} from "@tanstack/react-query";

export default function TargetTracker() {

    const { data, isLoading} = useQuery({
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
                {
                    isLoading ?
                    <>
                        <Grid fontWeight="bold">Current Target</Grid>
                        <Box sx={{
                                 border: '1px solid black',
                                 width: {
                                     xs: '100px',
                                     sm: '125px',
                                     md: '125px',
                                     lg: '150px',
                                 },
                                 height: {
                                     xs: '100px',
                                     sm: '125px',
                                     md: '125px',
                                     lg: '150px',
                                 }
                             }}>
                            <Skeleton variant="rectangular" width="100%" height="100%" />
                        </Box>
                    </> :
                    <>
                        <Grid fontWeight="bold">Current Target</Grid><PokeBox pokemon={data?.currentTarget} />
                    </>
                }
            </Grid>
            <Grid container direction="column" paddingX="10px" justifyContent="center" textAlign="center" alignItems="center">
                {
                    isLoading ?
                        <>
                            <Grid fontWeight="bold">Recently Caught</Grid>
                            <Box sx={{
                                border: '1px solid black',
                                width: {
                                    xs: '100px',
                                    sm: '125px',
                                    md: '125px',
                                    lg: '150px',
                                },
                                height: {
                                    xs: '100px',
                                    sm: '125px',
                                    md: '125px',
                                    lg: '150px',
                                }
                            }}>
                                <Skeleton variant="rectangular" width="100%" height="100%" />
                            </Box>
                        </> :
                        <>
                            <Grid fontWeight="bold">Recently Caught</Grid><PokeBox pokemon={data?.recentTarget} />
                        </>
                }
            </Grid>
        </Grid>
    )
}