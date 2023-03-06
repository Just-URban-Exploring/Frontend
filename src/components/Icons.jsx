import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../css/Icons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiParkBench } from "react-icons/gi";
import {MdTouchApp} from 'react-icons/md';

import {
  faBagShopping,
  faBuildingColumns,
  faCamera,
  faLeaf,
  faMugHot,
  faMusic,
  faStar,
  faToilet,
  faTree,
  faUserSecret,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-grid-system";

export function Icons() {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
      <button className={styles.btnprimary} id="home" onClick={() => navigate("/")}>Home</button>
      </div>
      <Container fluid className={styles.iconsInfo}>
        <Row debug style={{background:'none'}}>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle1}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon
                    icon={faBuildingColumns}
                  
                    inverse
                    className="svg-inline--fa"
                  />
                </div>
              </div>
              <p className={styles.iconsTitle}>Museum</p>
            </div>
          </Col>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle2}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faStar} inverse />
                </div>
              </div>
                  <p className={styles.iconsTitle}>Sehenswert</p>
            </div>
          </Col>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle3}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faCamera} inverse />
                </div>
              </div>
                  <p className={styles.iconsTitle}>Best View</p>
            </div>
          </Col>
        </Row>
        <Row debug style={{background:'none'}}>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle4}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faMugHot} inverse />
                </div>
              </div>
                  <p className={styles.iconsTitle}>Café</p>
            </div>
          </Col>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle5}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faUtensils} inverse />
                </div>
              </div>
                  <p className={styles.iconsTitle}>Essen</p>
            </div>
          </Col>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle6}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faToilet} inverse />
                </div>
              </div>
                  <p className={styles.iconsTitle}>WC</p>
            </div>
          </Col>
        </Row>
        <Row debug style={{background:'none'}}>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle7}>
                <div className={styles.iconPosition}>
                    <GiParkBench />
                </div>
              </div>
                  <p className={styles.iconsTitle}>Park</p>
            </div>
          </Col>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle8}>
                <div className={styles.iconPosition}>
                    <MdTouchApp />
                </div>
              </div>
                    <p className={styles.iconsTitle}>Interaktion</p>
            </div>
          </Col>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle9}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faMusic} inverse />
                </div>
              </div>
                  <p className={styles.iconsTitle}>Kunst</p>
            </div>
          </Col>
        </Row>
        <Row debug style={{background:'none'}}>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle10}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faBagShopping} inverse />
                </div>
              </div>
                  <p className={styles.iconsTitle}>Einkaufszentrum</p>
            </div>
          </Col>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle11}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faLeaf} inverse />
                </div>
              </div>
                  <p className={styles.iconsTitle}>Natur</p>
            </div>
          </Col>
          <Col debug style={{outline: 'none', background:'none'}}>
            <div className={styles.card}>
              <div className={styles.circle12}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faUserSecret} />
                </div>
              </div>
                  <p className={styles.iconsTitle}>Geheimtipp</p>
            </div>
          </Col>
        </Row>
        <Col>
          <button className={styles.okBtn} onClick={() => navigate('/map')}>Ok</button>
        </Col>
      </Container>
      
    </div>
  );
}
