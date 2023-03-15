import React, { useState } from "react";
import { Button, Input, Textarea } from "../../../components/form";
import { Page } from "../../../components/Page";
import { ContactForm, ContactWrapper, IconButton } from "./ContactStyles";
import { validEmail} from '../../../components/utility/email';
// import { blue, green, white} from "../../utils";
// import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import IMG1 from "../../../assets/images/github-mark.png";
import IMG2 from "../../../assets/images/linkdin.png";
import IMG3 from "../../../assets/images/gmail.png";
// get our fontawesome imports
import { faHome, faLink, faPerson, faBlog  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Icons } from '../../components/utility/Icons';

export const Contact = () => {
  const [form, setFormState] = useState({ name: "", email: "", message: "" });
  // const buttonSize = 80;
  // const senderMail = <FontAwesomeIcon icon={faMailBulk} />;
  return (
    <Page header="Contact">
      <ContactWrapper>
      <section id="contact">
          <div class="direct-contact-container">

            <ul class="contact-list">

              <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Fos-Sur-Mer 13270</span></i></li>
              
              <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:+33768935511" title="Give me a call">(+33)7-68-93-55-11</a></span></i></li>
              
              <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">quentin.colettachambon@ynov.com</a></span></i></li>
              
            </ul>

            <ul class="social-media-list">
              <li><a href="https://github.com/feur25?tab=repositories" target="_blank" class="contact-icon">
                 <i><img src={IMG1}/></i>
                </a>
              </li>
              <li><a href="https://www.linkedin.com/in/quentin-coletta-361229173/" target="_blank" class="contact-icon">
                <i><img src={IMG2}/></i>
                </a>
              </li>
              <li><a href="https://gmail.com" target="_blank" class="contact-icon">
                <i><img src={IMG3}/></i>
                </a>
              </li>     
            </ul>
      </div>
      
    </section>  
        <ContactForm
          action="https://formspree.io/f/myyapddw"
          method="POST"
          name="contact"
          id="contactform"
        >
          <Input
            placeholder="Nom"
            type="text"
            name="name"
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, name: e.target.value }));
            }}
            value={form.name}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, email: e.target.value }));
            }}
            value={form.email}
          />
          <Textarea
            lines={15}
            placeholder="Si tu souhaite me contacter"
            name="message"
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, message: e.target.value }));
            }}
            value={form.message}
          />
          {/* <div className="buttons">

            <div className="socials">
              <a
                href="https://www.linkedin.com/in/teshankraut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton bg={blue}>
                  <AiFillLinkedin size={buttonSize} />
                </IconButton>
              </a>

              <a href="mailto:quentin.colettachambon@ynov.com">
                <IconButton bg={green}>
                  <AiOutlineMail size={buttonSize} />
                </IconButton>
              </a>
              <a
                href="https://github.com/feur25"
                target="_blank"
                alt="page github pour me trouver"
              >
                <IconButton bg={white}>
                {senderMail}
                </IconButton>
              </a>
            </div> */}
          <Button
            disabled={
              form.email.length <= 0 || 
              !validEmail.test(form.email) ||
              form.name.length <= 0 ||
              form.message.length <= 0 
            }
            onClick={() => {
              document.forms["contact"].submit();
            }}
          >
            Submit
          </Button>
  
          <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          {/* </div> */}
        </ContactForm>
      </ContactWrapper>
    </Page>
  );
};
