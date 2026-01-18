import "./OurApproach.css";
import "./Services.css";
import { Fragment } from "react";
import IndustriesWeServe from "../components/IndustriesWeServe.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { WhyChoose } from "../components/WhyChoose.jsx";
import Contact from "../components/Contact.jsx";
import { Footer } from "../components/Footer.jsx";
import { useInView } from "../hooks/useInView.js";

function Home() {
  const { ref: whatWeDoRef, inView: whatWeDoInView } = useInView({
    threshold: 0.1,
  });
  const { ref: industriesRef, inView: industriesInView } = useInView({
    threshold: 0.1,
  });
  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({
    threshold: 0.1,
  });

  const approachItems = [
    "Problem-driven, not tool-driven",
    "Practical and scalable solutions",
    "Strong focus on user adoption",
    "Alignment with business, quality, and sustainability goals",
  ];

  const servicesData = [
    {
      title: "Digital Transformation Consulting",
      description:
        "We help organisations define and execute digital transformation strategies aligned with business objectives.",
      offerings: [
        "Digital transformation roadmap development",
        "Process mapping and optimisation",
        "Automation opportunity assessment",
        "Governance and change management support",
      ],
    },

    {
      title: "Enterprise Systems & Integration",
      description: "Support for organisations using enterprise platforms.",
      offerings: [
        "SAP process integration",
        "Microsoft 365 automation",
        "Data integration and reporting",
        "Custom extensions to existing systems",
      ],
    },
    {
      title: "Quality, ESG & Sustainability Solutions",
      description:
        "Digital and advisory support for governance, quality, and sustainability.",
      offerings: [
        "ISO 9001, ISO 14001 & ISO 45001 support",
        "Integrated Management Systems (IMS)",
        "ESG and CSRD reporting support",
        "Digital tools for audits, risk registers, and compliance tracking",
        "Double materiality assessment support",
      ],
    },

    {
      title: "Low-Code & Custom Application Development",
      description:
        "Design and development of business applications using modern platforms.",
      subsections: [
        {
          heading: "Technologies:",
          items: [
            "Microsoft Power Apps & Power Automate",
            "SharePoint & Microsoft Lists",
            "ASP.NET Web Applications",
            "Flutter Mobile Applications",
            "React Web Applications",
          ],
        },
        {
          heading: "Solutions include:",
          items: [
            "Leave and HR management systems",
            "Fleet and asset management systems",
            "Clinic and healthcare applications",
            "Service request and workflow systems",
            "Data collection and reporting tools",
          ],
        },
      ],
    },
    {
      title: "Training & Capacity Building",
      description:
        "Practical, hands-on training for individuals and organisations.",
      offerings: [
        "Power Apps for beginners and professionals",
        "ASP.NET web development",
        "Flutter mobile development",
        "Digital process automation",
        "Data and reporting with Microsoft tools",
      ],
    },
  ];

  return (
    <main>
      <section className="what-we-do flex section-wrapper-padding flex-column flex-align--center gap2 section-wrapper">
        {" "}
        <div>
          <h2>What We Do</h2>
          <p className="heading-description">
            We combine technology, process improvement, and governance best
            practices to help organisations:
          </p>
        </div>
        <div
          ref={whatWeDoRef}
          className="flex padding gap2 what-we-do__list flex-wrap"
        >
          <div className={`${whatWeDoInView ? "slideIn" : ""}`}>
            <figure>
              <img src="JIMFOCUG_BRANDING/icons/automate.png" alt="" />
            </figure>

            <p>Automate manual and inefficient processes</p>
          </div>
          <div className={`${whatWeDoInView ? "slideIn slideIn--wait1" : ""}`}>
            <figure>
              <img
                src="JIMFOCUG_BRANDING/icons/data-visibility.png"
                alt="visibility"
              />
            </figure>
            <p>Improve data visibility and reporting</p>
          </div>
          <div className={`${whatWeDoInView ? "slideIn slideIn--wait2" : ""}`}>
            <figure>
              <img
                src="JIMFOCUG_BRANDING/icons/scalable-app.png"
                alt="scalable"
              />
            </figure>
            <p>Build scalable business applications</p>
          </div>
          <div className={`${whatWeDoInView ? "slideIn slideIn--wait3" : ""}`}>
            <figure>
              <img
                src="JIMFOCUG_BRANDING/icons/sustainable-performance.png"
                alt="sustainable-performance"
              />
            </figure>
            <p>
              Strengthen compliance, quality, and sustainability performance
            </p>
          </div>
        </div>
      </section>

      <section className="our-approach section-wrapper-padding section-wrapper">
        <h2 className="our-approach__title">Our Approach</h2>
        <div className="our-approach__slider">
          <div className="our-approach__slider-track">
            {approachItems.map((item, index) => (
              <div key={`item-${index}`} className="our-approach__item">
                <img
                  src="JIMFOCUG_BRANDING/icons/checkmark.png"
                  alt=""
                  className="our-approach__icon"
                />
                <p>{item}</p>
              </div>
            ))}
            {approachItems.map((item, index) => (
              <div
                key={`duplicate-item-${index}`}
                className="our-approach__item"
              >
                <img
                  src="JIMFOCUG_BRANDING/icons/checkmark.png"
                  alt=""
                  className="our-approach__icon"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services section-wrapper-padding" id="services">
        <div className="services__container section-wrapper">
          <h2 className="services__main-title">Our Services</h2>
          <div className="services__grid">
            {servicesData.map((service, index) => (
              <div className="services__card" key={`card-${index}`}>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">
                  {service.description}
                </p>
                <div className="services__card-offerings">
                  {service.offerings && (
                    <ul>
                      {service.offerings.map((item, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.subsections &&
                    service.subsections.map((subsection, i) => (
                      <Fragment key={i}>
                        <h4>{subsection.heading}</h4>
                        <ul>
                          {subsection.items.map((item, j) => (
                            <li key={j}>
                              <i className="fas fa-chevron-right"></i>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Fragment>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        ref={industriesRef}
        className={industriesInView ? "slideIn-trigger" : ""}
      >
        <IndustriesWeServe />
      </div>
      <div
        ref={whyChooseRef}
        className={whyChooseInView ? "slideIn-trigger" : ""}
      >
        <WhyChoose />
      </div>
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default Home;
