import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import toast from 'react-hot-toast';
import Spinner from '../Spinner';

const PrivateRoute = () => {
    const [ok, setOk] = useState(); // Initially null for loading state
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/v1/auth/auth-user");
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error("Authorization error:", error);
                setOk(false); // Handle errors gracefully
            }
        };
        if (auth?.token) {
            authCheck();
        } else {
            setOk(false); // If no auth token, set as not authorized
        }
    }, [auth?.token]);

    // auth check: is function se ham get kar rahe hai user ko jiska header me authorize code ye hai,
    // uske bad agar user exist karta hai to backend se status ok aaiga res me

    // Show spinner while ok is null (loading state)
    if (ok === null) {
        return <Spinner />;
    }

    // Show Outlet if authorized, or fallback content for unauthorized
    return ok ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;
