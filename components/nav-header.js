import {Grid, Link} from "@mui/material";

export default function NavHeader() {
    return(
        <Grid container spacing={2} justifyContent="center" p={4}>
            <Grid>
                <Link href="/">Home</Link>
            </Grid>
            <Grid>
                <Link href="/kanto">Generation I</Link>
            </Grid>
            <Grid>
                <Link href="/johto">Generation II</Link>
            </Grid>
            <Grid>
                <Link href="/hoenn">Generation III</Link>
            </Grid>
            <Grid>
                <Link href="/sinnoh">Generation IV</Link>
            </Grid>
            <Grid>
                <Link href="/unova">Generation V</Link>
            </Grid>
            <Grid>
                <Link href="/kalos">Generation VI</Link>
            </Grid>
            <Grid>
                <Link href="/alola-unknown">Generation VII</Link>
            </Grid>
            <Grid>
                <Link href="/galar-hisui">Generation VIII</Link>
            </Grid>
            <Grid>
                <Link href="/paldea">Generation IX</Link>
            </Grid>
            <Grid>
                <Link href="/regional-variants">Regional Variants</Link>
            </Grid>
        </Grid>
    );
}