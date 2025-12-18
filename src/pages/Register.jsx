import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

const Register = () => {

    const { registerWithEmailAndPassword, setUser, handleGoogleSignin } = useContext(AuthContext);
    const [bloodGroup, setBloodGroup] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl;
        const role = e.target.role.value;
        const file = photoUrl.files[0];

        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;
        if (pass.length < 6) {
            return alert('Password must have at least 6 characters');
        }
        if (!upperCase.test(pass)) {
            return alert('Password must have Uppercase letter');
        }
        if (!lowerCase.test(pass)) {
            return alert('Password must have Lowercase letter');
        }

        const res = await axios.post('https://api.imgbb.com/1/upload?key=be64b0ce6ff2ea392d8017e826dfe151', { image: file }, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
        const mainPhotoUrl = res.data.data.display_url

        const formData = {
            name,
            email,
            bloodGroup: bloodGroup,
            password: pass,
            mainPhotoUrl,
            role
        }


        if (res.data.success == true) {
            registerWithEmailAndPassword(email, pass)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: mainPhotoUrl
                    }).then(() => {
                        setUser(userCredential.user);
                        axios.post('http://localhost:5000/users', formData)
                            .then(res => {
                                console.log(res.data);
                            })
                            .catch(err => {
                                console.log(err);

                            })
                    }).catch((err) => {
                        console.log(err)
                    });
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }


    const googleSignin = () => {
        handleGoogleSignin()
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleOnSubmit} className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your full Name" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Photo URL</label>
                            <input name='photoUrl' type="file" className="input" placeholder="Past Photo URL" />
                            <label className="label">
                                <span className="label-text">Blood Group</span>
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={bloodGroup}
                                onChange={(e) => setBloodGroup(e.target.value)}
                                required
                            >
                                <option disabled value=''>Select your Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select name='role' defaultValue="Choose Role" className="select select-secondary">
                                <option disabled={true}>Choose Role</option>
                                <option value='donar'>Donar</option>
                                <option value='requester'>Blood Requester</option>
                            </select>
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <button onClick={googleSignin} className="btn"><FcGoogle /> Signup with google</button>
                            <div><span>Already have an account?</span> <Link className='text-blue-500' to={'/login'}>Login</Link></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;