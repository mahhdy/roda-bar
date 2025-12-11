const Order = require("../models/Order");

module.exports = {
  add: (req, res) => {
    if (!req.session.cart) req.session.cart = [];
    req.session.cart.push(req.body);
    res.redirect("/order/cart");
  },

  cart: (req, res) => {
    const cart = req.session.cart || [];
    res.render("cart", { cart });
  },

  checkout: async (req, res) => {
    const cart = req.session.cart || [];
    let total = cart.reduce((sum, x) => sum + Number(x.price), 0);

    const order = await Order.create({
      items: cart,
      total,
      payment: req.body.payment
    });

    req.session.cart = [];
    res.redirect("/order/track/" + order._id);
  },

  track: async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.render("tracking", { order });
  }
};
