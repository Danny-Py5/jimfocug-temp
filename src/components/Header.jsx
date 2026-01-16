import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./header.css";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > 50) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header__wrapper section-wrapper ">
        <div
          className={`child-one flex flex-between ${
            !isVisible ? "nav-hidden" : "nav-visible"
          } ${isAtTop ? "nav-transparent" : "nav-solid"}`}
        >
          <figure className="header__figure flex flex-center">
            <img
              className="header__img"
              width={50}
              height={50}
              src="JIMFOCUG_BRANDING/Logo/jimfocug logo 1.png"
              alt="jimfocug logo"
            />
          </figure>
          <nav className="header__nav">
            <ul className="header__ul">
              <li>
                <Link className="header__a" to="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="header__a" to="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="header__a" to="#services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="header__a" to="#">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className="header__a" to="#">
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
          <div className="menu-container">
            <button className="header__button">
              <input type="checkbox" id="menu-toggle" hidden />
              <label htmlFor="menu-toggle">
                <div className="header__menu-bar one"></div>
                <div className="header__menu-bar two"></div>
                <div className="header__menu-bar three"></div>
              </label>
            </button>
          </div>
        </div>

        <div className="hero child-two flex">
          <div className="right">
            <h1 className="hero__h1">What's Slowing Down Your Business?</h1>
            <p>
              Most businesses lose time, money and energy because of poor
              system. we are a digital transformation and technology solutions
              company that helps organisations streamline operations, improve
              decision-making, and achieve sustainable growth through modern
              digital tools, low-code platforms, and enterprise systems.
            </p>
          </div>
          {/* <div className="left">
            <img
              width={500}
              src="JIMFOCUG_BRANDING/General_Asset/mac.png"
              alt=""
            />
          </div> */}
          <div className="hero__overlay"></div>
        </div>
      </div>
    </header>
  );
}
