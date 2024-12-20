import FooterCard from "../components/footerCard";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";
import address from "../assets/icons/address.svg";
import githubLogo from "../assets/icons/github.png";
import linkedinLogo from "../assets/icons/linkedin.png";
import ContactForm from "../components/contactForm";

function Footer() {
  return (
    <footer className="flex flex-col gap-5">
      <h1 className="text-3xl">
        Lets <span className="text-primary">Connect!</span>
      </h1>
      <div className="w-full flex gap-10">
        <div className="px-20 flex flex-col justify-center">
          <FooterCard img={phone} heading="Call me" content="+977 9841056800" />
          <FooterCard
            img={email}
            heading="Email me"
            content="birajbuddhacharya@gmail.com"
          />
          <FooterCard
            img={address}
            heading="Address"
            content="Tripureshwor, Kathmandu"
          />
          <div className="w-full flex justify-center p-2 gap-4 items-center my-2">
            <a href="https://www.github.com/OtakuGod0" target="blank">
              <img src={githubLogo} alt="github logo" className="h-6 w-auto" />
            </a>
            <a
              href="https://www.linkedin.com/in/biraj-buddhacharya"
              target="blank"
            >
              <img
                src={linkedinLogo}
                alt="Linked in logo"
                className="h-7 w-auto"
              />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </footer>
  );
}

export default Footer;
