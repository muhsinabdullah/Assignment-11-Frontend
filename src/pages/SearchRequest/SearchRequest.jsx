import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';

const SearchRequest = () => {
    const [bloodGroup, setBloodGroup] = useState('');
    const [upazilas, setUpazilas] = useState([]);
    const [upazila, setUpazila] = useState('');
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState('');
    const axiosInstance = useAxios();

    useEffect(() => {
        axios.get('/upazila.json')
            .then(res => setUpazilas(res.data.upazilas))
            .catch(err => console.error(err));

        axios.get('/district.json')
            .then(res => setDistricts(res.data.districts))
            .catch(err => console.error(err));
    }, []);

    const handleSearch = (e) =>{
        e.preventDefault();
        axiosInstance.get(`/search-requests?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`)
        .then(res =>{
            console.log(res);
        })
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-6">
            
            {/* Heading */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Find Blood Donors</h1>
                <p className="text-lg text-gray-600">
                    Search for available blood donors in your district and upazila.
                </p>
            </div>

            {/* Search Form */}
            <div className="bg-base-100 p-8 rounded-xl shadow-lg w-full max-w-4xl">
                <form
                onSubmit={handleSearch}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

                    {/* Blood Group */}
                    <div className="flex flex-col">
                        <label className="label">
                            <span className="label-text font-semibold">Blood Group</span>
                        </label>
                        <select
                            className="select select-bordered w-full"
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                            required
                        >
                            <option disabled value=''>Select Blood Group</option>
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

                    {/* Upazila */}
                    <div className="flex flex-col">
                        <label className="label">
                            <span className="label-text font-semibold">Upazila</span>
                        </label>
                        <select
                            className="select select-bordered w-full"
                            value={upazila}
                            onChange={(e) => setUpazila(e.target.value)}
                        >
                            <option disabled value=''>Select Upazila</option>
                            {upazilas.map(u => (
                                <option key={u.id} value={u.name}>{u.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* District */}
                    <div className="flex flex-col">
                        <label className="label">
                            <span className="label-text font-semibold">District</span>
                        </label>
                        <select
                            className="select select-bordered w-full"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                            <option disabled value=''>Select District</option>
                            {districts.map(d => (
                                <option key={d.id} value={d.name}>{d.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Search Button */}
                    <div className="flex flex-col">
                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-1 md:mt-0"
                        >
                            Search
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SearchRequest;
