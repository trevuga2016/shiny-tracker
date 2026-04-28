import {useState} from "react";
import {Box, Grid, Skeleton} from "@mui/material";
import DetailsModal from "./details-modal";
import {typesMap} from "../app/db-client";
import {useQuery} from "@tanstack/react-query";

export default function PokeBox({pokemon}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const backgroundColor = pokemon?.hasShiny ? "lightgreen" : "#fff";

    const {data: spriteUrl} = useQuery({
        queryKey: ["sprite", pokemon],
        queryFn: async () => {
            const res = await fetch(pokemon.sprite);
            const blob = await res.blob();
            return URL.createObjectURL(blob);
        },
        enabled: !!pokemon
    })

    return (
        <>
            <Box onClick={handleOpen}
                 sx={{
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
                     },
                     backgroundColor: backgroundColor,
                     cursor: "pointer"
                 }}
            >
                {
                    pokemon ?
                    <>
                        <Grid justifyContent="center" textAlign="center" sx={{
                            fontSize: {
                                xs: "14px",
                                sm: "14px",
                                md: "14px",
                                lg: "16px"
                            }
                        }}>
                            {String(pokemon?.dexNo).padStart(3, "0")}
                        </Grid>
                        <Grid justifyContent="center" textAlign="center" sx={{
                            fontSize: {
                                xs: "14px",
                                sm: "14px",
                                md: "14px",
                                lg: "16px"
                            },
                            marginTop: {
                                xs: "-5px",
                                sm: "-5px",
                                md: "0px",
                                lg: "0px"
                            }
                        }}>
                            {pokemon?.name}
                        </Grid>
                        {
                            pokemon?.type2 ?
                                <Grid display="flex" justifyContent="center">
                                    <Box width="40px" display="flex" justifyContent="center" alignItems="center"
                                         gap="4px" sx={{
                                        width: {
                                            xs: "45px",
                                            sm: "55px",
                                            md: "55px",
                                            lg: "60px"
                                        }
                                    }}>
                                        <img loading="lazy" src={typesMap[pokemon?.type1]}/>
                                        <img loading="lazy" src={typesMap[pokemon?.type2]}/>
                                    </Box>
                                </Grid> :
                                <Grid display="flex" justifyContent="center">
                                    <Box sx={{
                                        width: {
                                            xs: "45px",
                                            sm: "55px",
                                            md: "55px",
                                            lg: "60px"
                                        }
                                    }}>
                                        <img loading="lazy" src={typesMap[pokemon?.type1]}/>
                                    </Box>
                                </Grid>
                        }
                        <Grid justifyContent="center" display="flex">
                            <Box sx={{
                                height: {
                                    xs: "50px",
                                    sm: "65px",
                                    md: "65px",
                                    lg: "75px"
                                },
                                width: {
                                    xs: "50px",
                                    sm: "65px",
                                    md: "65px",
                                    lg: "75px"
                                }
                            }}>
                                <img loading="lazy" src={spriteUrl} height="100%" width="100%"/>
                            </Box>
                        </Grid>
                    </> :
                    <>None</>
                }
            </Box>
            <DetailsModal open={open} onClose={handleClose} pokemon={pokemon}/>
        </>
    )
}