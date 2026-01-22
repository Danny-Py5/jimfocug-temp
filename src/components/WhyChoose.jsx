import "./styles/whychoose.css";

export function WhyChoose() {
  const reasons = [
    {
      title: "Technology, Process & Governance",
      description:
        "We integrate modern technology with well-defined processes and strong governance to ensure reliable, secure, and accountable solutions.",
      iconClass: "fa-solid fa-scale-balanced",
    },

    {
      title: "Sustainability & Long-Term Value",
      description:
        "We prioritize solutions that are sustainable, scalable, and designed to create long-term value for organizations.",
      iconClass: "fa-solid fa-chart-line",
    },
    {
      title: "Practical & Context-Aware Solutions",
      description:
        "Our solutions are practical, adaptable, and carefully tailored to meet both local needs and enterprise-level requirements.",
      iconClass: "fa-solid fa-lightbulb",
    },
    {
      title: "End-to-End Support",
      description:
        "From strategy and development to deployment and training, we provide complete support across the entire solution lifecycle.",
      iconClass: "fa-solid fa-headset",
    },
  ];

  return (
    <section className="whychoose section" id="why-us">
      <div className="section-wrapper section-wrapper-padding padding">
        <h2 className="whychoose-title">
          Why Choose <span>JIMFOCUG</span>
        </h2>

        <p className="whychoose-subtitle">
          We deliver reliable solutions through experience, structure, and
          long-term thinking.
        </p>

        <div className="whychoose-container flex flex1 why-choose-us__item">
          <div className="whychoose-grid">
            {reasons.map((item, index) => (
              <div key={index} className="whychoose-card">
                <figure>
                  <i class={`${item.iconClass}`}></i>
                </figure>
                <h3 className="whychoose-card-title">{item.title}</h3>
                <p className="whychoose-card-description">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="align-right">
            <figure>
              <i class="fa-solid fa-user-check"></i>
            </figure>
            <h3>Real-World Application Experience</h3>
            <p>
              We build simple and practical applications that help businesses
              solve everyday problems and work more efficiently. Our solutions
              are made to save time and improve daily operations.
            </p>
            <p>
              We focus on building tools that are easy to use and designed for
              real business needs. Each application is created to deliver real
              value and work well over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
