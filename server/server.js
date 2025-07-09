import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Stripe from "stripe";

// Load env variables
dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.json());

// Route: Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  try {
    const cartItems = req.body; // Array of {id, title, price, quantity}

    // Convert cart items to Stripe line items
    const line_items = cartItems.map(item => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
        },
        unit_amount: item.price * 100, // convert to cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: "http://localhost:5174/success",
      cancel_url: "http://localhost:5174/",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));