import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CheckoutForm({clearCart, updateCoupon}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!stripe || !elements) return;

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      // confirmParams: {
      //   return_url: `${window.location.origin}/confirmation`,
      // },
      redirect: "if_required",
    });

    if (error) {
      // console.log(error.message);
      setError(error.message || "Payment failed");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      clearCart();
      updateCoupon('');
      navigate("/confirmation", { replace: true });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      {error && <p className="text-red-500">{error}</p>}
      <button disabled={loading} className="bg-primary text-white px-4 py-2
      disabled:bg-gray-400 disabled:cursor-not-allowed">
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}
