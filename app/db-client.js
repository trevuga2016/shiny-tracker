import {createClient} from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
)

export async function getAllPokemonByRegion(region) {
    if (region.includes("-")) {
        let subSt1 = String(region).split("-")[0]
        let subSt2 = String(region).split("-")[1]
        let region1 = await getPokemonSpeciesByRegion(subSt1)
        let region2 = await getPokemonSpeciesByRegion(subSt2)
        return [ ...region1, ...region2 ]
    } else {
        return getPokemonSpeciesByRegion(region);
    }
}

export async function getNumberOfRegionalShinies(region) {
    const { count, error } = await supabase
        .from('shiny_tracker')
        .select('*', { count: 'exact', head: true })
        .eq('hasShiny', true)
        .eq('region', String(region).toLowerCase())
        .is('isRegionalForm', null)
    return count
}

export async function getAllRegions() {
    const { data, error } = await supabase
        .from('regions')
        .select('*');
    return data
}

export async function getNumberOfSpeciesByRegion(region) {
    const data = await getPokemonSpeciesByRegion(String(region).toLowerCase());
    return data?.length;
}

export async function getAllRegionalForms() {
    const { data, error } = await supabase
        .from('shiny_tracker')
        .select('*')
        .is('isRegionalForm', true)
        .order('dexNo', { ascending: true });
    return data
}

export async function getCurrentTarget() {
    const { data, error } = await supabase
        .from('shiny_tracker')
        .select('*')
        .is('isCurrentTarget', true);
    return data[0];
}

export async function getRecentTarget() {
    const { data, error } = await supabase
        .from('shiny_tracker')
        .select('*')
        .is('isRecent', true);
    return data[0];
}

export async function numberOfRegionalShiniesFound() {
    const { data, error } = await supabase
        .from('shiny_tracker')
        .select('*')
        .is('hasShiny', true)
        .is('isRegionalForm', true);
    return data.length
}

export async function totalNumberOfRegionalVariants() {
    const { data, error } = await supabase
        .from('shiny_tracker')
        .select('*')
        .is('isRegionalForm', true);
    return data.length
}

async function getPokemonSpeciesByRegion(region) {
    const { data, error } = await supabase
        .from('shiny_tracker')
        .select('*')
        .eq('region', region)
        .is('isRegionalForm', null)
        .order('_id', { ascending: true });
    return removeMultipleForms(data);
}

function removeMultipleForms(data) {
    const unique = [];
    const seen = new Set();
    for (const row of data) {
        if (!seen.has(row.dexNo)) {
            seen.add(row.dexNo);
            unique.push(row);
        }
    }
    return unique;
}

export const typesMap = {
    "normal": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/1.png",
    "fighting": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/2.png",
    "flying": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/3.png",
    "poison": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png",
    "ground": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/5.png",
    "rock": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/6.png",
    "bug": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/7.png",
    "ghost": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/8.png",
    "steel": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/9.png",
    "fire": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/10.png",
    "water": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/11.png",
    "grass": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png",
    "electric": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/13.png",
    "psychic": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/14.png",
    "ice": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/15.png",
    "dragon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/16.png",
    "dark": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/17.png",
    "fairy": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/18.png"
}
