import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import "./Home.scss";
import {apiUrl} from "../../constants";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {
    FormCheckbox,
    FormInput,
    Container,
    Row,
    Col,
    Button
} from "shards-react";

class Home extends Component {
    state = {
        loading: false,
    };


    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            affiliatedWithNapaStore: false,
            anInstallerCustomer: false,

            napaNewElectrical: false,
            wilson: false,
            premiumPlus: false,
            premiumSteering: false,
            powerSupport: false,
            newSteering: false,
        });
    }

    componentWillMount() {

    }

    componentDidMount() {

    }


    render() {


        return (
            <div className="home-page-container">
                <BackgroundImage/>
                <div className="container">
                    <div className={'form-container'}>
                        <Container className={'heading-form'}>
                            <Row>
                                <Col>
                                    <div className={'heading1'}>PRE-QUALIFY FOR THE</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className={'heading2'}>BIG RACE</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4 className={'heading3'}>
                                        To begin, please answer a few simple questions:
                                    </h4>
                                </Col>
                            </Row>

                        </Container>
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
                                            this.setState({affiliatedWithNapaStore: true, anInstallerCustomer: false});
                                        }}
                                    >affiliated with a NAPA store</FormCheckbox>
                                </Col>
                                <Col sm={12} md={6}>
                                    <FormCheckbox
                                        checked={this.state.anInstallerCustomer}
                                        onChange={e => {
                                            this.setState({affiliatedWithNapaStore: false, anInstallerCustomer: true});
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
                                        WHAT PRODUCTS ARE YOU CURRENTLY BUYING FROM NAPA?
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

                        <Container className={'btn-view'}>
                            <Row>
                                <Col>
                                    <Button className={'play-btn'} pill onClick={() => {
                                        this.props.history.push("spin");
                                    }}>Let's Play! >></Button>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    const {user} = state.user;
    return {
        user
    };
}

export default connect(mapStateToProps)(Home);
