import Image from "./Image";
import myImage from "../image/Joseph.jpg";
const About = () => {
  return (
    <div className="detail-card">
      <Image src={myImage} />
      <div className="text-container">
        <h3>Joseph (DucTran) - email: dt67@uw.edu</h3>
        <ul>
          <li className="content">Graduated from the University of Science with a Bachelor's Degree in computer science major in Saigon, Vietnam in 1994</li>
          <li className="content">Self-learning and practicing HTML, CSS, JavaScript, jQuery, Python</li>
          <li className="content">Studying at the University of Washington for getting the certificate "Full Stack Development with JavaScript".</li>
          <li className="content">Building many big projects such as Hotel System Management, Accounting System, Trade Manager, Cyber Station Manager, etc. by many programming languages, including FoxPro, Visual Basic, Visual C, and database management systems, especially MS SQL Server, MySQL for over twenty years.</li>
          <li className="content">Seeking a new job as a web developer.</li>
        </ul>
      </div>
    </div>
  )
}

export default About
