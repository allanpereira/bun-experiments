import { gql, GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient(process.env.POKE_API, {});

const query = gql`
    query getPoke($id: Int!) {
        pokemon_list: pokemon_v2_pokemonspecies(where: { id: {_eq: $id } } ) {
            id
            name
            is_legendary
        }
    }
`

export interface Poke {
    id: number,
    name: string,
    is_legendary: boolean
}

export async function getPoke(id: number) {
    return graphQLClient.request(query, {
        id
    });
}