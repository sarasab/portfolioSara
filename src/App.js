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
import Realisation from './component/Realisation';
import Carouselle from './component/Carouselle';
import Formulaire from "./component/formulaire"





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



      <ThemeContext.Provider value={{ theme: this.state.theme }}>

        <BrowserRouter>
          <header>
            <GithubCorner href="https://github.com/sarasab?tab=repositories" />
          </header>


          <div style={{ height: "100%", backgroundImage: `url(${require("./component/Image6.jpg").default})` }}>
            <nav style={{ height: "8vh" }} >

              <ul>
                <li ><Link className="text-white" to="/">Home</Link></li>
                <li><Link className="text-white" to="/about">About</Link></li>
                <li><Link className="text-white" to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <Switch >
              <Route exact path="/" component={Home} />

              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>



            <div style={{ marginTop: "40px", margin: "30px" }} >
              <Card className="bg-dark text-white" style={{ flexDirection: "row", padding: "20px", marging: "15px", boxShadow: "-1px 2px 5px 1px rgba(0, 0, 0, 0.7)" }} >
                <Card.Img style={{ width: '15rem' }} src="/image/Sara.jpg" alt="Card image" />

                <Card.Body style={{ flexDirection: "row", paddingTop: "20px", marging: "15px", boxShadow: "-1px 2px 5px 1px rgba(0, 0, 0, 0.7)" }}>
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
            </div>

            <div style={{ padding: "20px", marging: "30px" }}>
              <Carouselle />
            </div>





            <span >
              <Experiences />
            </span>


            <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "30px", marginRight: "30px", flexDirection: "row", paddingTop: "10px" }}>
              <h2>Realisation</h2>

              <Realisation image='/image/image3.jpg' />
              <Realisation image='/image/image4.jpg' />
              <Realisation image='/image/image5.jpg' />
            </div>
            <div>
              <Animation />
            </div>

            <Footer onClick={this.onClick} style={{ color: this.state.theme.color }}/>

            
          </div>
        
         
        </BrowserRouter>


      </ThemeContext.Provider>
    );
  }
}
export default App;
