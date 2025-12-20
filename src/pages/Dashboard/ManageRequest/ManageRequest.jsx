import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { AuthContext } from '../../../provider/AuthProvider';

const ManageRequest = () => {

    const [requests, setRequests] = useState([]);
    const axiosInstance = useAxios();
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axiosInstance.get(`donar/request/${user?.email}`)
            .then(res => {
                setRequests(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [axiosInstance, user?.email])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Recipient Name</th>
                            <th>Blood Group</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests.map((request) => (
                                <tr>
                                    <td>{request?.recipientName}</td>
                                    <td>{request?.bloodGroup}</td>
                                    <td className="capitalize">{request.status}</td>
                                    <td><button className=' btn'>Donated</button></td>
                                    <td><button className=' btn'>Delete Request</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Recipient Name</th>
                            <th>Blood Group</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            requests?.map(request => <tr>
                                <td>
                                    <div>
                                        <div className="font-bold">{request?.recipientName}</div>
                                        <div className="text-sm opacity-50">{request?.
                                            hospitalName}</div>
                                    </div>
                                </td>
                                <td>
                                    {request?.bloodGroup}
                                </td>
                                <td>{request?.requestMessage}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Done</button>
                                    <button className="btn btn-ghost btn-xs">Cancel</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageRequest;