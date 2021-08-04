import './App.css';
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer"
import Experiences from "./component/Experiences"
import { ThemeContext, themes } from './component/Theme';
import GithubCorner from 'react-github-corner';
import Card from 'react-bootstrap/Card'
import TextAnimation from "react-animate-text";
import Animation from './component/Animation';




class App extends React.Component {
  constructor() {
    super()
    this.state = { theme: themes.light }
  }


  onClick = function () {

    this.setState({ theme: this.state.theme === themes.light ? themes.dark : themes.light })
  }.bind(this)

 

 

  render() {
    return (
  


      <ThemeContext.Provider value={this.state.theme}>
       
        <BrowserRouter>
          <header>
            <GithubCorner href="https://github.com/sarasab?tab=repositories" />


          </header>

          
          <div style={{ height: "100%", backgroundImage: `url(${require("./component/Image6.jpg").default})` }}>
            <nav style={{ height: "10vh" }} >

              <ul>
                <li ><Link className="text-white" to="/">Home</Link></li>
                <li><Link className="text-white" to="/about">About</Link></li>
                <li><Link className="text-white" to="/contact">Contact</Link></li>
              </ul>
            </nav>


            <Card className="bg-dark text-white"style={{flexDirection:"row",padding:"10px", marging:"10px"}} >
              <Card.Img style={{ width: '18rem' }} src="/image/Sara.jpg" alt="Card image" />
             
              <Card.Body >
                <TextAnimation >
                <Card.Title >Sara SABIN</Card.Title>
                <Card.Text>
                Développeuse Web et
                Web Mobile junior 
                </Card.Text>
                </TextAnimation>
                <Card.Text >Actuellement en reconversion  professionnelle en Développement Web et  Web Mobile Full stack Junior ,
                   je souhaite  accroitre mes compétences ainsi que mes  connaissances à travers un stage à partir  du 8 septembre pour une durée de 4 à 6mois.
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Switch >
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />

            </Switch>
            

            <button onClick={this.onClick}>Toggle</button>
            <p style={{ color: this.state.theme.color }}>blhzjkdqgefghj</p>


            <div style={{ height: "70vh" }}>
            </div>

            <span >
              <Experiences image='/image/image6.jpg' />
              </span>

             <div>
            <Animation/>
             </div>
 

            <Footer style={{ height: "20vh" }} />
          </div>
        </BrowserRouter>

      </ThemeContext.Provider>
    );
  }
}
export default App;
