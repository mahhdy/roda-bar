const Item = require("../models/Item");

module.exports = {
  home: (req, res) => {
    res.render("home", { lang: req.lang });
  },

  menu: async (req, res) => {
    const items = await Item.find({ available: true }).sort({ category: 1 });
    res.render("menu", { items, lang: req.lang });
  },

  item: async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render("item", { item, lang: req.lang });
  }
};
