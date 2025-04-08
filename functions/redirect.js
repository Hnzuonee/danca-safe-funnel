exports.handler = async (event, context) => {
    try {
        const onlyFansUrl = "https://onlyfans.com/dani_mahmood";
        return {
            statusCode: 302,
            headers: {
                Location: onlyFansUrl,
                "Cache-Control": "no-cache"
            },
            body: ""
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: "Oops, something went wrong. Please try again."
        };
    }
};
