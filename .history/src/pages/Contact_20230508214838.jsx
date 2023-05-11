import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line ",
  },
  {
    url: "#",
    icon: "ri-instagram-line ",
  },
  {
    url: "#",
    icon: "ri-linkedin-line ",
  },
  {
    url: "#",
    icon: "ri-twitter-line ",
  },
];

const Contact = () => {
  return (
    <Helmet title="Liên Hệ">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Liên Hệ</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Nhập tên của bạn" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Nhập Email của bạn" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Nội dung"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Gửi Nội Dung
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Thông tin liên lạc</h6>
                <p className="section__description mb-0">
                  12, Hai Bà Trưng, Minh Khai, Hà Nội
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">0332.795.405</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">laquanghai1009@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Theo dõi chúng tôi</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i>
                      <i className={item.icon}></i>
                      </i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
