import React from "react";
import "../styles/Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="email">
        <a href="mailto:Kamil.Sulecki00@gmail.com">
          <i class="fas fa-at" /> Kamil.Sulecki00@gmail.com
        </a>
      </div>
      <div className="facebook">
        <a href="https://www.facebook.com/profile.php?id=100004428977533">
          <i class="fab fa-facebook-f" /> Mój Facebook
        </a>
      </div>
      <div className="linkedin">
        <a href="https://pl.linkedin.com/">
          <i class="fab fa-linkedin" /> Mój LinkedIn(uzupełnij)
        </a>
      </div>
      <div className="git">
        <a href="https://github.com/hydraChaosu">
          <i class="fab fa-github" /> Mój Github
        </a>
      </div>
    </div>
  );
};

export default Contact;
