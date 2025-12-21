import { useContext, useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";

const AddRequest = () => {

    const [showOnHome, setShowOnHome] = useState(false);
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();

    const [upazilas, setUpazilas] = useState([]);
    const [upazila, setUpazila] = useState('');
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState('');

    useEffect(() => {
        axios.get('/upazila.json')
            .then(res => {
                setUpazilas(res.data.upazilas)
            })
        axios.get('/district.json')
            .then(res => {
                setDistricts(res.data.districts)
            })
    }, [])

    const handleAddRequest = (e) => {
        e.preventDefault();
        const form = e.target;

        const recipientName = form.recipientName.value;
        const hospitalName = form.hospitalName.value;
        const fullAddress = form.fullAddress.value;
        const bloodGroup = form.bloodGroup.value;
        const recipient_upazila = upazila;
        const recipient_district = district;
        const donationDate = form.donationDate.value;
        const donationTime = form.donationTime.value;
        const requestMessage = form.requestMessage.value;

        const formData = {
            recipientName,
            hospitalName,
            fullAddress,
            bloodGroup,
            recipient_upazila,
            recipient_district,
            donationDate,
            donationTime,
            requestMessage,
            showOnHome,
            donation_status: 'pending',
        };

        axiosInstance.post('/requests', formData)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err)
            )
    }


    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6 text-primary">
                🩸 Blood Donation Request
            </h2>

            <form onSubmit={handleAddRequest} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Requester Name (Read Only) */}
                <div>
                    <label className="label">
                        <span className="label-text">Requester Name</span>
                    </label>
                    <input
                        type="text"
                        name="requesterName"
                        value={user?.displayName}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                {/* Requester Email (Read Only) */}
                <div>
                    <label className="label">
                        <span className="label-text">Requester Email</span>
                    </label>
                    <input
                        type="email"
                        name="requesterEmail"
                        value={user?.email}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                {/* Recipient Name */}
                <div>
                    <label className="label">
                        <span className="label-text">Recipient Name</span>
                    </label>
                    <input
                        type="text"
                        name="recipientName"
                        placeholder="Recipient Full Name"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Blood Group */}
                <div>
                    <label className="label">
                        <span className="label-text">Blood Group</span>
                    </label>
                    <select
                        name="bloodGroup"
                        className="select select-bordered w-full"
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                {/* Recipient District */}
                <div>
                    <label className="label">
                        <span className="label-text">Recipient District</span>
                    </label>
                    <select value={district} onChange={(e) => setDistrict(e.target.value)} className="select select-bordered w-full max-w-xs">
                        <option disabled selected value=''>Select your district</option>
                        {
                            districts.map(d => <option value={d?.name} key={d?.id}>{d?.name}</option>)
                        }
                    </select>
                </div>

                {/* Recipient Upazila */}
                <div>
                    <label className="label">
                        <span className="label-text">Recipient Upazila</span>
                    </label>
                    <select value={upazila} onChange={(e) => setUpazila(e.target.value)} className="select select-bordered w-full max-w-xs">
                        <option disabled selected value=''>Select your upazila</option>
                        {
                            upazilas.map(u => <option value={u?.name} key={u?.id}>{u?.name}</option>)
                        }
                    </select>
                </div>

                {/* Hospital Name */}
                <div className="md:col-span-2">
                    <label className="label">
                        <span className="label-text">Hospital Name</span>
                    </label>
                    <input
                        type="text"
                        name="hospitalName"
                        placeholder="Dhaka Medical College Hospital"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Full Address */}
                <div className="md:col-span-2">
                    <label className="label">
                        <span className="label-text">Full Address</span>
                    </label>
                    <input
                        type="text"
                        name="fullAddress"
                        placeholder="Zahir Raihan Rd, Dhaka"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Donation Date */}
                <div>
                    <label className="label">
                        <span className="label-text">Donation Date</span>
                    </label>
                    <input
                        type="date"
                        name="donationDate"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Donation Time */}
                <div>
                    <label className="label">
                        <span className="label-text">Donation Time</span>
                    </label>
                    <input
                        type="time"
                        name="donationTime"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Request Message */}
                <div className="md:col-span-2">
                    <label className="label">
                        <span className="label-text">Request Message</span>
                    </label>
                    <textarea
                        name="requestMessage"
                        rows="4"
                        placeholder="Write in detail why blood is needed..."
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                {/* Show on Home Page Checkbox */}
                <div className="md:col-span-2">
                    <label className="cursor-pointer flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-primary"
                            checked={showOnHome}
                            onChange={(e) => setShowOnHome(e.target.checked)}
                        />
                        <span className="label-text">
                            Show Home Page
                        </span>
                    </label>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Request Blood Donation
                    </button>
                </div>

            </form>

            {/* Hidden Default Status (NOT IN FORM UI) */}
            <input type="hidden" name="status" value="pending" />
        </div>
    );
};

export default AddRequest;
