import {
    Box,
    Button,
    Checkbox, FormControl,
    FormControlLabel,
    Grid,
    MenuItem,
    Modal,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {updatePokemonById} from "../app/db-client";


export default function DetailsModal({open, onClose, pokemon}) {

    const [isSaveDisabled, setIsSaveDisabled] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false);

    const [isShiny, setIsShiny] = useState(pokemon?.hasShiny);
    const [gameFound, setGameFound] = useState("");
    const [newGameFound, setNewGameFound] = useState("");
    const [method, setMethod] = useState("");
    const [newMethod, setNewMethod] = useState("");
    const [encounters, setEncounters] = useState(0);
    const [newEncounters, setNewEncounters] = useState(0);

    const huntingMethods = [
        "Soft Reset",
        "Random Encounter",
        "DexNav Chaining",
        "Radar Chaining",
        "Fly Spawning",
        "Fly Spawning (Hyperspace)",
        "Catch Combo",
        "SOS Chaining",
        "Mass Outbreak",
        "Massive Mass Outbreak",
        "Sandwich Encounters",
        "Masuda",
        "Horde Encounters",
        "Wonder Trade",
        "Chain Fishing",
        "Ultra Wormhole Encounter",
        "Gift",
        "Mystery Gift",
        "Fateful Encounter",
        "Tera Raid",
        "RNG Manipulation"
    ]

    const games = [
        "X",
        "Omega Ruby",
        "Alpha Sapphire",
        "GO",
        "Ultra Sun",
        "Ultra Moon",
        "Lets Go, Eevee!",
        "Sword",
        "Violet",
        "Legends: Arceus",
        "Legends: ZA",
        "FireRed"
    ]

    useEffect(() => {
        if (pokemon?.hasShiny) {
            setGameFound(pokemon?.game_found);
            setMethod(pokemon?.method);
            setEncounters(pokemon?.encounters);
        }
    }, []);

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

    function shinyCheck(e) {
        setIsShiny(e.target.checked);
        e.target.checked ? setIsEditMode(true) : setIsEditMode(false);
        !e.target.checked && setIsSaveDisabled(false) && setGameFound("");
    }

    function editMode() {
        setIsEditMode(true);
        method && setNewMethod(method);
        gameFound && setNewGameFound(gameFound);
        encounters && setNewEncounters(encounters);
    }

    function cancelEdit() {
        setIsEditMode(false);
        setNewMethod("");
        setNewGameFound("");
        setNewEncounters(0);
        setIsSaveDisabled(true);
        setIsShiny(pokemon?.hasShiny);
    }

    function handleGameFound(e) {
        setNewGameFound(e.target.value);
        if (e.target.value && newMethod && Number.isInteger(newEncounters)) {
            setIsSaveDisabled(false);
        } else {
            setIsSaveDisabled(true);
        }
    }

    function handleEncounterMethod(e) {
        setNewMethod(e.target.value);
        if(e.target.value && newGameFound && Number.isInteger(newEncounters)) {
            setIsSaveDisabled(false);
        } else {
            setIsSaveDisabled(true);
        }
    }

    function handleModalClose() {
        onClose();
        cancelEdit();
    }

    function validateEncounters(e) {
        setNewEncounters(Number(e.target.value));
        if (Number.isInteger(Number(e.target.value)) && newGameFound && newMethod) {
            setIsSaveDisabled(false);
        } else {
            setIsSaveDisabled(true);
            setNewEncounters(0);
        }
    }

    async function saveChanges() {
        let dataChanges = {
            hasShiny: isShiny,
            game_found: newGameFound,
            method: newMethod,
            encounters: newEncounters
        }
        await updatePokemonById(pokemon?._id, dataChanges).then(() => {
            setIsSaveDisabled(true);
            location.reload();
        });
    }

    return(
        <Modal open={open} onClose={handleModalClose}>
            <Box sx={style}>{
                pokemon ? <>
                    <div style={{ justifyContent: "center", display: "flex", paddingBottom: "5px"}}>{ pokemon?.hasShiny && <img style={{ paddingRight: "4px"}}
                                                                                                                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-charm.png"/>}
                        <Typography fontWeight="bold">{String(pokemon?.dexNo).padStart(3, "0")}: {pokemon?.name}</Typography>
                        { pokemon?.hasShiny && <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-charm.png"/>}
                    </div>
                    {
                        !isEditMode ?
                            <>
                                <Typography><b>Game Found: </b>{gameFound ? "Pokémon " + gameFound : "--"}</Typography>
                                <Typography><b>Method Used: </b>{method ? method : "--"}</Typography>
                                <Typography><b>Encounters: </b>{encounters ? encounters : "--"}</Typography>
                            </> :
                            <Grid container>
                                <Grid container size={12}>
                                    <Grid alignSelf="center">
                                        <Typography alignContent="center" fontWeight="bold">Game Found:</Typography>
                                    </Grid>
                                    <Grid paddingLeft={1} size="grow">
                                        <FormControl fullWidth>
                                            <Select size="small" variant="outlined" value={newGameFound} onChange={handleGameFound}>{
                                                games?.map((game, i) => {
                                                    return(<MenuItem key={i} value={game}>{game}</MenuItem>)
                                                })
                                            }</Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container size={12}>
                                    <Grid alignSelf="center">
                                        <Typography alignContent="center" fontWeight="bold">Method Used:</Typography>
                                    </Grid>
                                    <Grid paddingLeft={1} size="grow">
                                        <FormControl fullWidth>
                                            <Select size="small" variant="outlined" value={newMethod} onChange={handleEncounterMethod}>{
                                                huntingMethods?.map((methodItem, i) => {
                                                    return(<MenuItem key={i} value={methodItem}>{methodItem}</MenuItem>)
                                                })
                                            }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container size={12}>
                                    <Grid alignSelf="center">
                                        <Typography alignContent="center" fontWeight="bold">Encounters:</Typography>
                                    </Grid>
                                    <Grid paddingLeft={1} size="grow">
                                        <TextField fullWidth size="small" defaultValue={newEncounters} onChange={validateEncounters}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                    }
                </> :
                    <Typography textAlign="center" fontWeight="bold">None</Typography>
            }
            <div style={{ justifyContent: "center", display: "flex"}}>
                <FormControlLabel control={<Checkbox checked={isShiny} onClick={shinyCheck} />} label="Shiny Obtained" />
            </div>
            <Grid container textAlign="center" spacing={2} paddingTop={1}>
                <Grid size={6}>
                    <Button fullWidth variant="contained" disabled={isSaveDisabled} onClick={saveChanges}>Save</Button>
                </Grid>
                <Grid size={6}>
                    {
                        !isEditMode ?
                            <Button fullWidth variant="outlined" onClick={editMode}>Edit</Button> :
                            <Button fullWidth variant="outlined" onClick={cancelEdit}>Cancel</Button>
                    }
                </Grid>
            </Grid>
            </Box>
        </Modal>
    )
}