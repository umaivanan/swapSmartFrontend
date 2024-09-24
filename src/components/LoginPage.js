import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const initialStateErrors = {
        email: { required: false },
        password: { required: false },
        custom_error: null,
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate(); 

    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errors = { ...initialStateErrors };
        let hasError = false;

        // Validate inputs
        if (inputs.email === "") {
            errors.email.required = true;
            hasError = true;
        }
        if (inputs.password === "") {
            errors.password.required = true;
            hasError = true;
        }

        // If validation fails, show errors
        if (hasError) {
            setErrors(errors);
            return;
        }

        setLoading(true); // Start loading indicator

        try {
            const response = await fetch('http://localhost:8702/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });

            const data = await response.json();

            if (response.ok) {
                // Store token in localStorage and email in sessionStorage
                sessionStorage.setItem('userEmail', inputs.email);
                localStorage.setItem('token', data.token); 
                console.log("User logged in successfully:", data);

                // Navigate to the dashboard or user list based on role
                if (data.role === 'admin') {
                    navigate('/admin-dashboard');
                } else {
                    navigate('/list');
                }
            } else {
                // Display custom error message from server
                setErrors({ ...errors, custom_error: data.error || 'Something went wrong' });
            }
        } catch (error) {
            // Handle unexpected errors
            console.error("Error occurred:", error);
            setErrors({ ...errors, custom_error: 'An unexpected error occurred' });
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    return (
        <section className="login-block">
            <div className="container">
                <div className="row">
                    <div className="col login-sec">
                        <h2 className="text-center">Login</h2>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email" className="text-uppercase">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={handleInput}
                                    name="email"
                                    id="email"
                                    value={inputs.email}
                                />
                                {errors.email.required && <span className="text-danger">Email is required.</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-uppercase">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={handleInput}
                                    name="password"
                                    id="password"
                                    value={inputs.password}
                                />
                                {errors.password.required && <span className="text-danger">Password is required.</span>}
                            </div>
                            <div className="form-group">
                                {/* Display custom error if it exists */}
                                {errors.custom_error && <span className="text-danger"><p>{errors.custom_error}</p></span>}
                                
                                {/* Show loading spinner while logging in */}
                                {loading && (
                                    <div className="text-center">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                )}

                                <input
                                    type="submit"
                                    className="btn btn-login float-right"
                                    disabled={loading} // Disable the button during loading
                                    value="Login"
                                />
                            </div>
                            <div className="clearfix"></div>
                            <div className="form-group">
                                Don't have an account? Please <a href="/register">Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
