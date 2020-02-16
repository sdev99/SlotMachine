import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import "./Spin.scss";
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
import $ from "jquery";

const SLOTS_PER_REEL = 12;
// radius = Math.round( ( panelWidth / 2) / Math.tan( Math.PI / SLOTS_PER_REEL ) );
// current settings give a value of 149, rounded to 150
const REEL_RADIUS = 500;

class Spin extends Component {
    state = {
        loading: false,

        affiliatedWithNapaStore: false,
        anInstallerCustomer: false,

        napaNewElectrical: false,
        wilson: false,
        premiumPlus: false,
        premiumSteering: false,
        powerSupport: false,
        newSteering: false,

        showVideo: false,
        disableSpin: false,
        screenType: 'spin',
        items: ['item1.png', 'item2.png', 'item3.png', 'item4.png', 'item5.png']
    };


    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    setUpSlots = () => {
        this.createSlots($('#ring1'));
        this.createSlots($('#ring2'));
        this.createSlots($('#ring3'));
    }


    createSlots = (ring) => {

        var slotAngle = 360 / SLOTS_PER_REEL;

        var seed = this.getSeed();
        seed = 2;

        for (var i = 0; i < SLOTS_PER_REEL; i++) {
            var slot = document.createElement('div');

            slot.className = 'slot';

            // compute and assign the transform for this slot
            var transform = 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + REEL_RADIUS + 'px)';

            slot.style.transform = transform;

            // setup the number to show inside the slots
            // the position is randomized to

            // var content = $(slot).append('<p>' + ((seed + i) % 12) + '</p>');
            var content = $(slot).append('<img src="./images/' + this.state.items[((seed + i) % 5)] + '" class="spin-item"/>');

            // add the poster to the row
            ring.append(slot);
        }
    }

    getSeed = () => {
        // generate random number smaller than 13 then floor it to settle between 0 and 12 inclusive
        return Math.floor(Math.random() * (SLOTS_PER_REEL));
    }

    spin = () => {
        this.setState({disableSpin: true});
        var timer = 2;
        var maxTimerDelay = 0;
        //var txt = 'seeds: ';
        for (var i = 1; i < 4; i++) {
            var oldSeed = -1;
            /*
            checking that the old seed from the previous iteration is not the same as the current iteration;
            if this happens then the reel will not spin at all
            */
            var oldClass = $('#ring' + i).attr('class');
            if (oldClass.length > 4) {
                oldSeed = parseInt(oldClass.slice(10));
                console.log(oldSeed);
            }
            var seed = this.getSeed();
            while (oldSeed == seed) {
                seed = this.getSeed();
            }

            var delay = timer + i * 0.5;
            $('#ring' + i)
                .css('animation', 'back-spin 1s, spin-' + seed + ' ' + (delay) + 's')
                .attr('class', 'ring spin-' + seed);
            console.log("delay" + delay);
            if (maxTimerDelay < delay) {
                maxTimerDelay = delay;
            }
        }
        setTimeout(() => {

            if (this.state.screenType == 'spinagain') {
                this.setState({disableSpin: false, showVideo: true, screenType: 'spinagainlast'});
                setTimeout(() => {
                    document.getElementById('trainingvideoview').play();
                }, 300);
            } else if (this.state.screenType == 'spinagainlast') {
                this.setState({disableSpin: false, screenType: 'finalscreen'});
                setTimeout(() => {
                    this.props.history.push("/");
                }, 5 * 1000);
            } else {
                this.setState({disableSpin: false, screenType: 'spinagain'});
            }

        }, maxTimerDelay * 1000);

    }


    render() {

        return (
            <div className="spin-page-container">
                <div className={'slot-machine-container'}>
                    {
                        (this.state.screenType == 'spin') && (
                            <img
                                onLoad={() => {
                                    this.setState({isImageLoad: true}, () => {
                                        this.setUpSlots();
                                    });
                                }}
                                className={'spin-bg-image'}
                                src={'images/spinbackground.png'}/>
                        )
                    }
                    {
                        (this.state.screenType == 'spinagain' || this.state.screenType == 'spinagainlast') && (
                            <img className={'spin-bg-image'} src={'images/spinagainbackground.png'}/>
                        )
                    }
                    {
                        (this.state.screenType == 'finalscreen') && (
                            <img className={'spin-bg-image'} src={'images/finalscreen.png'}/>
                        )
                    }

                    {
                        this.state.isImageLoad && (
                            <div id="rotate">
                                <div id="ring1" className="ring"></div>
                                <div id="ring2" className="ring"></div>
                                <div id="ring3" className="ring"></div>
                            </div>
                        )
                    }


                    {
                        !this.state.disableSpin && (
                            <div className={'spin-btn'} onClick={this.spin}></div>
                        )
                    }

                </div>

                {
                    this.state.showVideo && (
                        <div className={'video-container'}>
                            <video className={'video-view'} autoPlay id={'trainingvideoview'} onEnded={() => {
                                this.setState({showVideo: false});
                            }}>
                                <source src="videos/sample.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    )
                }

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

export default connect(mapStateToProps)(Spin);
