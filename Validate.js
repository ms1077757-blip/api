export default function handler(req, res) {
  const key = req.query.key;

  if (!key) {
    return res.status(400).json({ valid: false, error: "no_key" });
  }

  // lista de keys válidas (teste inicial)
  const validKeys = [
    "TESTE123",
    "RAVENTESTE",
    "VIP30"
  ];

  if (validKeys.includes(key)) {
    return res.json({ valid: true });
  }

  return res.json({ valid: false });
    }
