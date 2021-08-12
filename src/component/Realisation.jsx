import React, { Component } from 'react';


class Realisation extends Component {

  

    render() {
        return (
           

<div className="card bg-secondary" style={{width: "18rem",boxShadow: "-1px 2px 5px 1px rgba(0, 0, 0, 0.7)"}}>
 
  <div className="card-body" style={{paddingTop:"20px",margingTop:"15px"}}>
  <img src= {this.props.image} className="card-img-top" style={{ maxWidth: "540px", maxHeight: "440px" }} alt="..." />
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>






    
        );
    }
}

export default Realisation;