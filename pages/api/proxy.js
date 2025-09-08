
export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    // Handle preflight CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  try {
    const response = await fetch("http://129.213.89.30:3600/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    // Stream the response back to the browser
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    res.writeHead(200);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(decoder.decode(value, { stream: true }));
    }

    res.end();
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: error.message });
  }
}
