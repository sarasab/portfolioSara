import React, { Component } from 'react';
import Card from "./Card"

class Home extends Component {

    render() {
        return (

            <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "30px", marginRight: "30px" }}>
                
                <Card image='/image/image3.jpg' />
                <Card image='/image/image4.jpg' />
                <Card image='/image/image5.jpg' />

              
 
                </div>
                
            

           
        );
    }
}
{/* projet a mettre ici */ }
export default Home;