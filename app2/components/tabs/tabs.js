import React from 'react';
import { Tabs, Tab} from 'react-bootstrap';

export default class TabsInstance extends React.Component{
    render(){
        return (
            <Tabs defaultActiveKey={3} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
                <Tab eventKey={4} title="Tab 4">Tab 4 content</Tab>
                <Tab eventKey={5} title="Tab 5" disabled>Tab 5 content</Tab>
            </Tabs>
        )
    }
}
//export  {TabsInstance};