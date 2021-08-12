import React, { Component } from 'react';
import { ThemeContext ,themes} from './Theme';
import DarkModeToggle from "react-dark-mode-toggle";







class Footer extends React.Component {






  render() {
    console.log(this.props.theme);
    console.log(themes.light);
    console.log();
const checked= this.props.theme == themes.light
    return (

      <div id="Contact"  className="card text-center bg-secondary " style={{ opacity: "5", alignContent: "flex-end", color: this.props.theme.color }}>

        <div className="card-body">

          <DarkModeToggle   onChange={this.props.onClick}

            checked={checked}

            size={80} />

          <h5 className="card-title" >linkedin<br />
            github</h5>
          <p className="card-text"> contact: 0634023512<br />
            sara.sabinm@gmail.com<br />
            12 rue de la marre huguet 93110 rosny sous bois </p>
            <a href='cv_sara_sabin.pdf'>
  telecharger CV PDF
            </a>
        </div>

      </div>
    );
  }
}
const WrappedFooter = (intialProps) => {
  return <ThemeContext.Consumer>
    {props => {
      return <Footer {...props} {...intialProps} />
    }}
  </ThemeContext.Consumer>


}

export default WrappedFooter;
