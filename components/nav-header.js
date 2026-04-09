import {Grid} from "@mui/material";
import Link from "next/link";

export default function NavHeader() {
    return(
        <Grid container spacing={2} justifyContent="center" textAlign="center" p={4} sx={{
            fontSize: {
                xs: "14px",
                md: "16px",
                lg: "16px"
            }
        }}>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/">Home</Link>
            </Grid>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/kanto">Generation I</Link>
            </Grid>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/johto">Generation II</Link>
            </Grid>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/hoenn">Generation III</Link>
            </Grid>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/sinnoh">Generation IV</Link>
            </Grid>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/unova">Generation V</Link>
            </Grid>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/kalos">Generation VI</Link>
            </Grid>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/alola-unknown">Generation VII</Link>
            </Grid>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/galar-hisui">Generation VIII</Link>
            </Grid>
            <Grid size={{ xs: 4, md: 2, lg: 1 }}>
                <Link href="/paldea">Generation IX</Link>
            </Grid>
            <Grid size={{ xs: 6, md: 2, lg: 1 }}>
                <Link href="/regional-variants">Regional Variants</Link>
            </Grid>
        </Grid>
    );
}