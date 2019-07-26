"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Knowledge;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var data = {
  "Name": {
    "first": "Corey",
    "last": "McCarty"
  },
  "Contact": {
    "Phone": "(901) 832-7968",
    "Email": "Corey.D.McCarty@gmail.com",
    "Profile": "linkedin.com/in/coreydmccarty",
    "Repository": "github.com/xanderyzwich"
  },
  "Objectives": ["Write clean, scalable code", "Implement maintainable full stack solutions", "Elicit effective requirements for successful delivery", "Avoid gratuitous tooling"],
  "Education": {
    "School": "University of Memphis - Herff College of Engineering",
    "Degree": "B.S. in Computer Engineering",
    "Graduation Date": "December 2013"
  },
  "Knowledge": (_Knowledge = {
    "Languages": ["Java, Python, SQL, JavaScript, ASM, C/C++, Bash, XML, HTML/CSS"],
    "Frameworks": ["Spring Boot, Django Web/ORM"],
    "Systems": ["Windows, Red Hat Linux, Oracle Database, Cassandra/Datastax, Tomcat, Android, JMS, JMX, Soap, Rest"]
  }, _defineProperty(_Knowledge, "Systems", ["Windows, Red Hat Linux, Oracle Database, Cassandra/Datastax NoSql, Tomcat, Android, JMS, JMX, SOAP, Rest"]), _defineProperty(_Knowledge, "Tools", ["SoapUI, Eclipse, Jet Brains, Git, Subversion"]), _Knowledge),
  "Experience": {
    "Atos|Syntel": {
      "Position": "Software Engineer",
      "Dates": "September 2014 - Present",
      "Responsibilities": ["Java web service design and development", "Data design, research, and analysis", "Development of adhoc data migration tools"]
    },
    "Various": {
      "Start Date": "July 2002 - November 2014",
      "Position": "Customer Service",
      "Responsibilities": ["Server/Bartender", "Book keeping", "Automotive maintenance", "Employee Training", "Shift management"]
    }
  },
  "Projects": {
    "Control table centered XML data warehouse": {
      "Role": "Application Development",
      "Stack": "Enterprise Java, SOAP, Spring Framework, XML, Oracle DB, SQL, GoldenGate, Cassandra/Datastax, Tomcat, Bash, JMS, JMX"
    },
    "Authorization for Fraud Prevention": {
      "Role": "Design & Development",
      "Stack": "Enterprise Java, SOAP, Weblogic, Bash"
    },
    "Custom Sensor Array and Driver": {
      "Role": "Project Management & Development",
      "Stack": "Arduino, Java"
    },
    "Simulate Electro-Magnetic Fields": {
      "Role": "Development",
      "Stack": "Python, NumPy, SciPy, MatPlotLib, GNU Octave"
    },
    "Distracted Driving Remedy": {
      "Role": "Research, Development, and Analysis",
      "Stack": "Android, Java"
    },
    "Robotics Team": {
      "Role": "Project Management",
      "Stack": "Arduino, Java, custom hardware"
    },
    "Matrix Calculator": {
      "Role": "Development",
      "Stack": "C++"
    }
  },
  "Volunteer Work": ["Code Support", "Knights of Columbus", "GiveCamp"]
};
var _default = data;
exports.default = _default;
