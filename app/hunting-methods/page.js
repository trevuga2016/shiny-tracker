import NavHeader from "../../components/nav-header";
import {Grid, Typography} from "@mui/material";

export default function HuntingMethods() {

    return(
        <>
            <NavHeader />
            <Grid container direction="column" justifyContent="center" alignItems="center" paddingY={2}>
                {/* Base Odds */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">The Base Odds</Typography>
                    <Typography className="text-block">The odds of encountering a shiny Pokémon follows the table below. Some methods used may increase these odds, and those will
                    be noted below in their respective section.</Typography>
                    <Typography variant="h5">The Shiny Charm</Typography>
                    <Typography className="text-block">Introduced in Gen V, obtaining the Shiny Charm increases the odds of encountering a shiny by doing <i>two</i> additional base shiny checks per encounter.</Typography>
                    <Typography className="text-block">For example: (1/4096 x 1/4096 x 1/4096) = 3/4096 = 1/1365.</Typography>
                    <Typography className="text-block">Pokémon Legends: Arceus does <i>three</i> additional base shiny checks per encounter.</Typography>
                    <Grid container className="table-container">
                        <Grid container className="odds-table">
                            <Grid size={4} borderBottom="2px solid black"/>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Base Odds
                            </Grid>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Shiny Charm
                            </Grid>
                            <Grid size={4} className="table-item" fontWeight="bold">
                                Generation II - IV
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 8192
                            </Grid>
                            <Grid size={4} className="table-item">
                                n/a
                            </Grid>
                            <Grid size={4} className="table-item" color="green">
                                Black & White (Gen V)
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 8192
                            </Grid>
                            <Grid size={4} className="table-item">
                                n/a
                            </Grid>
                            <Grid size={4} className="table-item" color="green">
                                Black 2 & White 2 (Gen V)
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 8192
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 2731
                            </Grid>
                            <Grid size={4} className="table-item" fontWeight="bold">
                                Generation VI - IX
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 4096
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 1365
                            </Grid>
                            <Grid size={4} className="table-item" color="green">
                                Legends: Arceus (Gen VIII)
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 4096
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 1024
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Catch Combo*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Catch Combo</Typography>
                    <Typography className="text-subheading">Pokémon Let's Go, Pikachu! and Let's Go, Eevee!</Typography>
                    <Typography className="text-block">Build a catch combo to increases your shiny odds. Building a catch combo is simple: repeatedly catch the same Pokémon species multiple times in a row
                    until you spawn in a shiny. The shiny Pokémon will be visible in the overworld (and will also sparkle). Using a lure (any lure) will also increase your shiny odds.</Typography>
                    <Typography className="text-block">As your combo increases, your odds increase:</Typography>
                    <Grid container className="table-container">
                        <Grid container className="odds-table" columns={15}>
                            <Grid size={3} borderBottom="2px solid black" />
                            <Grid size={3} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                2 - 10
                            </Grid>
                            <Grid size={3} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                11 - 20
                            </Grid>
                            <Grid size={3} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                21 - 30
                            </Grid>
                            <Grid size={3} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                31+
                            </Grid>
                            <Grid size={3} className="table-item">
                                No Lure, No Shiny Charm
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 4096
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 1024
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 512
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 342
                            </Grid>
                            <Grid size={3} className="table-item">
                                Lure Only
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 2048
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 820
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 456
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 316
                            </Grid>
                            <Grid size={3} className="table-item">
                                Shiny Charm Only
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 1365
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 683
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 410
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 293
                            </Grid>
                            <Grid size={3} className="table-item">
                                Lure & Shiny Charm
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 1024
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 586
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 373
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 274
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography variant="button">Actions That Break Your Combo</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Catching a Pokémon of another species</Typography>
                    <Typography className="text-block">&#10148;&nbsp;The target Pokémon runs away</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Turning off your game</Typography>
                    <Typography variant="button">Actions That Do Not Break Your Combo</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Leaving the route</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Running away from any encounter (target or not)</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Leaving the route and catching the same species from another spawn location</Typography>
                    <Typography className="text-block">The most common way to break a combo is by your target running away. However, there is a trick to try and prevent that from happening.
                    Before you begin your combo, open the PokéDex and find your target's entry. You can check your Pokémon's animations here, and the <b>second</b> animation is what's considered
                    the "run away" animation. Meaning, if you see your target perform that animation while you are trying to catch it, <i>it is getting ready to run away</i>. If you see that animation,
                    <i>run away immediately</i> from the encounter before your target does and this will preserve your chain.</Typography>
                    <Typography className="text-block">Catching a target can also be tedious, but, the longer your combo extends, your capture rate will also increase, eventually making it fairly easy to capture
                    the target Pokémon.</Typography>
                    <Typography className="text-block">Strapped for cash or running out of PokéBalls? No sweat. You can rack up a ton of candy very quickly from a catch combo. Simply go to the nearest PokéMart
                    (this does not break your combo) and sell all your excess candy for some cash. You can then buy more PokéBalls and lures if necessary.</Typography>
                </Grid>
                {/* Chain Fishing */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Chain Fishing</Typography>
                    <Typography className="text-subheading">Pokémon X and Y; Pokémon Omega Ruby and Alpha Sapphire</Typography>
                    <Typography className="text-block">A Generation VI exclusive way to shiny hunt by catching Pokémon consecutively with any fishing rod. By simply catching 20 of any species in a row,
                    your shiny odds increase to 1% without the Shiny Charm and 1.04% with the Shiny Charm. Catching, defeating, or running from the encounter does not break the chain. Encountering a different species
                    also does NOT break the chain. However, not getting any bites, missing a bite, or leaving the route will break the chain.</Typography>
                    <Typography className="text-block">You can increase the likelihood of landing a fishing encounter by fishing next to a non-surfable tile (20% increase per tile), fishing in the morning or evening (20% increase),
                    and/or leading your party with a Pokémon that has the Sticky Hold or Suction Cups ability (doubles your overall chances of an encounter).</Typography>
                </Grid>
                {/* DexNav Chaining*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">DexNav Chaining</Typography>
                    <Typography className="text-subheading">Pokémon Omega Ruby and Alpha Sapphire</Typography>
                    <Typography className="text-block">Chaining encounters by using the DexNav increases your odds of finding a shiny.</Typography>
                    <Typography variant="button">How To Keep The Chain Going</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Search for your target using the DexNav</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Sneak up on your target without scaring it off</Typography>
                    <Typography className="text-block">&#10148;&nbsp;<b>Catch</b>&nbsp;or&nbsp;<b>defeat</b>&nbsp;your target</Typography>
                    <Typography variant="button">Actions That Break The Chain</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Running away from an encounter</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Scaring off your target by not sneaking up quietly enough</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Your target runs away before encountering it</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Turning off your game</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Leaving the route or location where you are chaining</Typography>
                    <Typography variant="button">Actions That Break The Chain</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Encountering a Pokémon different than your target</Typography>
                    <Typography className="text-block">&#10148;&nbsp;Pausing or saving your game</Typography>
                    <Typography className="text-block">Your shiny odds are then determined by a combination of your <b>search level</b> and what <b>chain</b> you are on. Every 50th encounter performs
                    5 additional checks. Every 100th encounter performs 10 additional checks. Every 5th encounter performs 4 additional checks. Likewise, there is a
                    5% chance that an encounter (which is not already boosted by being the 5th, 50th, or 100th encounter) can be "boosted", which applies 4 additional checks.</Typography>
                    <Typography className="text-block">Additionally, as your search level increases, additional shiny checks are compounded to the checks listed above.</Typography>
                    <Typography pclassName="text-block">The odds are very complicated and are already well documented. A full odds table can be found on&nbsp;<a src="https://bulbapedia.bulbagarden.net/wiki/DexNav#Hidden_Pok%C3%A9mon">Bulbapedia</a>&nbsp;
                    and more information can be found from <a src="https://mrnbayoh.github.io/pkmn6gen/dexnav_shiny/">this article</a>.</Typography>
                </Grid>
                {/* Fateful Encounter */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Fateful Encounter</Typography>
                    <Typography className="text-subheading">Varies</Typography>
                    <Typography className="text-block">These are rare and are typically encountered when meeting certain criteria. For example, registering all Pokémon from Pokémon Legends: Arceus into Pokémon Home rewards
                    you with a shiny Enamorus.</Typography>
                </Grid>
                {/* Fly Spawning*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Fly Spawning</Typography>
                    <Typography className="text-subheading">Pokémon Legends: ZA</Typography>
                    <Typography className="text-block">By continuously flying to the same location, every Pokémon that spawns within your player's radius is refreshed. While this method in and of itself does not increase your odds, by
                    flying over and over to the same location, you are spawning new Pokémon that can be shiny.</Typography>
                    <Typography className="text-block">The best part is, once the game spawns in a shiny, <b>it will not despawn - even if you save and restart your game!</b></Typography>
                    <Typography className="text-block">The only caveat to this is your game will spawn a maximum of 10 shinies at a time, and then follow a first-in, first-out method of despawning. Meaning,
                    if you spawn shiny Pokémon 1, do not catch it, spawn in 9 more shinies, then spawn in shiny Pokémon 11 - shiny Pokémon 1 will be despawned.</Typography>
                </Grid>
                {/* Fly Spawning (Hyperspace)*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Fly Spawning (Hyperspace)</Typography>
                    <Typography className="text-subheading">Pokémon Legends: ZA</Typography>
                    <Typography className="text-block">The same as the normal fly spawning method, except in the Hyperspace DLC. You can do the same method in hyperspace by repeatedly flying to the Hyperspace entrance location.</Typography>
                    <Typography className="text-block">Also, <b>the odds can be increased depending on the donut used to enter Hyperspace.</b></Typography>
                    <Grid container className="table-container">
                        <Grid container className="odds-table">
                            <Grid size={4} borderBottom="2px solid black"/>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Base Odds
                            </Grid>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Shiny Charm
                            </Grid>
                            <Grid size={4} className="table-item">
                                Sparkling Power Lv. 1
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 2048
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 820
                            </Grid>
                            <Grid size={4} className="table-item">
                                Sparkling Power Lv. 2
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 1366
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 683
                            </Grid>
                            <Grid size={4} className="table-item">
                                Sparkling Power Lv. 3
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 1024
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 586
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography className="text-block">Just remember, the donut type can affect which Pokémon type is affected by Sparkling Power. Unless it is a Sparkling Power (All Types) specific donut.</Typography>
                    <Typography className="text-block">Additionally, <b>a Sparkling Power Lv. 3 donut is guaranteed to give you the "Catch a Shiny Pokémon" Hyperspace task</b> which will automatically spawn in a shiny Pokémon somewhere on the map.</Typography>
                </Grid>
                {/* Gift */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Gift</Typography>
                    <Typography className="text-subheading">Games Listed</Typography>
                    <Typography className="text-block">These games gift you with a free shiny Pokémon!</Typography>
                    <Typography className="text-block">&#10148;&nbsp; <i>Pokémon Gold, Silver, and Crystal</i>: <b>Gyarados</b> &rarr; found as a static encounter in the Lake of Rage</Typography>
                    <Typography className="text-block">&#10148;&nbsp; <i>Pokémon HeartGold and SoulSilver</i>: <b>Gyarados</b> &rarr; found as a static encounter in the Lake of Rage</Typography>
                    <Typography className="text-block">&#10148;&nbsp; <i>Pokémon Black 2 and White 2</i>: <b>Haxorus</b> &rarr; register every non-mythical Pokémon in the Unova PokéDex to obtain the Permit from
                        Professor Juniper which gives you access to the Nature Preserve. A static shiny Haxorus is there on your first visit</Typography>
                    <Typography className="text-block">&#10148;&nbsp; <i>Pokémon Black 2 and White 2</i>: <b>Dratini</b> or <b>Gible</b> &rarr; defeat Benga at the Black Tower or White Treehollow and meet him at Alder's house
                        in Floccesy Town to be gifted a shiny Gible (Black 2) or a shiny Dratini (White 2)</Typography>
                    <Typography className="text-block">&#10148;&nbsp; <i>Pokémon Legends: Arceus</i>: <b>Ponyta</b> &rarr; after calming the frenzied Kleavor from The Frenzy of the Lord of the Woods mission, you can unlock
                    Request 19 by reading the professor's blackboard. This unlocks the "A Peculiar Ponyta" request which involves catching a shiny Ponyta in Obsidian Fieldlands</Typography>
                    <Typography className="text-block">&#10148;&nbsp; <i>Pokémon Legends: ZA</i>: <b>Mareep</b> &rarr; after reaching Rank V, you can unlock Side Mission 17 by talking to the NPC just outside Wild Zone 1. This
                    unlocks the "A Shiny Mareep?" side mission which involves catching a shiny Mareep on a rooftop</Typography>
                </Grid>
                {/* Horde Encounters */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Horde Encounters</Typography>
                    <Typography className="text-subheading">Pokémon X and Y; Pokémon Omega Ruby and Alpha Sapphire</Typography>
                    <Typography className="text-block">Exclusive to Generation VI, a Horde Encounter is a wild encounter that involves facing off against 5 Pokémon at the same time. This is usually the same Pokémon species, but,
                    depending on the type of encounter, it can include a Pokémon of another species (for example, a Horde Encounter of Durant in Pokémon X and Y has a 5% chance of including a Heatmor). You can
                    have a random encounter with a horde on any given route, or you can use Sweet Scent outside of battle to automatically trigger a Horde Encounter.</Typography>
                    <Typography className="text-block">While Horde Encounters themselves do not increase the shiny odds of a single encounter, facing off against 5 Pokémon at a time allows for quicker encounters, and, in
                    theory, increases the likelihood of encountering a shiny.</Typography>
                    <Typography className="text-block">For example, in the Cave of Origin in Pokémon Omega Ruby and Alpha Sapphire, the first floor has a 100% chance of encountering a Zubat horde if you use Sweet Scent.
                    Therefore, facing 5 Zubat at a time, even at base odds, increases the chances of encountering a shiny.</Typography>
                </Grid>
                {/* Mass Outbreak - SV */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Mass Outbreak</Typography>
                    <Typography className="text-subheading">Pokémon Scarlet and Violet</Typography>
                    <Typography className="text-block">Every day (12:00am - 11:59pm), certain Pokémon species will appear on the overworld map as appearing in a mass outbreak. This is a great opportunity to
                    shiny hunt, since the more you defeat in the outbreak, the odds of encountering a shiny go up, maxing out at 60 Pokémon defeated.</Typography>
                    <Typography className="text-block">You can easily defeat spawns by sending out the first
                    Pokémon in your party using the R button, and having your lead Pokémon quickly KO the spawn. After 60 KOs, you are at max shiny odds. These odds can be compounded with the Shiny Charm
                    and Sparkling Power Sandwiches to get a huge shiny boost.</Typography>
                    <Typography className="text-block">After defeating 60 spawns in an outbreak, you can force despawn the Pokémon in the area by either leaving the spawn radius (centered around the player) or by
                    starting a picnic. This will bring in a new set of spawns, each with the maxed out shiny odds.</Typography>
                    <Typography className="text-block">Just be careful when defeating more than 60 spawns, since the mass outbreak can end if you defeat a certain number from the outbreak.</Typography>
                    <Grid container className="table-container">
                        <Grid container className="odds-table">
                            <Grid size={6} borderBottom="2px solid black"/>
                            <Grid size={3} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Base Odds
                            </Grid>
                            <Grid size={3} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Shiny Charm
                            </Grid>
                            <Grid size={6} className="table-item">
                                30 KOs, No Sandwich Power
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 2048
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 1024
                            </Grid>
                            <Grid size={6} className="table-item">
                                60 KOs, No Sandwich Power
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 1365
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 819
                            </Grid>
                            <Grid size={6} className="table-item">
                                30 KOs, Sparkling Power Lv. 3 Sandwich
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 819
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 585
                            </Grid>
                            <Grid size={6} className="table-item">
                                60 KOs, Sparkling Power Lv. 3 Sandwich
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 683
                            </Grid>
                            <Grid size={3} className="table-item">
                                1 in 512
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Mass Outbreak - LA */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Mass Outbreak</Typography>
                    <Typography className="text-subheading">Pokémon Legends: Arceus</Typography>
                    <Typography className="text-block">Mass outbreaks occur when selecting an area to go to from Jubilife Village. They are indicated by the Pokémon's picture in a specific area of the regional map. While these
                    have extremely high shiny odds, they usually do not last very long. These outbreaks typically spawn 10-15 Pokémon, including the evolutionary lines of the specified Pokémon outbreak. When returning to
                    Jubilife Village, there is a 20% chance of a new mass outbreak spawning. When leaving Jubilife Village, there is a 20% chance of a mass outbreak despawning.</Typography>
                    <Grid container className="table-container">
                        <Grid container className="odds-table">
                            <Grid size={4} borderBottom="2px solid black"/>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Base Odds
                            </Grid>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Shiny Charm
                            </Grid>
                            <Grid size={4} className="table-item">
                                Species Research (Lvl. 10)
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 152
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 137
                            </Grid>
                            <Grid size={4} className="table-item">
                                Species Research (Perfect)
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 142
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 128
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Massive Mass Outbreak*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Massive Mass Outbreak</Typography>
                    <Typography className="text-subheading">Pokémon Legends: Arceus</Typography>
                    <Typography className="text-block">Similar to Mass Outbreaks, Massive Mass Outbreaks occasionally occur on any specific regional map, indicated by question mark icons. To reveal what species is in the Massive
                    Mass Outbreak, you must either visit the location itself, or give an Aguav Berry to Mai's Munchlax at any base camp. These are unique since a normal Mass Outbreak will include 1 Pokémon per
                    area, and a Massive Mass Outbreak can spawn 11 - 15 outbreaks across the area. These Massive Mass Outbreaks also feature more than one "wave" of Pokémon species per outbreak. Outbreaks with star icons
                    by them indicate multiple "waves" of Pokémon spawns.</Typography>
                    <Typography className="text-block">While the individual outbreaks themselves end after defeating or capturing every Pokémon from the "waves" in the outbreak, the Massive Mass Outbreak itself will last 7 - 11 minutes
                    total. A message will appear indicating how much time is left on the Massive Mass Outbreak.</Typography>
                    <Typography className="text-block">When returning to Jubilife Village, there is a 25% chance of a new Massive Mass Outbreak spawning. When leaving Jubilife Village, there is a 25% chance of a Massive Mass Outbreak despawning.</Typography>
                    <Grid container className="table-container">
                        <Grid container className="odds-table">
                            <Grid size={4} borderBottom="2px solid black"/>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Base Odds
                            </Grid>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Shiny Charm
                            </Grid>
                            <Grid size={4} className="table-item">
                                Species Research (Lvl. 10)
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 293
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 256
                            </Grid>
                            <Grid size={4} className="table-item">
                                Species Research (Perfect)
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 241
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 216
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Masuda */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Masuda</Typography>
                    <Typography className="text-subheading">All Games Generation IV and After</Typography>
                    <Typography className="text-block">One of the oldest methods in the books, the Masuda Method is a shiny hunting method that involves breeding two Pokémon from different regions and hatching
                    their egg, which results in a higher chance to be shiny. This method stacks with the Shiny Charm. This method can also be used with a Ditto from a different region.</Typography>
                    <Typography className="text-block">Example: If I obtain a Japanese Ditto from Japan over GTS, I am able to breed it with any breedable English Pokémon, and this egg has a higher chance of a shiny offspring
                    than if I were to use an English Ditto. However, if I breed a Japanese Ditto with, let's say, a Japanese Typhlosion (even if I am geolocated in America), the Masuda Method
                    does not apply, and the odds of a shiny Cyndaquil hatching are still the base odds.</Typography>
                    <Grid container className="table-container">
                        <Grid container className="odds-table">
                            <Grid size={4} borderBottom="2px solid black"/>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Base Odds
                            </Grid>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Shiny Charm
                            </Grid>
                            <Grid size={4} className="table-item">
                                Generation IV
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 1638
                            </Grid>
                            <Grid size={4} className="table-item">
                                n/a
                            </Grid>
                            <Grid size={4} className="table-item">
                                Generation V
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 1365
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 1024
                            </Grid>
                            <Grid size={4} className="table-item">
                                Generation VI - IV
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 683
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 512
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Mystery Gift */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Mystery Gift</Typography>
                    <Typography className="text-subheading">Varies</Typography>
                    <Typography className="text-block">Sometimes you can receive a shiny Pokémon from a Mystery Gift. That easy (but they are few and far between).</Typography>
                </Grid>
                {/* Radar Chaining*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Radar Chaining</Typography>
                    <Typography className="text-subheading">Pokémon X and Y</Typography>
                    <Typography className="text-block">Chaining encounters by using the PokéRadar increases your odds of finding a shiny.</Typography>
                    <Typography className="text-block">To begin your chain, encounter your target Pokémon using the PokéRadar.
                    Defeat or capture your target to keep the chain alive. After the initial encounter, you will know your chain is active if the PokéRadar music is still playing instead of the normal
                    route music.</Typography>
                    <Typography className="text-block">To keep your chain going, your next encounter <b>must be the same Pokémon as your target</b>. If you encounter a Pokémon of a different species, the chain will be broken, and the
                    normal route music will resume.</Typography>
                    <Typography variant="button">How To Encounter The Same Species</Typography>
                    <Typography className="text-block">To encounter the same species again, you need to walk into a "violently shaking" patch of grass after using the PokéRadar. Keep in mind, the PokéRadar has to recharge
                    after 50 steps. You will be able to tell a "violently shaking" patch of grass by the animation and sound it makes. "Normally shaking" grass will contain a random Pokémon from that route, given the normal
                    route odds (which can be your target and keep your chain alive - if you're lucky!), and "weakly shaking" grass will not contain anything and immediately end your chain if you walk into it.</Typography>
                    <Typography className="text-block">Unfortunately, "violently shaking" patches of grass are not guaranteed to spawn when using the PokéRadar. However, the further away the patch of grass is from where
                    your player is standing, the more likely a "violently shaking" patch of grass is to spawn. If a patch is 4 "tile" lengths away, the odds of it spawning a "violently shaking" patch of grass is more likely
                    (83% if your previous encounter was defeated, 93% if your previous encounter was captured).</Typography>
                    <Typography className="text-block">A "violently shaking" patch of grass can still spawn 1-3 tile lengths away, however, the odds are a lot less likely.</Typography>
                    <Typography className="text-block">If no "violently shaking" patches are spawned, simply reset your PokéRadar by walking, and use it again. This will not break the chain.</Typography>
                    <Typography className="text-block">It is important to note, if you use the PokéRadar and no patches shake, your chain is immediately broken. Sometimes this can just happen, but it is a lot less likely
                    to happen if you have plenty of grass patches around you. For example, if you encounter a Pokémon on a corner spot, the odds of no shaking patches spawning is very likely. It is best to have
                    4 patches left and right, 4 patches up and down, of grass around your character when choosing a patch to encounter.</Typography>
                    <Typography variant="button">Breaking Your Chain</Typography>
                    <Typography className="text-block">Pretty much everything besides defeating or capturing your intended target will break the chain. This includes, but is not limited to, running from an encounter, encountering a different species
                    than your intended target, walking into a "weakly shaking" patch of grass, using your roller skates, leaving the route, walking too far away from the grass you are chaining, hatching an egg,
                    turning off your game, or picking up an item. It is also possible that your chain just ends for no reason and it sucks.</Typography>
                    <Typography className="text-block">Again, if the PokéRadar music is still playing, your chain is still active. If it's the normal route music, your chain is broken.</Typography>
                    <Typography variant="button">The Sparkling Patch</Typography>
                    <Typography className="text-block">While chaining, you might encounter the "sparkling" patch which will sparkle and make a distinct noise. This patch is <b>guaranteed</b> to be a shiny!</Typography>
                    <Typography className="text-block">The odds of generating the sparkling patch increase with your chain length, maxing out at a chain length of 40. After your 40th encounter, it is no longer
                    necessary to keep chaining. Instead, continue to reset your PokéRadar (with the chain still active) and generate shaking patches until you see the sparkling patch. The odds of the sparkling
                    patch appearing with a chain of 40 is 1 in 100, or 1%. It is even greater if you have the Shiny Charm.</Typography>
                    <Typography className="text-block">Just be careful not to break your chain, or your odds return to normal.</Typography>
                    <Typography variant="button">Fast Music</Typography>
                    <Typography className="text-block">After every successful chain, there is a 2% chance the music changes to a faster, more frantic/upbeat pace. If this happens, it means your current odds of
                    generating a sparkling patch are <b>maxed out as if you have a 40 chain!</b> That is, you have a 1% chance to generate a sparkling patch, no matter your current chain length. The fast music, however,
                    only lasts for a limited time. So make sure to try and use the PokéRadar as many times as you can (and not breaking your chain) while the music is fast.</Typography>
                </Grid>
                {/* Random Encounter*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Random Encounter</Typography>
                    <Typography className="text-subheading">All Games</Typography>
                    <Typography className="text-block">The purest form of finding a shiny: luck!</Typography>
                </Grid>
                {/* RNG Manipulation*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">RNG Manipulation</Typography>
                    <Typography className="text-subheading">Various Games</Typography>
                    <Typography className="text-block">A complex form of shiny hunting, but early generation Pokémon games have somewhat predictable RNG that is used to generate shiny Pokémon.</Typography>
                    <Typography className="text-block">A comprehensive guide can be found here: <a src="https://retailrng.com/">Retail Pokémon RNG</a></Typography>
                </Grid>
                {/* Sandwich Encounters */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Sandwich Encounters</Typography>
                    <Typography className="text-subheading">Pokémon Scarlet and Violet</Typography>
                    <Typography className="text-block">Similar to Mass Outbreaks, except the specific Pokémon you are looking for is not exclusive to a Mass Outbreak, as indicated on the map.</Typography>
                    <Typography className="text-block">This method involves crafting sandwiches that give Encounter Power Lvl. 3 and Sparkling Power Lvl. 3. Encounter Power Lvl. 3 guarantees a spawn of that
                    type on the map. And, depending on where you are, you can sometimes exclusively spawn a single Pokémon species, while having Sparkling Power Lvl. 3 active.</Typography>
                    <Typography className="text-block">While the shiny odds are greater in a Mass Outbreak, this is still an effective way to spawn a lot of one species, with 3 additional shiny rolls. No
                    chaining is required, just simply respawn as many of the species you can to hopefully encounter a shiny.</Typography>
                    <Typography className="text-block">This <a src="https://edwardsimmons.github.io/pokemon-sv-isolated-encounters/">Isolated Encounter Optimization Tool</a> is what I use to find an area where
                    it's the most likely to spawn the species I am targeting.</Typography>
                    <Grid container className="table-container">
                        <Grid container className="odds-table">
                            <Grid size={4} borderBottom="2px solid black"/>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Base Odds
                            </Grid>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Shiny Charm
                            </Grid>
                            <Grid size={4} className="table-item">
                                Sparkling Power Lvl. 3
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 1024
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 683
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Soft Reset*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Soft Reset</Typography>
                    <Typography className="text-subheading">All Games (With Static Encounters)</Typography>
                    <Typography className="text-block">A simple method used for static encounters, such as legendaries, where the idea is to
                        save before beginning an encounter, start the encounter, check if the Pokemon is shiny, and if
                        not, soft reset your game to restart the encounter and try again until it's shiny.
                    </Typography>
                    <Typography className="text-block">One note: <i>not every static encounter is huntable</i>. For example, in Pokémon Scarlet and Violet,
                    Miraidon and Koraidon are shiny locked, meaning they can never be shiny, no matter how many times you soft reset. This usually applies on a per game, per species basis.</Typography>
                </Grid>
                {/* SOS Chaining*/}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">SOS Chaining</Typography>
                    <Typography className="text-subheading">Pokémon Sun and Moon; Pokémon Ultra Sun and Ultra Moon</Typography>
                    <Typography className="text-block">SOS encounters are a great way to spawn a shiny Pokémon in Sun and Moon. The setup can be a bit tedious, but the results are definitely rewarding.</Typography>
                    <Typography className="text-block">First, we need to build a Hidden Ability Harvest Exeggcute that can bestow a Leppa Berry to our SOS target. The setup involves giving our Exeggcute a Leppa Berry (which restores 10 PP to a move),
                    use Skill Swap to give our target the Harvest ability (allowing it to regenerate any consumed berry), and then using Bestow to give our held Leppa Berry to our target. What this does is
                    effectively give any wild Pokémon unlimited PP since the berry is automatically consumed when a wild Pokémon's move runs out of PP. The Harvest ability then regenerates the held Leppa Berry,
                    and the cycle continues. This is important to keep our SOS chain going.</Typography>
                    <Typography variant="button" >The Harvest Exeggcute Setup</Typography>
                    <Typography className="text-block">1) Catch an Exeggcute (not Exeggutor) with it's Hidden Ability, Harvest. This ability allows a Pokémon to regenerate a consumed berry. It may take some time to find one, but you
                    can catch them in the wild on Exeggutor Island.</Typography>
                    <Typography className="text-block">2) Level up your Exeggcute to level 50 so it will learn the move Bestow. This move passes a held item to a target that is not holding an item.
                    Make sure you DO NOT evolve your Exeggcute before level 50 or it won't be able to learn (or relearn) the move Bestow.</Typography>
                    <Typography className="text-block">3) Teach your Exeggcute the move Skill Swap. It can learn this move from the move tutor at the Battle Tree on Poni Island for 8BP.</Typography>
                    <Typography className="text-block">4) Your Exeggcute is now ready, you can evolve it if you'd like.</Typography>
                    <Typography variant="button">Leppa Berries - Lots of Them</Typography>
                    <Typography className="text-block">After you have access to Poké Pelago, you can essentially generate unlimited Leppa Berries. To do this, first upgrade Isle Abeens to its max.
                    This ensures you have plenty of beans for building and upgrading islands. Next, make sure to build and upgrade Isle Aplenny to its max. You can then essentially harvest Leppa Berries
                    here, and every 24 hours, this island will produce tons of Leppa Berries. You can increase the 24 hour wait period, but after a harvest or two, you should have hundreds of Leppa Berries.</Typography>
                    <Typography variant="button">SOS Chaining</Typography>
                    <Typography className="text-block">To begin the hunt, it is important to bring three things to the battle:</Typography>
                    <Typography className="text-block">1) Your Harvest Exeggcute or Exeggutor holding a Leppa Berry</Typography>
                    <Typography className="text-block">2) A Pokémon with the move False Swipe</Typography>
                    <Typography className="text-block">3) At least two Adrenaline Orbs</Typography>
                    <Typography className="text-block">Once you have found your target, we need to do a few things to ensure we get as many SOS calls as possible. First, use Skill Swap on the target with your Exeggcute to give the
                    target the Harvest ability. Next, use Bestow to give it the Leppa Berry. If Bestow fails, that means your target is already holding an item! You will need to find a target that is not holding an item.
                    Now, bring in your False Swipe Pokémon and use it on your target to knock it down to 1 HP. This is important because the lower the HP, the more likely the target will send out an SOS.
                        Finally, use an Adrenaline Orb to make the target Pokémon nervous. <b>Make sure NOT to induce any status condition. This will prevent the target from making SOS calls.</b></Typography>
                    <Typography className="text-block">With this setup, we will get the maximum number of SOS calls possible, and your target will never run out of PP. If the target runs out of PP, it will use Struggle and KO itself,
                    thus ending any chain. This is why the Leppa Berry setup is so important.</Typography>
                    <Typography className="text-block">From here on out, it's just a matter of defeating any SOS Pokémon that is called in. <b>Make sure to knock out only the Pokémon called in from SOS and not your initial target
                    or you will lose the Harvest/Leppa Berry setup!</b> If your target sends out an SOS call, but nothing shows up, just simply use an Adrenaline Orb for your turn (it will not be consumed).</Typography>
                    <Typography className="text-block">As long as the battle continues, your SOS chain will be active. One small caveat, in <i>Sun and Moon ONLY</i>, after 255 encounters, the SOS chain automatically gets reset to 0.
                    This limitation is not in Ultra Sun and Ultra Moon.</Typography>
                    <Grid container className="table-container">
                        <Grid container className="odds-table">
                            <Grid size={4} borderBottom="2px solid black"/>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Base Odds
                            </Grid>
                            <Grid size={4} className="table-item" fontWeight="bold" borderTop="2px solid black">
                                Shiny Charm
                            </Grid>
                            <Grid size={4} className="table-item">
                                SOS Chain 5 - 10
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 2048
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 1024
                            </Grid>
                            <Grid size={4} className="table-item">
                                SOS Chain 11 - 20
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 683
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 512
                            </Grid>
                            <Grid size={4} className="table-item">
                                SOS Chain 21 - 30
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 410
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 341
                            </Grid>
                            <Grid size={4} className="table-item">
                                SOS Chain 31+
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 293
                            </Grid>
                            <Grid size={4} className="table-item">
                                1 in 256
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Tera Raid */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Tera Raid</Typography>
                    <Typography className="text-subheading">Pokémon Scarlet and Violet</Typography>
                    <Typography className="text-block">Unfortunately, Tera Raids work a little different than the base rate, giving this method a <b>1 in 4103</b> chance to spawn a shiny. The Shiny Charm has no effect on this rate,
                    and sandwich powers also do not effect this rate.</Typography>
                </Grid>
                {/* Ultra Wormhole Encounter */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Ultra Wormhole Encounter</Typography>
                    <Typography className="text-subheading">Pokémon Ultra Sun and Ultra Moon</Typography>
                    <Typography className="text-block">In Ultra Sun and Ultra Moon, you are able to traverse Ultra Space and enter Ultra Wormholes by riding on Solgaleo or Lunala. In some of these Wormholes,
                    you can encounter Ultra Beasts, Legendary Pokémon, or have generic encounters with some other Pokémon species. Depending on how far you traveled, and what type of Wormhole you entered,
                    there is a high probability of encountering a shiny Pokémon.</Typography>
                    <Typography className="text-block">There are four types of wormholes: no rings, one ring, two rings, and glowing. Each of these types comes in different colors as well: white, blue, red, green, and yellow.</Typography>
                    <Typography className="text-block">The types of wormholes determine the rarity of the Pokémon inside the wormhole, while the colors determine the types of Pokémon being inside the wormhole - with the exception of
                    white wormholes which will always have an Ultra Beast encounter. The distance you travel also increases the rarity of the Pokémon inside, as well as increases the rarer types of wormholes.</Typography>
                    <Typography className="text-block">Compounding the distance traveled and the wormhole type you entered, you have a very high chance to encounter a shiny. No ring wormholes will always have a 1% chance to be shiny.
                    One ring wormholes will cap out at a 10% chance for a shiny. Two ring wormholes cap out at a 19% chance for a shiny. And glowing wormholes cap your shiny odds at a whopping 36% (assuming you maxed out
                    the distance traveled by going over 5,000 light-years away)!</Typography>
                    <Typography className="text-block">The shininess of the encounter is determined when you enter the wormhole. So, if it's not a shiny, it will never be, even if you soft reset.</Typography>
                    <Typography className="text-block">This method does NOT apply to Ultra Beasts or Legendary Pokémon.</Typography>
                </Grid>
                {/* Wonder Trade */}
                <Grid container direction="column" className="text-container">
                    <Typography variant="h5">Wonder Trade</Typography>
                    <Typography className="text-subheading">Games with GTS Connectivity</Typography>
                    <Typography className="text-block">A less-than-ideal (and definitely less-than-legitimate) way to shiny hunt. Sometimes you just get random shinies from a Wonder Trade! And they're usually always
                    fake! But a Lvl 100 perfect IV shiny Dragonite is pretty cool, so I will keep it (for now).</Typography>
                </Grid>
            </Grid>
        </>
    )
}