import React, { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import LoginGoogle from './LoginGoogle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    
    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };
    
    const showLoading = () => (loading ? <div className="loading" loading variant="outlined">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger row">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info row">{message}</div> : '');
    

    const signinForm = () => {
        const classes = useStyles();
        return (
            <form onSubmit={handleSubmit}>
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
                <div className="d-grid gap-2 mb-4">
                    
                <button class="btn btn-outline-light"><Button className={classes.root} variant="contained" color="success" disableElevation><h5> Login </h5></Button></button>
                
                </div>
                
            </form>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            
            <hr/>
            {showForm && signinForm()}
            <br/>
             <Link href="/auth/password/forgot">
                <a className="btn btn-outline-danger btn-sm">Forgot password</a>
            </Link> 
            
        </React.Fragment>
    );
};

export default SigninComponent;

// 109 LoginGoogle <LoginGoogle />