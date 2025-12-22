import React from "react";
import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-base-100 p-8 rounded-box shadow-lg text-center max-w-md w-full">
        
        {/* Cancel Icon */}
        <XCircle className="mx-auto text-red-500 w-16 h-16 mb-4" />

        {/* Title */}
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Payment Cancelled
        </h2>

        {/* Message */}
        <p className="text-base-content mb-6">
          Your payment was not completed. If this was a mistake, you can try
          again anytime.
        </p>

        {/* Button */}
        <Link to="/" className="btn btn-outline w-full">
          Go to Home
        </Link>

      </div>
    </div>
  );
};

export default PaymentCancel;
