import React from 'react';
import Slider  from 'react-slick';
//require('style-loader!css-loader!sass-loader!.././css/slick.scss');
class ReactSlick extends React.Component {
    render(){
        var settings = {
            dots: true,
            autoplay:true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='container'>
                <Slider {...settings}>
                    <div><img src='http://hinhnendep.xyz/wp-content/uploads/2016/12/hinh-nen-xe-oto-dep-nhat-39.jpg' /></div>
                    <div><img src='http://hinhnendep.xyz/wp-content/uploads/2016/12/hinh-nen-xe-oto-dep-nhat-39.jpg' /></div>
                    <div><img src='http://hinhnendep.xyz/wp-content/uploads/2016/12/hinh-nen-xe-oto-dep-nhat-39.jpg' /></div>
                    <div><img src='http://hinhnendep.xyz/wp-content/uploads/2016/12/hinh-nen-xe-oto-dep-nhat-39.jpg' /></div>
                </Slider>
            </div>
        )
    }
}
module.exports = ReactSlick;
