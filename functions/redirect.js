// POST‑only redirect – schová OnlyFans URL před IG botem
exports.handler = async (event) => {
  // blokuj GET (crawler)
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  return {
    statusCode: 302,
    headers: {
      Location: 'https://onlyfans.com/dani_mahmood', // ← změň, pokud bude jiný nick/UTM
      'Cache-Control': 'no-cache'
    },
    body: ''
  };
};
