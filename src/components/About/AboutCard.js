import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saksham Mohan </span>
            from <span className="purple"> UP, India.</span>
            <br />
            I am a Student of KIET Group of Institutions, Ghaziabad.
            <br />
            I'm pursuing my B.tech in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never loose hope!"{" "}
          </p>
          <footer className="blockquote-footer">Saksham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
