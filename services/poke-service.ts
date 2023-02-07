import { getPoke as getPokeApi, Poke } from '../integrations/pokeapi';


export async function getRandomPoke(): Promise<Poke> {
    const id: number = Math.floor(Math.random() * 101);

    const response = await getPokeApi(id);
    const results: Poke[] = response.pokemon_list;

    if (results && results.length > 0) {
        return results.pop();
    }

    return undefined;
}