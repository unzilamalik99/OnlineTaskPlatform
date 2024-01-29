// PaymentForm.js

import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [name, setName] = useState("");
  const [isProcessing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    // In a real-world scenario, you would integrate with a payment gateway here.
    // For this example, let's simulate a delay and set paymentSuccess to true.
    setProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setProcessing(false);
    setPaymentSuccess(true);
  };

  return (
    <section className="pt-20 md:pb-40 pb-20 item-center text-center md:px-[400px]">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
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
  );
};

export default PaymentForm;
