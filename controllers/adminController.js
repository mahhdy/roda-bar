const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Item = require("../models/Item");
const Order = require("../models/Order");

module.exports = {
  loginPage: (req, res) => {
    res.render("admin/login");
  },

  login: async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.redirect("/admin/login");

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.redirect("/admin/login");

    req.session.user = user;
    res.redirect("/admin/pin");
  },

  pinPage: (req, res) => {
    res.render("admin/pin");
  },

  verifyPin: (req, res) => {
    if (req.body.pin === process.env.ADMIN_PIN) {
      req.session.pinOK = true;
      return res.redirect("/admin/dashboard");
    }
    res.redirect("/admin/pin");
  },

  dashboard: async (req, res) => {
    const newOrders = await Order.find({}).sort({ createdAt: -1 }).limit(5);
    res.render("admin/dashboard", { orders: newOrders });
  },

  items: async (req, res) => {
    const items = await Item.find({});
    res.render("admin/edit-items", { items });
  },

  updateItem: async (req, res) => {
    await Item.findByIdAndUpdate(req.body.id, {
      price: req.body.price,
      available: req.body.available === "true"
    });
    res.redirect("/admin/items");
  },

  orders: async (req, res) => {
  const orders = await Order.find({}).sort({ createdAt: -1 });
  res.render("admin/orders", { orders });
},

updateOrder: async (req, res) => {
  const next = {
    submitted: "accepted",
    accepted: "ready",
    ready: "served",
    served: "paid",
    paid: "feedback"
  };

  await Order.findByIdAndUpdate(req.body.id, {
    status: next[req.body.status]
  });

  res.redirect("/admin/orders");
}
};
