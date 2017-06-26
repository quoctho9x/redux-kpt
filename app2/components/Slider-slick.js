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
                    <div><img src='https://static.danhgiaxe.com/data/201525/8-peugeot-rcz-while-most-americans-may-be-unfamiliar-with-this-french-sports-coupe-the-rcz-has-been-racking-up-the-awards-since-its-debut-in-2009-including-top-gears-2010-coupe-of-the-year_2440.jpg' /></div>
                    <div><img src='https://static.danhgiaxe.com/data/201525/designed-in-house-at-ferrari-laferrari-is-a-bold-melange-of-classic-elements-from-maranellos-supercars-of-yore-its-lines-are-sleek-evocative-of-a-space-ship-yielding-the-ultimate-ferrari-hypercar_7007.jpg' /></div>
                    <div><img src='http://hinhnendep.xyz/wp-content/uploads/2016/12/hinh-nen-xe-oto-dep-nhat-39.jpg' /></div>
                    <div><img src='http://images.tapchianhdep.net/15-10bo-suu-tap-hinh-anh-xe-o-to-hang-sang2.jpg' /></div>
                </Slider>
            </div>
        )
    }
}
module.exports = ReactSlick;
