export default async function handler(req, res) {
  try {
    const apiKey = process.env.EIA_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Missing EIA_API_KEY on server' });
    }

    const url = `https://api.eia.gov/v2/seriesid/PET.RBRTE.D?api_key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({
        error: 'EIA request failed',
        status: response.status
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: 'Server failed to fetch EIA data'
    });
  }
}
