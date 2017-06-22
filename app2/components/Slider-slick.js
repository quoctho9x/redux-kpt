import React from 'react';
import Slider  from 'react-slick';
//require('style-loader!css-loader!sass-loader!.././css/slick.scss');
class ReactSlick extends React.Component {
    render(){
        var settings = {
            dots: true
        };
        return (
            <div className='container'>
                <Slider {...settings}>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                </Slider>
            </div>
        )
    }
}
module.exports = ReactSlick;
