exports.handler = async (event, context) => {
    const onlyFansUrl = "https://onlyfans.com/dani_mahmood";

    return {
        statusCode: 302, // Temporary redirect
        headers: {
            Location: onlyFansUrl
        },
        body: "" // No body needed for redirect
    };
};
