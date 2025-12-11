module.exports = {
  ensureAdmin: (req, res, next) => {
    if (!req.session.user) return res.redirect("/admin/login");
    if (!req.session.pinOK) return res.redirect("/admin/pin");
    next();
  }
};
