import {useEffect, useState} from "react";
import {Box, Grid, Skeleton} from "@mui/material";
import DetailsModal from "./details-modal";
import {typesMap} from "../app/db-client";

export default function PokeBox({pokemon}) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const backgroundColor = pokemon?.hasShiny ? "lightgreen" : "#fff";

    useEffect(() => {
        pokemon && setLoading(false);
    }, [pokemon]);

    return (
        <>
        <Box onClick={handleOpen}
            sx={{
                 border: '1px solid black',
                 width: {
                     xs: '100px',
                     lg: '150px',
                 },
                 height: {
                     xs: '100px',
                     lg: '150px',
                 },
                 backgroundColor: backgroundColor,
                 cursor: "pointer"
             }}
        >
            {
                loading ?
                    <Skeleton variant="rectangular" width="100%" height="100%" /> :
                    <>
                        <Grid justifyContent="center" textAlign="center" sx={{
                            fontSize: {
                                xs: "14px",
                                lg: "16px"
                            }
                        }}>
                            {String(pokemon?.dexNo).padStart(3, "0")}
                        </Grid>
                        <Grid justifyContent="center" textAlign="center" sx={{
                            fontSize: {
                                xs: "14px",
                                lg: "16px"
                            },
                            marginTop: {
                                xs: "-5px"
                            }
                        }}>
                            {pokemon?.name}
                        </Grid>
                        {
                            pokemon?.type2 ?
                                <Grid display="flex" justifyContent="center">
                                    <Box width="40px" display="flex" justifyContent="center" alignItems="center" gap="4px" sx={{
                                        width: {
                                            xs: "40px",
                                            lg: "60px"
                                        }
                                    }}>
                                        <img src={typesMap[pokemon?.type1]} />
                                        <img src={typesMap[pokemon?.type2]} />
                                    </Box>
                                </Grid> :
                                <Grid display="flex" justifyContent="center">
                                    <Box sx={{
                                        width: {
                                            xs: "40px",
                                            lg: "60px"
                                        }
                                    }}>
                                        <img src={typesMap[pokemon?.type1]} />
                                    </Box>
                                </Grid>
                        }
                        <Grid justifyContent="center" display="flex">
                            <Box sx={{
                                height: {
                                    xs: "50px",
                                    lg: "75px"
                                },
                                width: {
                                    xs: "50px",
                                    lg: "75px"
                                }
                            }}>
                                <img src={pokemon?.sprite} height="100%" width="100%" />
                            </Box>
                        </Grid>
                    </>
            }

        </Box>
        <DetailsModal open={open} onClose={handleClose} pokemon={pokemon} />
        </>
    )
}