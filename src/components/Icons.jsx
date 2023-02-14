import React from "react";
import styles from "../css/Icons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiParkBench } from "react-icons/gi";
import { IconContext } from "react-icons";
import { GrPauseFill } from "react-icons/gi";

import {
  faBagShopping,
  faBuildingColumns,
  faBus,
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
import { setConfiguration, Container, Row, Col } from "react-grid-system";

setConfiguration({ maxScreenClass: "xl" });

export function Icons() {
  return (
    <div>
      <Container fluid className="iconsInfo">
        <Row debug>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle1}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon
                    icon={faBuildingColumns}
                    size="3x"
                    inverse
                    className="svg-inline--fa"
                  />
                </div>
              </div>
              <p className={styles.iconsTitle}>Museum</p>
            </div>
          </Col>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle2}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faStar} size="3x" inverse />
                  <p className={styles.iconsTitle}>Sehenswert</p>
                </div>
              </div>
            </div>
          </Col>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle3}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faCamera} size="3x" inverse />
                  <p className={styles.iconsTitle}>Best View</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle4}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faMugHot} size="3x" inverse />
                  <p className={styles.iconsTitle}>Café</p>
                </div>
              </div>
            </div>
          </Col>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle5}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faUtensils} size="3x" inverse />
                  <p className={styles.iconsTitle}>Essen</p>
                </div>
              </div>
            </div>
          </Col>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle6}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faToilet} size="3x" inverse />
                  <p className={styles.iconsTitle}>WC</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle7}>
                <div className={styles.iconPosition}>
                  <IconContext.Provider
                    className={styles.provider}
                    value={{
                      color: "white",
                      size: "3.6em",
                    }}
                  >
                    <GiParkBench />
                  </IconContext.Provider>
                  <p className={styles.iconsTitle}>Park</p>
                </div>
              </div>
            </div>
          </Col>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle8}>
                <div className={styles.iconPosition}>
                  <IconContext.Provider
                    className={styles.provider}
                    value={{
                      color: "white",
                      size: "3.6em",
                    }}
                  >
                    <GrPauseFill />
                  </IconContext.Provider>
                  <p className={styles.iconsTitle}>Play/Pause</p>
                </div>
              </div>
            </div>
          </Col>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle9}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faMusic} size="3x" inverse />
                  <p className={styles.iconsTitle}>Kunst</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle10}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faBagShopping} size="3x" inverse />
                  <p className={styles.iconsTitle}>Einkaufs-zentrum</p>
                </div>
              </div>
            </div>
          </Col>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle11}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faLeaf} size="3x" inverse />
                  <p className={styles.iconsTitle}>Natur</p>
                </div>
              </div>
            </div>
          </Col>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle12}>
                <div className={styles.iconPosition}>
                  <FontAwesomeIcon icon={faUserSecret} size="3x" />
                  <p className={styles.iconsTitle}>Geheimtipp</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/*         <Row>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle13}></div>
            </div>
          </Col>
          <Col debug>
            <div className={styles.card}>
              <div className={styles.circle14}></div>
            </div>
          </Col>
        </Row> */}

        <Col>
          <div className={styles.btgbutton}>Ok</div>
        </Col>
      </Container>
    </div>
  );
}
