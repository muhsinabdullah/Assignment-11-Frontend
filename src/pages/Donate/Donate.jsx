import React from 'react';
import useAxios from '../../hooks/useAxios';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Donate = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);

  const handleCheckout = (e) => {
    e.preventDefault();
    const donateAmount = e.target.donateAmount.value;
    const donarEmail = user?.email;
    const donarName = user?.name;

    const formData = {
      donateAmount,
      donarEmail,
      donarName
    }

    axiosInstance.post('/create-payment-checkout', formData)
      .then(res => {
        console.log(res.data);
        window.location.href = res.data.url
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 via-red-100 to-pink-100 p-6">
      
      <div className="bg-base-100 border border-base-300 rounded-xl p-8 w-full max-w-md shadow-lg">
        
        {/* Title and Subtitle */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-red-600 mb-2">Support LifeBlood</h1>
          <p className="text-gray-600">
            Your donation helps save lives. Enter an amount and contribute to our mission.
          </p>
        </div>

        {/* Donation Form */}
        <form onSubmit={handleCheckout} className="flex flex-col gap-4">
          <label className="label font-semibold text-gray-700">Donation Amount</label>
          <input
            type="number"
            name="donateAmount"
            className="input input-bordered w-full"
            placeholder="Enter amount"
            required
          />

          <button
            type="submit"
            className="btn btn-gradient bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white hover:scale-105 transition-transform duration-200 w-full mt-2"
          >
            Donate
          </button>
        </form>

      </div>
    </div>
  );
};

export default Donate;
