import { memo } from "react";
import "./Footer.css";
type FooterData = {
  footer: {
    company: {
      title: string;
      description: string;
    };
    project: {
      title: string;
      category: string[];
    };
    contact: {
      title: string;
      address: string;
      email: string;
      phone: string;
      phone2: string;
    };
    social: {
      title: string[];
      links: {
        link: string;
        icon: string;
      }[];
    };
  };
};
const Footer: React.FC<FooterData> = (props) => {
  return (
    <footer>
      <div className="footer_content">
        <ul>
          <h3>{props.footer.company.title}</h3>
          <li>{props.footer.company.description}</li>
        </ul>

        <ul>
          <h3>{props.footer.project.title}</h3>
          {props.footer.project.category.length !== 0
            ? props.footer.project.category.map((category,counter) => (
              <li key={counter}>{category}</li>
            ))
            : ""}
        </ul>

        <ul>
          <h3>{props.footer.contact.title}</h3>
          <li>{props.footer.contact.address}</li>
          <li>{props.footer.contact.email}</li>
          <li>{props.footer.contact.phone}</li>
          <li>{props.footer.contact.phone2}</li>
        </ul>

        <ul className="social">
          <h3>{props.footer.social.title}</h3>
          <div className="social_content">
            {props.footer.social.links.length !== 0
              ? props.footer.social.links.map((link,counter) => (
                <li key={counter}>
                  <a href={link.link}>
                    <img src={link.icon} alt="" />
                  </a>
                </li>
              ))
              : ""}
          </div>
        </ul>
        
      </div>
    </footer>
  );
};

export default memo(Footer);
