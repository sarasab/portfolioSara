import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {



    render() {
        return (
            <div className="card text-center bg-secondary "style={{opacity:"5" ,alignContent:"flex-end"}}>
          
            <div className="card-body">
              <h5 className="card-title" >linkedin<br/>
             github</h5>
              <p className="card-text"> contact: 0634023512<br/>
              sara.sabinm@gmail.com<br/>
              12 rue de la marre huguet 93110 rosny sous bois </p>
             
            </div> 
            
          </div>
        );
    }
}

export default Footer;