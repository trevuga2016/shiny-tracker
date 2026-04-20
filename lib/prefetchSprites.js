import {queryClient} from "./react-query";

export async function prefetchSprites(regionName, pokemonList) {
    await Promise.all(
        pokemonList.map((pokemon) => {
            queryClient.prefetchQuery({
                queryKey: ["sprite", pokemon],
                queryFn: async () => {
                    const res = await fetch(pokemon.sprite);
                    const blob = await res.blob();
                    return URL.createObjectURL(blob);
                }
            })
        })
    )
}