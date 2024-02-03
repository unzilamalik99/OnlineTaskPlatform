// PaymentForm.js

import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("");
  const [isProcessing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    setProcessing(true);

    try {
      // Simulate a delay (replace this with actual payment gateway integration)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set paymentSuccess to true after the delay
      setPaymentSuccess(true);
    } catch (error) {
      // Handle any errors that might occur during the payment process
      console.error("Payment failed:", error);
    } finally {
      // Ensure that processing is set to false regardless of success or failure
      setProcessing(false);
    }
  };

  return (
    <>
      <h2 className="item-center text-center py-10 pb-10 text-2xl font-semibold mb-4 h-auto">
        Payment Details
      </h2>
      <section className=" md:px-[400px]">
        <div className="max-w-md mx-5  p-6 bg-white rounded-md shadow-md ">
          {paymentSuccess ? (
            <div className="text-green-600 mb-4">Payment Successful!</div>
          ) : (
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2  "
                  htmlFor="cardNumber"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full p-2 border rounded"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2  "
                  htmlFor="payment"
                >
                  Payment
                </label>
                <input
                  type="text"
                  id="payment"
                  className="w-full p-2 border rounded"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="expiryDate"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="w-full p-2 border rounded"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="cvc"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    className="w-full p-2 border rounded"
                    value={cvc}
                    onChange={(e) => setCVC(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button
                type="button"
                className={`w-full bg-blue-500 text-white p-2 rounded ${
                  isProcessing ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Submit Payment"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default PaymentForm;
