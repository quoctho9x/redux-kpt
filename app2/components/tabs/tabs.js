import React from 'react';
import { Tabs, Tab} from 'react-bootstrap';

export default class TabsInstance extends React.Component{
    render(){
        return (
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Description">{this.props.description}</Tab>
                <Tab eventKey={2} title="Reviews">
                    <h4>Reviews</h4>
                    <p className="comment-form-author">
                        <label htmlFor="author">Name <span className="required">*</span></label>
                        <input  name="author" type="text"  size="30" aria-required="true"/>
                    </p>
                    <p className="comment-form-email">
                        <label htmlFor="author">Email <span className="required">*</span></label>
                        <input name="author" type="text"  size="30" aria-required="true"/>
                    </p>
                    <div>
                        <span>your review</span> <Rating/>
                        <input name="author" type="text"  size="30" aria-required="true"/>
                    </div>

                    <p className="form-submit">
                        <input className="submit" type="submit" id="submit" value="Submit"/>
                    </p>
                </Tab>
            </Tabs>
        )
    }
}

class Rating extends React.Component{
    render(){
        return(
            <div>
                <fieldset className="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"/>
                    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"/>
                    <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"/>
                    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"/>
                    <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"/>
                    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"/>
                    <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"/>
                    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"/>
                    <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"/>
                    <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"/>
                </fieldset>
            </div>
        )
    }
}
//export  {TabsInstance};