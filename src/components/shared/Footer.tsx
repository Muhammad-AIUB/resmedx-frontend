import Image from "next/image";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 grid grid-cols-3 mx-auto">
      <aside>
        <Image src={logo} alt="Logo" width={150} height={150} />
      </aside>
      <nav>
        <h6 className="footer-title">Connect With Us</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/people/Resmedx-BD/61564358981965"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </a>
          <a
            href="https://x.com/resmedx"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48">
              <linearGradient id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1" x1="4.338" x2="38.984" y1="-10.056" y2="49.954" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4b4b4b"></stop><stop offset=".247" stop-color="#3e3e3e"></stop><stop offset=".686" stop-color="#2b2b2b"></stop><stop offset="1" stop-color="#252525"></stop></linearGradient><path fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
            </svg>
          </a>
        </div>
      </nav>

      <nav>
        <h6 className="footer-title">Contact With Us</h6>
        <a href="mailto:Contact@resmedx.com" className="hover:underline">
          Contact@resmedx.com
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
