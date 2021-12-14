import React from 'react';
import Link from 'next/link'

class Footer extends React.Component {
    state = {
        curTime: new Date().toLocaleString()
    }
    render() {
        return (
            <div className="bg-light text-center text-lg-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">About us</h5>
                            <p>
                                เขียน
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Courses</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-dark">เขียน</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">เขียน</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">เขียน</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">เขียน</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0">เขียน</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-dark">เขียน</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">เขียน</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">เขียน</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">เขียน</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>

        )
    }

}
export default Footer;