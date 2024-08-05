import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://claw-enterprises-assignment-g4vk.onrender.com/api/users/login', { email, password });
            console.log(response);
            alert("Login Successful");
            navigate('/todos');
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || "An error occurred. Please try again later.");
        }
    };

    return (
        <div className="login-cont">
            <h2 className="mb-4">Login</h2>
            <p className='login-route mb-5'>Don't have an account? <Link className='text-decoration-none' to="/register">Register here...</Link></p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password*"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className='error-msg'>{error}</p>}
                <div className='text-center mt-4'>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
