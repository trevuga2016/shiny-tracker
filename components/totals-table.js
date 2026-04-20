"use client"

import {Grid, Skeleton} from "@mui/material";
import {getAllRegions, getNumberOfRegionalShinies, getNumberOfSpeciesByRegion} from "../app/db-client";
import {useQuery} from "@tanstack/react-query";

export default function TotalsTable() {

    const { data, isLoading} = useQuery({
        queryKey: ["regions-summary"],
        queryFn: async () => {
            const regions = await getAllRegions();

            let totalShiniesFound = 0;
            let totalUniqueSpecies = 0;

            const regionData = await Promise.all(
                regions.map(async (region) => {
                    const shiniesFound = await getNumberOfRegionalShinies(region.name);
                    const regionalSpecies = await getNumberOfSpeciesByRegion(region.name);

                    totalShiniesFound += shiniesFound;
                    totalUniqueSpecies += regionalSpecies;

                    return {
                        region: region.name,
                        shiniesFound,
                        regionalSpecies,
                        regionalPercentComplete: ((shiniesFound / regionalSpecies) * 100).toFixed(2),
                    }
                })
            );

            return {
                regions: regionData,
                totalShiniesFound,
                totalUniqueSpecies,
                totalPercentComplete: ((totalShiniesFound / totalUniqueSpecies) * 100).toFixed(2)
            }
        },
    });

    return(
        !isLoading ? (<Grid container direction="column" alignItems="center" pb={4}>
            <Grid container direction="column" border="2px solid black" sx={{ width: {xs: '95%', sm: '75%', md: '50%', lg: '35%'} }}>
                <Grid container justifyContent="center" sx={{ borderBottom: '2px solid black'}} fontWeight="bold">
                    <Grid size={3} textAlign="center" padding="5px" alignContent="center">
                        Region
                    </Grid>
                    <Grid size={3} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                        Unique Shinies Caught
                    </Grid>
                    <Grid size={3} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                        Total Unique Species
                    </Grid>
                    <Grid size={3} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                        Percent Complete
                    </Grid>
                </Grid>
                {
                    data?.regions?.map((regData , i) => {
                        return(
                            <Grid container justifyContent="center" key={i}>
                                <Grid size={3} textAlign="center">
                                    {regData?.region}
                                </Grid>
                                <Grid size={3} textAlign="center" borderLeft="2px solid black">
                                    {regData?.shiniesFound}
                                </Grid>
                                <Grid size={3} textAlign="center" borderLeft="2px solid black">
                                    {regData?.regionalSpecies}
                                </Grid>
                                <Grid size={3} textAlign="center" borderLeft="2px solid black" sx={{ background: `linear-gradient(to right, lightgreen ${regData?.regionalPercentComplete}%, transparent ${regData?.regionalPercentComplete}%)` }}>
                                    {regData?.regionalPercentComplete}%
                                </Grid>
                            </Grid>
                        )
                    })
                }
                <Grid container justifyContent="center" borderTop="2px solid black" fontWeight="bold">
                    <Grid size={3} textAlign="center">
                        Totals
                    </Grid>
                    <Grid size={3} textAlign="center" borderLeft="2px solid black">
                        {data?.totalShiniesFound}
                    </Grid>
                    <Grid size={3} textAlign="center" borderLeft="2px solid black">
                        {data?.totalUniqueSpecies}
                    </Grid>
                    <Grid size={3} textAlign="center" borderLeft="2px solid black" sx={{ background: `linear-gradient(to right, lightgreen ${data?.totalPercentComplete}%, transparent ${data?.totalPercentComplete}%)` }}>
                        {data?.totalPercentComplete}%
                    </Grid>
                </Grid>
            </Grid>
        </Grid>) :
            (
                <Grid container direction="column" alignItems="center" pb={4}>
                    <Grid container direction="column" border="2px solid black" sx={{ width: {xs: '95%', sm: '75%', md: '50%', lg: '35%'} }}>
                        <Grid container justifyContent="center" borderBottom="2px solid black" fontWeight="bold">
                            <Grid size={3} textAlign="center" padding="5px" alignContent="center">
                                Region
                            </Grid>
                            <Grid size={3} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                                Unique Shinies Caught
                            </Grid>
                            <Grid size={3} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                                Total Unique Species
                            </Grid>
                            <Grid size={3} textAlign="center" padding="5px" alignContent="center" borderLeft="2px solid black">
                                Percent Complete
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid size={3} textAlign="center">
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            </Grid>
                            <Grid size={3} textAlign="center" borderLeft="2px solid black">
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            </Grid>
                            <Grid size={3} textAlign="center" borderLeft="2px solid black">
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            </Grid>
                            <Grid size={3} textAlign="center" borderLeft="2px solid black">
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )
    )
}