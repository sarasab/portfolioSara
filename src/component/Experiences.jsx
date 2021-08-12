import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



class Experiences extends Component {
  render() {
    return (
      <span>
        <VerticalTimeline>
          <h2>EXPERIENCES</h2>

          <VerticalTimelineElement >
            <h4>FORMATION</h4>
            <p> Formation Intensive Développeuse Web et Web
              Mobile
              Konexio/ Social Builder 2021</p>




          </VerticalTimelineElement>
          <VerticalTimelineElement >
            <h4>COMPETENCES</h4>
            <p>Evaluation et analyse des besoins</p>
            <p>Aisance relationnelle</p>
            <p>Ecoute active</p>
            <p>Esprit critique</p>
            <p>Travail d’équipe</p>
            <p>Adaptabilité</p>

          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <h4>EXPÉRIENCES PROFESSIONNELLE</h4>
            <h5>CHARGEE DE RECOUVREMENT- iQera</h5>
            <p>2019 – 2020</p>
            <p>Assurer la gestion et le suivi d'un portefeuille</p>
            <p>Analyser des documents contractuels</p>
            <p> Etudier la situation financière du débiteur afin de  proposer des solutions adaptées.
            </p>
            <h5>ARTISTE PARADE DISNEYLAND- Disneyland
              Paris
            </h5>
            <p>2010 - 2019</p>
            <p>Interpréter des personnages artistiques</p>
            <p>Exécuter des chorégraphies</p>
            <p>Veiller au bon déroulement de la parade</p>
            <p>Animation de spectacle
            </p>

          </VerticalTimelineElement>
          <VerticalTimelineElement >
            <h4> LANGUES</h4>
            <p>Français: Maternelle</p>
            <p>Arabe: Maternelle</p>
            <p>Anglais: moyen</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement >
            <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            <h4>LANGAGES et Frameworks</h4>
            <p><i className="devicon-javascript-plain colored" style={{ fontSize: "20px" }}></i>JavaScript</p>
            <p><i className="devicon-html5-plain-wordmark colored" style={{ fontSize: "20px" }}></i>HTML</p>
            <p><i className="devicon-css3-plain-wordmark colored" style={{ fontSize: "20px" }}></i>CSS</p>
            <p><i className="devicon-jquery-plain colored" style={{ fontSize: "20px" }}></i>jQuery</p>
            <p>
              <i className="devicon-react-original colored" style={{ fontSize: "20px" }}></i>
              React JS
            </p>
            <p><i className="devicon-react-original colored"style={{ fontSize: "20px" }}></i>React Native</p>
            <p> <i className="devicon-nodejs-plain colored" style={{ fontSize: "20px" }}></i>Node JS</p>
            <p><i className="devicon-bootstrap-plain colored" style={{ fontSize: "20px" }}></i>Boostrap</p>







          </VerticalTimelineElement>
        </VerticalTimeline>
      </span>
    )
  }
}
export default Experiences;