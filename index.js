export default {
    port: process.env.PORT,
    fetch(request) {
        return new Response("Welcome to Bun!");
    },
};