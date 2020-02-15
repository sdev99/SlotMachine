import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import "./Dashboard.scss";
import {Link} from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
import {faEdit, faTrash, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Button
} from "shards-react";

class Dashboard extends Component {
    state = {
        userName: "",
        userPassword: "",
        rememberMe: false,
        loading: false,
        usersData: [1, 2, 3, 4, 5, 6, 7]
    };


    componentWillMount() {
    }

    componentDidMount() {

    }


    render() {
        const {logginFailed, loggedIn, errorMessage} = this.state;

        return (
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text='Logging In'
            >
                <div className="dashboard-page-container">
                    <Navbar className={'navbar-view'} type="dark">
                        <NavbarBrand href="#">NAPA Panel</NavbarBrand>

                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink active href="#" onClick={() => {
                                    this.props.history.push("/admin/login");
                                }}>
                                    Logout
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>

                    <Button squared theme="secondary" className={"export-btn"}>
                        Export
                    </Button>

                    <table className={"table-view"}>
                        <tr>
                            <th>No.</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Store Number</th>
                            <th>Servicing DC</th>
                            <th>Store Name</th>
                            <th>Store Address</th>
                            <th>Options</th>
                        </tr>
                        <tbody>
                        {
                            this.state.usersData.map((data, key) => {
                                return (
                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>Test User</td>
                                        <td>test.one@gmail.com</td>
                                        <td>11212</td>
                                        <td>test dc</td>
                                        <td>Test Store</td>
                                        <td>Test Address</td>
                                        <td className={'options'}>
                                            <Button className={'option-btn'}><FontAwesomeIcon icon={faEdit}/></Button>
                                            <Button className={'option-btn delete'}><FontAwesomeIcon
                                                icon={faTrash}/></Button>
                                            <Button className={'option-btn detail'}><FontAwesomeIcon
                                                icon={faChevronRight}/></Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </LoadingOverlay>

        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps)(Dashboard);
