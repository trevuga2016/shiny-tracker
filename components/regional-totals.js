"use client"

import {Grid, Skeleton} from "@mui/material";
import {useEffect, useState} from "react";
import {numberOfRegionalShiniesFound, totalNumberOfRegionalVariants} from "../app/db-client";

export default function RegionalTotals() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        async function load() {
            const variantShiniesFound = await numberOfRegionalShiniesFound();
            const variantSpecies = await totalNumberOfRegionalVariants();
            const variantPercentComplete = ((variantShiniesFound / variantSpecies) * 100).toFixed(2);
            const data = {
                noFound: variantShiniesFound,
                total: variantSpecies,
                percent: variantPercentComplete
            }

            if (isMounted && data) {
                setData(data)
                setLoading(false);
            }
        }

        load();

        return () => {
            isMounted = false;
        };
    }, []);

    return(
        !loading ? (<Grid container direction="column" alignItems="center" pb={4}>
            <Grid container direction="column" border="2px solid black" sx={{ width: {xs: '95%', sm: '75%', md: '50%', lg: '35%'} }}>
                <Grid container justifyContent="center" sx={{ borderBottom: '2px solid black'}} fontWeight="bold">
                    <Grid size={4} textAlign="center" padding="5px" alignContent="center">
                        Regional Variants Caught
                    </Grid>
                    <Grid size={4} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                        Total Regional Variants
                    </Grid>
                    <Grid size={4} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                        Percent Complete
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid size={4} textAlign="center">
                        {data?.noFound}
                    </Grid>
                    <Grid size={4} textAlign="center" borderLeft="2px solid black">
                        {data?.total}
                    </Grid>
                    <Grid size={4} textAlign="center" borderLeft="2px solid black" sx={{ background: `linear-gradient(to right, lightgreen ${data?.percent}%, transparent ${data?.percent}%)` }}>
                        {data?.percent}%
                    </Grid>
                </Grid>
            </Grid>
        </Grid>) :
            (
                <Grid container direction="column" alignItems="center" pb={4}>
                    <Grid container direction="column" border="2px solid black" sx={{ width: {xs: '95%', sm: '75%', md: '50%', lg: '35%'} }}>
                        <Grid container justifyContent="center" sx={{ borderBottom: '2px solid black'}} fontWeight="bold">
                            <Grid size={4} textAlign="center" padding="5px" alignContent="center">
                                Regional Variants Caught
                            </Grid>
                            <Grid size={4} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                                Total Regional Variants
                            </Grid>
                            <Grid size={4} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                                Percent Complete
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid size={4} textAlign="center">
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            </Grid>
                            <Grid size={4} textAlign="center" borderLeft="2px solid black">
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            </Grid>
                            <Grid size={4} textAlign="center" borderLeft="2px solid black">
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )
    )
}