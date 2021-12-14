import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME, DOMAIN } from '../config';
import { signout, isAuth } from '../actions/auth';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Search from './blog/Search';
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


Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const classes = useStyles();

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <div className="pb-1">
                <Navbar color="" expand="md" className="navbar navbar-expand-lg navbar-light bg-light"  >
                    <Link href="/">
                        <a className="typewriter">
                            <div className="pt-1" >
                                <NavbarBrand style={{ cursor: 'pointer' }}>
                                    <img src={`${DOMAIN}/images/logo.png`} height="50" class="d-inline-block align-text-top" />
                                    <></>
                                </NavbarBrand>
                            </div>
                        </a>
                    </Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <React.Fragment>
                                <NavItem>
                                    <Link href="/blogs">
                                        <NavLink style={{ cursor: 'pointer' }}><Button  >Blogs</Button></NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/contact">
                                        <NavLink style={{ cursor: 'pointer' }}><Button  >Contact</Button></NavLink>
                                    </Link>
                                </NavItem>
                                <Search/>
                            </React.Fragment>
                        </Nav>
                        <Nav className="" navbar>
                            <NavItem>
                                <a href="/user/crud/blog" className="btn "><Button variant="outlined" color="primary"  ><o>Write a blog</o></Button></a>
                            </NavItem>
                            {/* {JSON.stringify(isAuth())} */}
                            {isAuth() && isAuth().role === 0 && (
                                <NavItem>
                                    <Link href="/user">
                                        <NavLink style={{ cursor: 'pointer' }}>{<o><Button className={classes.root} color="success" variant="outlined"><>{isAuth().name}</><i class="bi bi-person-lines-fill"></i></Button></o>}</NavLink>
                                    </Link>
                                </NavItem>
                            )}

                            {isAuth() && isAuth().role === 1 && (
                                <NavItem>
                                    <Link href="/admin">
                                        <NavLink style={{ cursor: 'pointer' }}>{<o><Button className={classes.root} color="success" variant="outlined" >{isAuth().name}<i class="bi bi-person-lines-fill"></i></Button></o>}</NavLink>
                                    </Link>
                                </NavItem>
                            )}

                            {!isAuth() && (
                                <React.Fragment>
                                    <NavItem>
                                        <Link href="/signin">
                                            <NavLink style={{ cursor: 'pointer' }}><Button variant="contained" color="secondary">Login</Button></NavLink>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link href="/signup">
                                            <NavLink style={{ cursor: 'pointer' }}><Button variant="contained" color="primary">Signup</Button></NavLink>
                                        </Link>
                                    </NavItem>
                                </React.Fragment>
                            )}

                            {isAuth() && (
                                <NavItem>
                                    <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                                        <o><Button variant="contained" color="secondary">Logout<i class="bi bi-box-arrow-right"></i></Button></o> 
                                    </NavLink>
                                </NavItem>
                            )}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </React.Fragment>
    );
};

export default Header;
