export default defineEventHandler(async (event) => {

    const user = event.context.user;

    return {
        user
    };
});

