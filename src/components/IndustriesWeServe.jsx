function IndustriesWeServe() {
  const industries = [
    {
      name: "Agriculture & Agro-processing",
      icon: "fa-tractor",
      img: "imgs/agriculture.avif",
    },
    {
      name: "Manufacturing",
      icon: "fa-industry",
      img: "imgs/manufacturing.jfif",
    },
    { name: "Healthcare", icon: "fa-hospital", img: "imgs/healthcare.webp" },
    {
      name: "Education & Training",
      icon: "fa-graduation-cap",
      img: "imgs/education.webp",
    },
    {
      name: "Professional Services",
      icon: "fa-briefcase",
      img: "imgs/professionalwebp.webp",
    },
    { name: "Public and Private Sector Organisations", icon: "fa-building" },
  ];

  return (
    <section className="industries-we-serve" id="industries-we-serve">
      <div className="industries-we-serve__container section-wrapper section-wrapper-padding">
        <h2 className="industries-we-serve__title">Industries We Serve</h2>
        <p className="industries-we-serve__description">
          We deliver specialized consulting and technology solutions tailored to
          the unique challenges of key sectors, driving sustainable growth and
          operational excellence.
        </p>

        <div className="industries-we-serve__grid padding">
          {industries.map((industry, index) => (
            <div className="industries-we-serve__card" key={index}>
              {/* <figure className="industries-we-serve__image-placeholder">
                <img width={200} src={industry.img} alt="" />
              </figure> */}
              <div className="industries-we-serve__content">
                <i
                  className={`industries-we-serve__icon fas ${industry.icon}`}
                ></i>
                <h3 className="industries-we-serve__card-title">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesWeServe;
