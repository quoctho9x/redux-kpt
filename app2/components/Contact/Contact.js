import React from 'react';
import {hashHistory, browserHistory, IndexLink} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from 'react-redux';
import axios from 'axios';
import * as Actions from '../../redux/action/indexAction'
var initialCenter = { lng: 106.591619, lat: 10.711165 };
class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4 className="title-header">Contact</h4>
                <div className="row columns large-12 medium-12 small-12 show-map">
                    <GMap initialCenter={initialCenter}/>
                </div>
                <div className="row">
                    <div className="small-12 medium-12 large-5 columns">
                        <img className="image-contact" alt="show room" src="http://xyz.com.vn/wp-content/uploads/2015/05/151.jpg"/>
                    </div>
                    <div className="small-12 medium-6 large-3 columns">
                        <div className="contact">
                            <div className="contact-name"><h3> About My Company</h3></div>
                            <div className="contact-address"><p>Address: Tan Kien, Binh Chanh, TP. Hồ Chí Minh Việt Nam</p></div>
                            <div className="contact-contact">
                                <div className="contact-mail"><i className="fa fa-envelope" aria-hidden="true"/> <a href="#"> quoctho9x@gmail.com</a></div>
                                <div className="contact-mail"><i className="fa fa-phone-square" aria-hidden="true"/> <a href="#"> 08 000000000</a></div>
                                <div className="contact-mail"><i className="fa fa-skype" aria-hidden="true"/> <a href="#">quoctho@live.com</a></div>
                            </div>
                            <div className="contact-time">
                                <h5>Opening hours:</h5>
                                <div className="contact-time-mo"><p><span>Monday: </span>08:00 - 22:00</p></div>
                                <div className="contact-time-mo"><p><span>Tuesday: </span>08:00 - 22:00</p></div>
                                <div className="contact-time-mo"><p><span>Wednesday: </span>08:00 - 22:00</p></div>
                                <div className="contact-time-mo"><p><span>Thursday: </span>08:00 - 22:00</p></div>
                                <div className="contact-time-mo"><p><span>Friday: </span>08:00 - 22:00</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="small-12 medium-6 large-4 columns">
                        <div className="contact-form">
                            <label >Name (*)</label> <input type="text" placeholder="Name"/>
                            <label >Phone (*)</label> <input type="tel" placeholder="Phone"/>
                            <label >Title (*)</label> <input type="text" placeholder="Title"/>
                            <label >Content (*)</label> <textarea type="text" placeholder="Content"/>
                            <input type="submit" className="button alert" value='Send'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class GMap extends React.Component {
    state = { zoom: 16 };

    static propTypes() {
        initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
    }

    render() {
        return <div className="GMap">
            <div className='UpdatedText'>
                <p>Current Zoom: { this.state.zoom }</p>
            </div>
            <div className='GMap-canvas' ref="mapCanvas">
            </div>
        </div>
    }

    componentDidMount() {
        // create the map, marker and infoWindow after the component has
        // been rendered because we need to manipulate the DOM for Google =(
        this.map = this.createMap();
        this.marker = this.createMarker();
        this.infoWindow = this.createInfoWindow();

        // have to define google maps event listeners here too
        // because we can't add listeners on the map until its created
        google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
    }

    // clean up event listeners when component unmounts
    componentDidUnMount() {
        google.maps.event.clearListeners(map, 'zoom_changed')
    }

    createMap() {
        let mapOptions = {
            zoom: this.state.zoom,
            center: this.mapCenter()
        };
        return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter() {
        return new google.maps.LatLng(
            this.props.initialCenter.lat,
            this.props.initialCenter.lng
        )
    }

    createMarker() {
        return new google.maps.Marker({
            position: this.mapCenter(),
            map: this.map
        })
    }

    createInfoWindow() {
        let contentString = "<div class='InfoWindow'>Tan kien, Binh chanh, Tp.hcm</div>";
        return new google.maps.InfoWindow({
            map: this.map,
            anchor: this.marker,
            content: contentString
        })
    }

    handleZoomChange() {
        this.setState({
            zoom: this.map.getZoom()
        })
    }
}




module.exports = Contact;
