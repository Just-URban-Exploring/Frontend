import React from "react";
import { setConfiguration, Container, Row, Col } from "react-grid-system";

setConfiguration({ maxScreenClass: "xl" });

export default function IconsInfoPage() {
  return (
    <div>
      <Container fluid className="iconsInfo">
        <Row debug>
          <Col debug>
            <div className="card">
              <div className="circleBase circle1"></div>
            </div>
          </Col>
          <Col debug>
            <div className="card">
              <div className="circleBase circle2"></div>
            </div>
          </Col>
          <Col debug>
            <div className="card">
              <div className="circleBase circle3"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col debug>
            <div className="card">
              <div className="circleBase circle4"></div>
            </div>
          </Col>
          <Col debug>
            <div className="card">
              <div className="circleBase circle5"></div>
            </div>
          </Col>
          <Col debug>
            <div className="card">
              <div className="circleBase circle6"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col debug>
            <div className="card">
              <div className="circleBase circle7"></div>
            </div>
          </Col>
          <Col debug>
            <div className="card">
              <div className="circleBase circle8"></div>
            </div>
          </Col>
          <Col debug>
            <div className="card">
              <div className="circleBase circle9"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col debug>
            <div className="card">
              <div className="circleBase circle10"></div>
            </div>
          </Col>
          <Col debug>
            <div className="card">
              <div className="circleBase circle11"></div>
            </div>
          </Col>
          <Col debug>
            <div className="card">
              <div className="circleBase circle12"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col debug>
            <div className="card">
              <div className="circleBase circle13"></div>
            </div>
          </Col>
          <Col debug>
            <div className="card">
              <div className="circleBase circle14"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col debug>
            <button className="btn-primary ok">Ok</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
