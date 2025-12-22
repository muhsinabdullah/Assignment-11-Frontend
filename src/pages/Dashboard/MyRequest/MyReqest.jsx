import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';

const MyReqest = () => {

    const [myRequests, setMyRequests] = useState([]);
    const [totalRequest, setTotalRequest] = useState(0);
    const [itemsPerPage, setitemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (!user) return;

        axiosSecure.get(`/my-request?page=${currentPage - 1}&size=${itemsPerPage}`)
            .then(res => {
                setMyRequests(res.data.request);
                setTotalRequest(res.data.totalRequest);
            })
            .catch(err => console.error(err));
    }, [axiosSecure, currentPage, itemsPerPage, user]);

    const numberOfPages = Math.ceil(totalRequest / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(e => e + 1)
    console.log(pages);

    const handlePrev = ()=>{
       if(currentPage>1){
         setCurrentPage(currentPage-1)
       }
    }
    const handleNext =() =>{
         if(currentPage < pages.length){
         setCurrentPage(currentPage+1)
       }
    }
    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Hospital Name</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myRequests.map((request, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{request?.recipientName}</td>
                                    <td>{request?.hospitalName}</td>
                                    <td>{request?.bloodGroup}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <div className=' flex justify-center mt-12 gap-4'>
                <button 
                onClick={handlePrev} className="btn">Prev</button>
                {
                    pages.map(page =>
                        <button
                            className={` btn ${page === currentPage ? 'bg-[#435585] text-white' : ''}`}
                            onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    )
                }
                <button 
                onClick={handleNext} 
                className="btn">Next</button>
            </div>
        </div>
    );
};

export default MyReqest;