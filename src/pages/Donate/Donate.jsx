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
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-base-200 border border-base-300 rounded-box p-6 w-full max-w-sm">

                <form onSubmit={handleCheckout}>
                    <label className="label">Donation Amount</label>
                    <input
                        type="number"
                        name="donateAmount"
                        className="input input-bordered w-full"
                        placeholder="Enter amount"
                        required
                    />

                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                    >
                        Donate
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Donate;
