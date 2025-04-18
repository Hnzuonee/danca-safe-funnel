// POST‑only redirect – schová OnlyFans URL před IG botem
exports.handler = async (event) => {
  // 1) Povol jen POST (crawler GET dostane 405)
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // 2) Přesměruj reálné uživatele
  return {
    statusCode: 302,
    headers: {
      Location: 'https://onlyfans.com/dani_mahmood', // ← změň, pokud bude jiná adresa/UTM
      'Cache-Control': 'no-cache'
    },
    body: ''
  };
};
