import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Về Chúng Tôi</h4>
              <h2 className="section__title">Chào mừng bạn đến với dịch vụ của chúng tôi</h2>
              <p className="section__description">
                Hãy chọn cho mình chiếc xe phù hợp để có những phút giây thư giãn cùng gia đình với những chuyến đi xa thêm an toàn và vui vẻ, rất vui được phúc vụ quý khách hàng
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Xe được bảo dưỡng liên tục
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>  Được kiểm tra kĩ lưỡng sau mỗi lần di chuyển 
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>  Đảm bảo an toàn
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Rất nhiều loại xe cho quý khách lựa chọn
                </p>
              </div>
            </div>
          </Col>

          <Col className="lg-6 md-6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
