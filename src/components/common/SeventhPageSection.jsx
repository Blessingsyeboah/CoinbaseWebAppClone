import coinbaseLogo from "../../assets/coinbase_logo@2x.png";
import poweredByLogo from "../../assets/powered_by_logo.svg";
import instagramIcon from "../../assets/instagram-light.svg";
import xIcon from "../../assets/x-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import tiktokIcon from "../../assets/tiktok-light.svg";

const productLinks = ["Buy", "Sell", "Advanced Trade", "Wallet", "Card"];
const learnLinks = ["What is crypto?", "Market updates", "Bitcoin guide", "Ethereum guide", "Security tips"];
const companyLinks = ["About", "Careers", "Affiliates", "Blog", "Support"];

function SeventhPageSection() {
  return (
    <footer className="bg-[#0b1018] px-5 py-14 text-white sm:px-7 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-8">
          <div>
              <img src={coinbaseLogo} alt="Crypto App" className="h-8 w-auto" />
            <p className="mt-5 max-w-[360px] text-[15px] leading-[1.65] text-[#c5cfdd]">
              Join millions of people using Crypto App to discover, buy, and manage crypto with confidence.
            </p>
            <img src={poweredByLogo} alt="Powered by Crypto App" className="mt-6 h-6 w-auto" />

            <div className="mt-7 flex items-center gap-3">
              {[instagramIcon, xIcon, linkedinIcon, tiktokIcon].map((icon, index) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={`Social link ${index + 1}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[#2b3442] bg-[#131a25] transition-colors hover:bg-[#1a2433]"
                >
                  <img src={icon} alt="" className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#9fadc0]">Product</h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-[#e6ebf5] transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#9fadc0]">Learn</h3>
            <ul className="mt-4 space-y-3">
              {learnLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-[#e6ebf5] transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#9fadc0]">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-[#e6ebf5] transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#273140] pt-6 text-[13px] text-[#9fadc0]">
          <p>© 2026 Crypto App clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default SeventhPageSection;
