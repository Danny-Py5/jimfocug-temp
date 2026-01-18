import { Footer } from "../components/Footer";
import "../components/styles/about.css";

export default function About() {
  return (
    <section className="section about ">
      <div className="section-wrapper section-wrapper-padding">
        <h2>About Us</h2>
        <p
          style={{
            margin: "0 auto var(--margin-xl) auto",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          We are passionate about Improvement
        </p>

        <div className="content padding">
          <div className="info">
            <figure>
              <img
                src="/JIMFOCUG_BRANDING/General_Asset/about-img.png"
                width={300}
                alt="about the CEO of Jimfocug"
              />
            </figure>
            <p>
              We are a team of experts with a wealth of experience in the
              implementation of three management systems: Quality management
              system (ISO 9001:2015), environmental management system (ISO
              14001:2015), and occupational health and safety management system
              (ISO 45001:2018). Our team is well-equipped to help you implement
              these systems in your organization, ensuring that you meet the
              relevant standards and regulations. We understand that every
              business is unique, and we will work with you to tailor our
              solutions to your specific needs.
            </p>

            <p>
              In addition to our expertise in management systems, we are also
              proficient in building functional business applications using
              low-code/ no-code application development platforms such as
              PowerApps and AppSheet. These platforms can run on your existing
              Office 365 or Google licenses, making it easy for you to get
              started. Our team of experts will work with you to design and
              develop custom applications that meet your specific business
              needs. With our cutting-edge technology, you can automate
              repetitive tasks and focus on what really matters - growing your
              business.
            </p>

            <p>
              Finally, we have lean and agile experts who will assist you in
              implementing lean and agile methodologies to eliminate waste in
              your business and improve productivity. Lean methodology focuses
              on eliminating waste, managing processes, and delivering value.
              Agile methodology, on the other hand, focuses on users, managing
              uncertainty, and delivering working software. Our experts will
              work with you to determine which methodology is best suited for
              your business needs and help you implement it effectively. With
              our help, you can streamline your business processes, reduce
              costs, and increase efficiency.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
