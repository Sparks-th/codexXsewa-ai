export default async function handler(req, res) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });
  const data = await response.text();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send(data);
}
