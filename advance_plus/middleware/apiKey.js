function apiKey(req, res, next) {
  const apiKey = "12345";
  console.log(req.query.api_Key);
  if (req.query.api_Key && req.query.api_Key === apiKey) {
    next();
  } else {
    res.json({ msg: "Invalid API" });
  }
}

module.exports = apiKey;
