import { getRandomPoke } from './services/poke-service';

export default {
    port: process.env.PORT,
    async fetch(request: Request) {
        const poke = await getRandomPoke();

        const response = JSON.stringify(poke);
        const headers = { "Content-Type": "application/json" };

        return new Response(response, { headers });
    },
};