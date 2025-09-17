import React, { useMemo, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);

  const selectedProject = useMemo(
    () => dataportfolio.find((project) => project.slug === selectedProjectSlug) || null,
    [selectedProjectSlug]
  );

  const handleOpen = (slug) => {
    setSelectedProjectSlug(slug);
  };

  const handleClose = () => {
    setSelectedProjectSlug(null);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data) => {
            return (
              <div key={data.slug} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a
                    href={`#${data.slug}`}
                    onClick={(event) => {
                      event.preventDefault();
                      handleOpen(data.slug);
                    }}
                  >
                    view project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          show={Boolean(selectedProject)}
          onHide={handleClose}
          size="lg"
          centered
          aria-labelledby="portfolio-project-modal-title"
        >
          {selectedProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title id="portfolio-project-modal-title">
                  {selectedProject.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="portfolio-modal-hero" style={{ backgroundImage: `url(${selectedProject.img})` }}>
                  <span className="sr-only">Project hero</span>
                </div>
                <div className="portfolio-modal-content">
                  <Row>
                    <Col md={7} className="portfolio-modal-section">
                      <h5>Overview</h5>
                      <p>{selectedProject.overview}</p>
                      <h5>Role &amp; Team</h5>
                      <p>{selectedProject.role}</p>
                      <h5>Challenges</h5>
                      <p>{selectedProject.challenges}</p>
                      <h5>Outcomes</h5>
                      <p>{selectedProject.outcomes}</p>
                    </Col>
                    <Col md={5} className="portfolio-modal-section">
                      <h5>Tech Stack</h5>
                      <ul className="portfolio-modal-stack">
                        {selectedProject.stack?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {selectedProject.link && selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    View live project
                  </a>
                )}
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </HelmetProvider>
  );
};
