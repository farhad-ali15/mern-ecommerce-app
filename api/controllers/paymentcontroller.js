// This is your test secret API key.
import Stripe from "stripe";
const YOUR_DOMAIN = "http://localhost:3000/pay";
export const createNewPayment = async (req, res) => {
  const KEY = process.env.STRIPE_KEY;
  const stripe = new Stripe(KEY);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1N4p5aCrAYt82Oxy4QIo69l9",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
};
