module.exports = (req, res, next) => {
  if (req.query.lang) {
    res.cookie("lang", req.query.lang);
    req.lang = req.query.lang;
  } else if (req.cookies.lang) {
    req.lang = req.cookies.lang;
  } else {
    req.lang = req.acceptsLanguages("fr", "en") || "en";
  }
  next();
};
