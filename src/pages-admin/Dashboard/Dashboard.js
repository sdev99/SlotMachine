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
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Container,
    Row,
    Col,
    FormCheckbox
} from "shards-react";

class Dashboard extends Component {
    state = {
        userName: "",
        userPassword: "",
        rememberMe: false,
        loading: false,
        showUserDataModel: false,
        usersData: [1, 2, 3, 4, 5, 6, 7],

        affiliatedWithNapaStore: false,
        anInstallerCustomer: false,

        napaNewElectrical: false,
        wilson: false,
        premiumPlus: false,
        premiumSteering: false,
        powerSupport: false,
        newSteering: false,
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
                                            <Button className={'option-btn'} onClick={() => {
                                                this.setState({showUserDataModel: true});
                                            }}><FontAwesomeIcon icon={faEdit}/></Button>
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


                <Modal centered={true} className={'userdata-edit-modal'} open={this.state.showUserDataModel} toggle={() => {
                    this.setState({showUserDataModel: !this.state.showUserDataModel});
                }}>
                    <ModalHeader>Edit User Data</ModalHeader>
                    <ModalBody>
                        <div className={'form-container'}>
                            <Container className={'option-form'}>
                                <Row>
                                    <Col>
                                        <div className={'heading4'}>
                                            ARE YOU?
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={6}>
                                        <FormCheckbox
                                            checked={this.state.affiliatedWithNapaStore}
                                            onChange={e => {
                                                this.setState({
                                                    affiliatedWithNapaStore: true,
                                                    anInstallerCustomer: false
                                                });
                                            }}
                                        >affiliated with a NAPA store</FormCheckbox>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <FormCheckbox
                                            checked={this.state.anInstallerCustomer}
                                            onChange={e => {
                                                this.setState({
                                                    affiliatedWithNapaStore: false,
                                                    anInstallerCustomer: true
                                                });
                                            }}
                                        >
                                            an installer customer
                                        </FormCheckbox>
                                    </Col>
                                </Row>
                            </Container>

                            <Container className={'input-form'}>
                                <Row>
                                    <Col sm={12} md={4}>
                                        <span className={'input-label'}>Full Name</span>
                                    </Col>
                                    <Col sm={12} md={8}>
                                        <FormInput className="input-field"/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={4}>
                                        <span className={'input-label'}>Email address</span>
                                    </Col>
                                    <Col sm={12} md={8}>
                                        <FormInput className="input-field"/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={4}>
                                        <span className={'input-label'}>Store number</span>
                                    </Col>
                                    <Col sm={12} md={8}>
                                        <FormInput className="input-field"/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={4}>
                                        <span className={'input-label'}>Servicing DC</span>
                                    </Col>
                                    <Col sm={12} md={8}>
                                        <FormInput className="input-field"/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={4}>
                                        <span className={'input-label'}>Store Name</span>
                                    </Col>
                                    <Col sm={12} md={8}>
                                        <FormInput className="input-field"/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={4}>
                                        <span className={'input-label'}>Store address</span>
                                    </Col>
                                    <Col sm={12} md={8}>
                                        <FormInput className="input-field"/>
                                    </Col>
                                </Row>
                            </Container>


                            <Container className={'product-choose-form'}>
                                <Row>
                                    <Col>
                                        <div className={'heading4'}>
                                            PRODUCTS ARE YOU CURRENTLY BUYING FROM NAPA
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={6}>
                                        <FormCheckbox
                                            checked={this.state.napaNewElectrical}
                                            onChange={e => {
                                                this.setState({napaNewElectrical: !this.state.napaNewElectrical});
                                            }}
                                        >
                                            NAPA NEW Electrical
                                        </FormCheckbox>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <FormCheckbox
                                            checked={this.state.wilson}
                                            onChange={e => {
                                                this.setState({wilson: !this.state.wilson});
                                            }}
                                        >
                                            Wilson
                                        </FormCheckbox>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={6}>
                                        <FormCheckbox
                                            checked={this.state.premiumPlus}
                                            onChange={e => {
                                                this.setState({premiumPlus: !this.state.premiumPlus});
                                            }}
                                        >
                                            NAPA Power Premium Plus
                                        </FormCheckbox>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <FormCheckbox
                                            checked={this.state.premiumSteering}
                                            onChange={e => {
                                                this.setState({premiumSteering: !this.state.premiumSteering});
                                            }}
                                        >
                                            Premium NAPA Steering
                                        </FormCheckbox>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={6}>
                                        <FormCheckbox
                                            checked={this.state.powerSupport}
                                            onChange={e => {
                                                this.setState({powerSupport: !this.state.powerSupport});
                                            }}
                                        >
                                            NAPA Power Sport
                                        </FormCheckbox>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <FormCheckbox
                                            checked={this.state.newSteering}
                                            onChange={e => {
                                                this.setState({newSteering: !this.state.newSteering});
                                            }}
                                        >
                                            NAPA NEW Steering
                                        </FormCheckbox>
                                    </Col>
                                </Row>

                            </Container>



                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button block className={'play-btn'}  onClick={() => {
                            this.setState({showUserDataModel: false});
                        }}>Save Detail</Button>
                    </ModalFooter>
                </Modal>
            </LoadingOverlay>

        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps)(Dashboard);
