import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Trang Trủ",
  },
  {
    path: "/about",
    display: "Về Chúng Tôi",
  },
  {
    path: "/cars",
    display: "Danh Sách Xe",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Liên Hệ",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Liên Hệ</span>
                <span className="header__top__help">
                  <i classN="ri-phone-fill"></i> 0332.795.405
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i classN="ri-login-circle-line"></i> Đăng Kí
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i classN="ri-user-line"></i> Đăng Nhập
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i classN="ri-car-line"></i>
                    <span>
                      Dịch vụ <br /> Thuê xe
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i classN="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Hai Bà Trưng</h4>
                  <h6>12, Hai Bà Trưng, Minh Khai, Hà Nội</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i classN="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Thời Gian Mở Cửa</h4>
                  <h6>8h - 20h</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i classN="ri-phone-line"></i> Yêu Cầu Cuộc Gọi
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i classN="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i classN="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
