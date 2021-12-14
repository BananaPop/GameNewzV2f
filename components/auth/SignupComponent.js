import React,{ useState, useEffect } from 'react';
import { signup, isAuth, preSignup } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


const SignupComponent = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { name, email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        //console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { name, email, password };

        preSignup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info row">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger row">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info row">{message}</div> : '');

    const signupForm = () => {
        const classes = useStyles();

        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                    <input
                        value={name}
                        onChange={handleChange('name')}
                        type="text"
                        className="form-control"
                        placeholder="Type your name"
                    />
                </div>

                <div className="mb-3 ">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="mb-3 ">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div className="mb-4 d-grid">
                <button class="btn btn-outline-light"><Button className={classes.root} variant="contained" color="blue" disableElevation><h5> Signup </h5></Button></button>
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
            <br />
            <Link href="/auth/password/forgot">
                <a className="btn btn-outline-danger btn-sm">Forgot password</a>
            </Link>
        </React.Fragment>
    )
};

export default SignupComponent;
