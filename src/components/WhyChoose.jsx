import "./styles/whychoose.css";

export function WhyChoose() {
  const reasons = [
    {
      title: "Technology, Process & Governance",
      description:
        "We integrate modern technology with well-defined processes and strong governance to ensure reliable, secure, and accountable solutions.",
    },

    {
      title: "Sustainability & Long-Term Value",
      description:
        "We prioritize solutions that are sustainable, scalable, and designed to create long-term value for organizations.",
    },
    {
      title: "Practical & Context-Aware Solutions",
      description:
        "Our solutions are practical, adaptable, and carefully tailored to meet both local needs and enterprise-level requirements.",
    },
    {
      title: "End-to-End Support",
      description:
        "From strategy and development to deployment and training, we provide complete support across the entire solution lifecycle.",
    },
  ];

  return (
    <section className="whychoose section">
      <div className="section-wrapper section-wrapper-padding padding">
        <h2 className="whychoose-title">
          Why Choose <span>JIMFOCUG</span>
        </h2>

        <p className="whychoose-subtitle">
          We deliver reliable solutions through experience, structure, and
          long-term thinking.
        </p>

        <div className="whychoose-container flex flex1">
          <div className="whychoose-grid">
            {reasons.map((item, index) => (
              <div key={index} className="whychoose-card">
                <figure>
                  <img src="" alt="illustrator" />
                </figure>
                <h3 className="whychoose-card-title">{item.title}</h3>
                <p className="whychoose-card-description">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="align-right">
            <figure>
              <img src="" alt="illustrator" />
            </figure>
            <h3>Real-World Application Experience</h3>
            <p>
              Our team has hands-on experience building and delivering
              applications that solve real business and operational challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
