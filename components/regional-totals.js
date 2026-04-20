"use client"

import {Grid, Skeleton} from "@mui/material";
import {numberOfRegionalShiniesFound, totalNumberOfRegionalVariants} from "../app/db-client";
import {useQuery} from "@tanstack/react-query";

export default function RegionalTotals() {

    const { data, isLoading } = useQuery({
        queryKey: ["regional-totals"],
        queryFn: async () => {
            const regionalShinies = await numberOfRegionalShiniesFound();
            const regionalSpecies = await totalNumberOfRegionalVariants();
            return {
                regionalShinies,
                regionalSpecies,
                regionalPercentComplete: ((regionalShinies / regionalSpecies) * 100).toFixed(2)
            }
        },
    })

    return(
        !isLoading ? (<Grid container direction="column" alignItems="center" pb={4}>
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
                        {data?.regionalShinies}
                    </Grid>
                    <Grid size={4} textAlign="center" borderLeft="2px solid black">
                        {data?.regionalSpecies}
                    </Grid>
                    <Grid size={4} textAlign="center" borderLeft="2px solid black" sx={{ background: `linear-gradient(to right, lightgreen ${data?.regionalPercentComplete}%, transparent ${data?.regionalPercentComplete}%)` }}>
                        {data?.regionalPercentComplete}%
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