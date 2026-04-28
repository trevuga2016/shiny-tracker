import {Box, Modal, Typography} from "@mui/material";


export default function DetailsModal({open, onClose, pokemon}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
            xs: '350px',
            sm: '350px',
            md: '400px',
            lg: '400px'
        },
        backgroundColor: '#fff',
        border: '2px solid black',
        boxShadow: 24,
        p: 4,
    };

    let actualEncounters = "--";
    let actualMethod = pokemon?.method;
    let gameFound = "--";

    const listOfNAEncounterMethods = [
        "Random Encounter",
        "Gift",
        "Fateful Encounter",
        "Tera Raid",
        "Mystery Gift",
        "Wonder Trade",
        "Ultra Wormhole Encounter",
        "Fly Spawning",
        "Fly Spawning (Hyperspace)",
        "Mass Outbreak",
        "Massive Mass Outbreak",
        "Sandwich Encounters"
    ]

    if (pokemon?.hasShiny && pokemon?.encounters > 0) {
        actualEncounters = String(pokemon?.encounters)
    } else if (pokemon?.hasShiny && pokemon?.encounters === 0) {
        if (listOfNAEncounterMethods.includes(pokemon?.method)) {
            actualEncounters = "n/a"
        } else {
            actualEncounters = "Unknown"
        }
    }

    if (pokemon?.hasShiny && pokemon?.game_found) {
        if (pokemon?.game_found === "GO") {
            actualMethod = "n/a";
        }
        gameFound = "Pokémon " + pokemon?.game_found
    } else if (pokemon?.hasShiny && !pokemon?.game_found) {
        gameFound = "n/a"
    }

    return(
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>{
                pokemon ? <>
                    <div style={{ justifyContent: "center", display: "flex", paddingBottom: "5px"}}>{ pokemon?.hasShiny && <img style={{ paddingRight: "4px"}}
                                                                                                                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-charm.png"/>}
                        <Typography fontWeight="bold">{String(pokemon?.dexNo).padStart(3, "0")}: {pokemon?.name}</Typography>
                        { pokemon?.hasShiny && <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-charm.png"/>}
                    </div>
                    {
                        !pokemon?.isCurrentTarget ?
                            <>
                                <Typography><b>Game Found: </b>{gameFound}</Typography>
                                <Typography><b>Method Used: </b>{pokemon?.hasShiny ? actualMethod : "--"}</Typography>
                                <Typography><b>Encounters: </b>{actualEncounters}</Typography>
                            </> :
                            <>
                                <Typography><b>Game Using: </b>{"Pokémon " + pokemon?.game_found}</Typography>
                                <Typography><b>Method Using: </b>{pokemon?.method}</Typography>
                            </>
                    }
                </> :
                    <Typography textAlign="center" fontWeight="bold">None</Typography>
            }

            </Box>
        </Modal>
    )
}