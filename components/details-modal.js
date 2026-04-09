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

    let actualEncounters = "--"
    let gameFound = "--";

    if (pokemon?.hasShiny && pokemon?.encounters > 0) {
        actualEncounters = String(pokemon?.encounters)
    } else if (pokemon?.hasShiny && pokemon?.encounters == 0) {
        actualEncounters = "Unknown"
    }

    if (pokemon?.hasShiny && pokemon?.game_found) {
        gameFound = "Pokémon " + pokemon?.game_found
    } else if (pokemon?.hasShiny && !pokemon?.game_found) {
        gameFound = "n/a"
    }

    return(
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <div style={{ justifyContent: "center", display: "flex", paddingBottom: "5px"}}>{ pokemon?.hasShiny && <img style={{ paddingRight: "4px"}}
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-charm.png"/>}
                    <Typography fontWeight="bold">{pokemon?.name}</Typography></div>
                {
                    !pokemon?.isCurrentTarget ?
                        <>
                            <Typography><b>Game Found: </b>{gameFound}</Typography>
                            <Typography><b>Method Used: </b>{pokemon?.hasShiny ? pokemon?.method : "--"}</Typography>
                            <Typography><b>Encounters: </b>{actualEncounters}</Typography>
                        </> :
                        <>
                            <Typography><b>Game Using: </b>{"Pokémon " + pokemon?.game_found}</Typography>
                            <Typography><b>Method Using: </b>{pokemon?.method}</Typography>
                        </>
                }
            </Box>
        </Modal>
    )
}