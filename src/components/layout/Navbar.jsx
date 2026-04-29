import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/coinbaseLogoNavigation-4.svg";
import companyUpsell from "../../assets/company_upsell.png";
import developersUpsell from "../../assets/developers_upsell_cdxv2_2.jpg";
import institutionsUpsell from "../../assets/institutions_upsell.png";
import onchainPaymentProtocol from "../../assets/onchain_payment_protocol.png";
import navigationUpsell from "../../assets/navigation-upsell.png";
import { topNavLinks } from "../../data/homeData";

const developersLinks = [
  {
    col: 1,
    heading: "Platform",
    items: [
      { label: "Payments", desc: "Accept crypto payments globally", to: "/" },
      { label: "Trading", desc: "Programmatic trading APIs", to: "/" },
      { label: "Wallets", desc: "Embedded wallet infrastructure", to: "/" },
      { label: "Stablecoins", desc: "USDC and onchain money movement", to: "/" },
    ],
  },
  {
    col: 2,
    heading: "Solutions",
    items: [
      { label: "Banks & Brokerages", desc: "Crypto for financial institutions", to: "/" },
      { label: "Payment Firms", desc: "Stablecoin rails for payments", to: "/" },
      { label: "Startups", desc: "Build your next big idea", to: "/" },
    ],
  },
];

const companyLinks = [
  {
    col: 1,
    items: [
      { label: "About", desc: "Powering the crypto economy", to: "/learn" },
      { label: "Affiliates", desc: "Help introduce the world to crypto", to: "/" },
      { label: "Blog", desc: "Read the latest from Crypto App", to: "/" },
    ],
  },
  {
    col: 2,
    items: [
      { label: "Careers", desc: "Work with us", to: "/" },
      { label: "Support", desc: "Find answers", to: "/" },
      { label: "Security", desc: "The most trusted & secure", to: "/" },
    ],
  },
];

const institutionsLinks = [
  {
    col: 1,
    heading: "Prime",
    items: [
      { label: "Trading and Financing", desc: "Professional prime brokerage services", to: "/" },
      { label: "Custody", desc: "Securely store all your digital assets", to: "/" },
      { label: "Staking", desc: "Explore staking across our products", to: "/" },
      { label: "Onchain Wallet", desc: "Institutional-grade wallet to get onchain", to: "/" },
    ],
  },
  {
    col: 2,
    heading: "Markets",
    items: [
      { label: "Exchange", desc: "Spot markets for high-frequency trading", to: "/" },
      { label: "International Exchange", desc: "Access perpetual futures markets", to: "/" },
      { label: "Derivatives Exchange", desc: "Trade an accessible futures market", to: "/" },
      { label: "Verified Pools", desc: "Transparent, verified liquidity pools", to: "/" },
    ],
  },
];

const institutionsIcons = {
  "Trading and Financing": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  "Custody": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 4.4-3.4 8.5-8 10C7.4 20.5 4 16.4 4 12V6l8-4z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
  "Staking": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <circle cx="9" cy="9" r="2" />
      <circle cx="15" cy="15" r="2" />
      <path d="M7 17L17 7" />
    </svg>
  ),
  "Onchain Wallet": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="3" height="3" rx="0.5" />
      <rect x="18" y="14" width="3" height="3" rx="0.5" />
      <rect x="14" y="18" width="3" height="3" rx="0.5" />
      <rect x="18" y="18" width="3" height="3" rx="0.5" />
    </svg>
  ),
  "Exchange": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 16V4m0 0L4 7m3-3l3 3" />
      <path d="M17 8v12m0 0l3-3m-3 3l-3-3" />
    </svg>
  ),
  "International Exchange": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9" />
    </svg>
  ),
  "Derivatives Exchange": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="4" rx="1" />
      <rect x="2" y="13" width="20" height="4" rx="1" />
      <path d="M6 7V5M10 7V5M14 7V5M18 7V5" />
    </svg>
  ),
  "Verified Pools": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
};

const businessLinks = [
  {
    col: 1,
    items: [
      { label: "Business", desc: "Crypto trading and payments for startups and SMBs", to: "/" },
      { label: "Asset Listings", desc: "List your asset on Crypto App", to: "/" },
    ],
  },
  {
    col: 2,
    items: [
      { label: "Payments", desc: "The stablecoin payments stack for commerce platforms", to: "/" },
      { label: "Token Manager", desc: "The platform for token distributions, vesting, and lockups", to: "/" },
    ],
  },
];

const businessIcons = {
  "Business": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  "Asset Listings": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <circle cx="8" cy="16" r="2.5" />
      <circle cx="16" cy="16" r="2.5" />
    </svg>
  ),
  "Payments": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </svg>
  ),
  "Token Manager": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      <path d="M21 3v4h-4" />
    </svg>
  ),
};

const individualsLinks = [
  {
    col: 1,
    items: [
      { label: "Buy and sell", desc: "Buy, sell, and use crypto", to: "/" },
      { label: "Base App", desc: "Post, earn, trade, and chat, all in one place", to: "/" },
      { label: "Crypto App One", desc: "Get zero trading fees and more", to: "/" },
      { label: "Private Client", desc: "For trusts, family offices, UHNWIs", to: "/" },
      { label: "Onchain", desc: "Dive into the world of onchain apps", to: "/" },
    ],
  },
  {
    col: 2,
    items: [
      { label: "Advanced", desc: "Professional-grade trading tools", to: "/advanced" },
      { label: "Earn", desc: "Stake your crypto and earn rewards", to: "/" },
      { label: "Crypto App Wealth", desc: "Institutional-grade services for UHNW", to: "/" },
      { label: "Credit Card", desc: "Earn up to 4% bitcoin back", to: "/" },
      { label: "Debit Card", desc: "Spend crypto, get crypto back", to: "/" },
    ],
  },
];

const individualsIcons = {
  "Buy and sell": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  "Base App": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </svg>
  ),
  "Crypto App One": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  ),
  "Private Client": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.8 6.2L22 9.3l-5 4.8 1.2 6.9L12 17.8l-6.2 3.2 1.2-6.9-5-4.8 7.2-1.1L12 2z" />
    </svg>
  ),
  "Onchain": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  "Advanced": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
  "Earn": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <circle cx="9" cy="9" r="2" />
      <circle cx="15" cy="15" r="2" />
      <path d="M7 17L17 7" />
    </svg>
  ),
  "Crypto App Wealth": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3l6 4 6-4" />
      <path d="M6 3v10l6 8 6-8V3" />
    </svg>
  ),
  "Credit Card": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M17 15l2-2-2-2M19 13h-4" />
    </svg>
  ),
  "Debit Card": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </svg>
  ),
};

const languageOptions = [
  { language: "English", region: "United States" },
  { language: "English", region: "United Kingdom" },
  { language: "French", region: "France" },
  { language: "Spanish", region: "Spain" },
  { language: "German", region: "Germany" },
  { language: "Italian", region: "Italy" },
  { language: "Portuguese", region: "Brazil" },
  { language: "Dutch", region: "Netherlands" },
  { language: "Japanese", region: "Japan" },
  { language: "Korean", region: "South Korea" },
  { language: "Chinese", region: "Singapore" },
  { language: "Arabic", region: "United Arab Emirates" },
];

function Navbar({ isDark = false }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [developersOpen, setDevelopersOpen] = useState(false);
  const [institutionsOpen, setInstitutionsOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [individualsOpen, setIndividualsOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);

  const mobileSubMenus = {
    Individuals: individualsLinks.flatMap((col) => col.items),
    Businesses: businessLinks.flatMap((col) => col.items),
    Institutions: institutionsLinks.flatMap((col) => col.items),
    Developers: developersLinks.flatMap((col) => col.items),
    Company: companyLinks.flatMap((col) => col.items),
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpandedItem(null);
  };

  const openCompany = () => {
    clearTimeout(closeTimerRef.current);
    setDevelopersOpen(false);
    setInstitutionsOpen(false);
    setBusinessOpen(false);
    setIndividualsOpen(false);
    setCompanyOpen(true);
  };
  const openDevelopers = () => {
    clearTimeout(closeTimerRef.current);
    setCompanyOpen(false);
    setInstitutionsOpen(false);
    setBusinessOpen(false);
    setIndividualsOpen(false);
    setDevelopersOpen(true);
  };
  const openInstitutions = () => {
    clearTimeout(closeTimerRef.current);
    setCompanyOpen(false);
    setDevelopersOpen(false);
    setBusinessOpen(false);
    setIndividualsOpen(false);
    setInstitutionsOpen(true);
  };
  const openBusiness = () => {
    clearTimeout(closeTimerRef.current);
    setCompanyOpen(false);
    setDevelopersOpen(false);
    setInstitutionsOpen(false);
    setIndividualsOpen(false);
    setBusinessOpen(true);
  };
  const openIndividuals = () => {
    clearTimeout(closeTimerRef.current);
    setCompanyOpen(false);
    setDevelopersOpen(false);
    setInstitutionsOpen(false);
    setBusinessOpen(false);
    setIndividualsOpen(true);
  };
  const scheduleClose = () => {
    closeTimerRef.current = setTimeout(() => {
      setCompanyOpen(false);
      setDevelopersOpen(false);
      setInstitutionsOpen(false);
      setBusinessOpen(false);
      setIndividualsOpen(false);
    }, 100);
  };
  const cancelClose = () => clearTimeout(closeTimerRef.current);
  const headerClass = isDark
    ? "sticky top-0 z-50 border-b border-[#1f2937] bg-[#0A0A0A]"
    : "sticky top-0 z-50 border-b border-[#e9edf3] bg-white/95 backdrop-blur";
  const navTextClass = isDark
    ? "text-0.75lg font-bold text-white rounded-full px-2 py-1 transition-colors hover:bg-[#1f2937]"
    : "text-0.75lg font-bold text-black rounded-full px-2 py-1 transition-colors hover:bg-[#F3F5F8]";
  const iconButtonClass = isDark
    ? "grid h-10 w-10 place-items-center rounded-full border border-[#334155] bg-[#111827] text-white transition-colors hover:bg-[#1f2937]"
    : "grid h-10 w-10 place-items-center rounded-full border border-[#e2e8f0] bg-gray-200 text-[#596273] transition-colors hover:bg-gray-300";
  const signInClass = isDark
    ? "hidden rounded-full border border-[#334155] bg-[#111827] px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f2937] sm:inline-flex"
    : "hidden rounded-full bg-gray-200 px-4 py-2 text-[14px] font-semibold text-[#101114] transition-colors hover:bg-gray-300 sm:inline-flex";
  const signUpClass = isDark
    ? "rounded-full bg-[#3b82f6] px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#2563eb] sm:px-5"
    : "rounded-full bg-[#1652f0] px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#0c46df] sm:px-5";
  const searchInputClass = isDark
    ? "h-10 w-full rounded-full border border-[#3b82f6] bg-[#0b1220] px-4 text-[14px] text-white shadow-[0_4px_14px_rgba(59,130,246,0.25)] outline-none"
    : "h-10 w-full rounded-full border border-[#1652f0] bg-white px-4 text-[14px] text-[#111827] shadow-[0_4px_14px_rgba(22,82,240,0.25)] outline-none";

  return (
    <>
    <header className={`${headerClass} relative`}>
      <div className="mx-auto flex h-[72px] w-full max-w-[1220px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-9">
          <Link to="/" aria-label="Crypto App home" className="shrink-0">
            <img src={logo} alt="Crypto App" className="h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {topNavLinks.map((link) =>
              link.label === "Company" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openCompany}
                  onMouseLeave={scheduleClose}
                >
                  <NavLink to={link.to} className={navTextClass}>
                    {link.label}
                  </NavLink>
                </div>
              ) : link.label === "Developers" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openDevelopers}
                  onMouseLeave={scheduleClose}
                >
                  <NavLink to={link.to} className={navTextClass}>
                    {link.label}
                  </NavLink>
                </div>
              ) : link.label === "Institutions" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openInstitutions}
                  onMouseLeave={scheduleClose}
                >
                  <NavLink to={link.to} className={navTextClass}>
                    {link.label}
                  </NavLink>
                </div>
              ) : link.label === "Businesses" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openBusiness}
                  onMouseLeave={scheduleClose}
                >
                  <NavLink to={link.to} className={navTextClass}>
                    {link.label}
                  </NavLink>
                </div>
              ) : link.label === "Individuals" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openIndividuals}
                  onMouseLeave={scheduleClose}
                >
                  <NavLink to={link.to} className={navTextClass}>
                    {link.label}
                  </NavLink>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={navTextClass}
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            aria-expanded={isSearchOpen}
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className={iconButtonClass}
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>

          <div
            className={`hidden overflow-hidden transition-all duration-300 lg:block ${
              isSearchOpen ? "w-[360px] xl:w-[500px] opacity-100" : "w-0 opacity-0"
            }`}
          >
            <input
              type="search"
              placeholder="Search"
              className={searchInputClass}
            />
          </div>

          <div className="group relative hidden sm:block">
            <button
              type="button"
              aria-label="Language"
              className={iconButtonClass}
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="white" stroke="#111111" strokeWidth="1.5" />
                <path d="M7.1 8.3c.8-.8 1.8-.7 2.6-.2.5.3 1 .4 1.4.1.6-.4 1.3-.2 1.6.5.3.6 0 1.2-.4 1.7-.4.5-.4 1.1 0 1.5.4.4.9.7.9 1.4 0 .9-.7 1.5-1.5 1.5-.7 0-1.1.5-1.6.9-.7.6-1.5.9-2.4.5-.8-.3-1.2-1.1-1.1-2 .1-.9-.2-1.6-.8-2.3-.8-.9-.9-2.6.3-3.6Z" fill="#111111" />
                <path d="M15.7 8.1c.4-.3.9-.2 1.2.2.4.4.9.5 1.4.6.4.1.7.4.7.8 0 .5-.3.8-.8.9-.4.1-.8.4-1 .8-.2.4-.5.7-.9.6-.4 0-.7-.3-.8-.7-.2-.7-.6-1.3-.5-2 0-.5.3-.9.7-1.2Z" fill="#111111" />
              </svg>
            </button>

            <div className="pointer-events-none absolute right-0 top-12 z-40 w-[320px] translate-y-1 rounded-xl border border-[#e6ebf3] bg-white p-4 opacity-0 shadow-[0_18px_36px_rgba(15,23,42,0.16)] transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="text-[15px] font-semibold text-[#111827]">Language and region</h3>

              <div className="relative mt-3">
                <svg
                  viewBox="0 0 24 24"
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8b95a7]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
                <input
                  type="search"
                  placeholder="Search language"
                  className="h-10 w-full rounded-lg border border-[#d7deea] bg-white pl-10 pr-3 text-[14px] text-[#111827] outline-none focus:border-[#1652f0]"
                />
              </div>

              <ul className="mt-3 max-h-64 space-y-1 overflow-y-auto pr-1">
                {languageOptions.map((item) => (
                  <li key={`${item.language}-${item.region}`}>
                    <button
                      type="button"
                      className="w-full rounded-md px-2 py-2 text-left transition-colors hover:bg-[#f4f7fc]"
                    >
                      <span className="block text-[14px] font-medium text-[#111827]">{item.language}</span>
                      <span className="block text-[12px] text-[#6b7280]">{item.region}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to="/signin"
            className={signInClass}
          >
            Sign in
          </Link>

          <Link
            to="/signup"
            className={signUpClass}
          >
            Sign up
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => { setMobileMenuOpen((prev) => !prev); setMobileExpandedItem(null); }}
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ${
              isDark ? "text-white hover:bg-[#1f2937]" : "text-[#596273] hover:bg-[#f4f7fc]"
            }`}
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${
          isDark ? "border-[#1f2937]" : "border-[#e9edf3]"
        } ${
          isSearchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1220px] px-4 py-4 sm:px-6">
          <div className={`origin-left transition-transform duration-300 ${isSearchOpen ? "scale-x-100" : "scale-x-0"}`}>
            <input
              type="search"
              placeholder="Search"
              className={`h-10 w-[48%] rounded-full border px-4 text-[14px] shadow-[0_4px_14px_rgba(22,82,240,0.25)] outline-none ${
                isDark
                  ? "border-[#3b82f6] bg-[#0b1220] text-white"
                  : "border-[#1652f0] bg-white text-[#111827]"
              }`}
            />
          </div>
        </div>
      </div>
      {/* ── Individuals mega-menu dropdown ── */}
      <div
        className={`absolute left-0 right-0 top-full z-50 hidden border-t border-[#e9edf3] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.10)] transition-all duration-200 lg:block ${
          individualsOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex max-w-[1220px] items-start gap-10 px-4 py-7 sm:px-6 lg:px-8">
          {/* Two columns of individuals links */}
          <div className="flex flex-1 gap-8">
            {individualsLinks.map((col) => (
              <ul key={col.col} className="flex-1 space-y-1">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => setIndividualsOpen(false)}
                      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F3F5F8]"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F5F8] text-[#5B616E] transition-colors group-hover:bg-white">
                        {individualsIcons[item.label]}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[14px] font-semibold text-[#000000] transition-colors group-hover:text-[#0052FF]">
                          {item.label}
                        </span>
                        <span className="mt-0.5 text-[12px] text-[#5B616E]">
                          {item.desc}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* navigation-upsell.png feature card */}
          <div className="flex w-[300px] shrink-0 items-center gap-5">
            <img
              src={navigationUpsell}
              alt="System Update 2025"
              className="h-[160px] w-[160px] shrink-0 rounded-2xl object-cover"
            />
            <div>
              <p className="text-[20px] font-bold leading-snug text-[#000000]">
                System Update 2025
              </p>
              <p className="mt-1 text-[16px] leading-snug text-[#5B616E]">
                The next chapter of Crypto App. Live on X 12/17.
              </p>
              <Link
                to="/"
                onClick={() => setIndividualsOpen(false)}
                className="mt-3 inline-block text-[14px] font-semibold text-[#000000] underline transition-colors hover:text-[#0052FF]"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Business mega-menu dropdown ── */}
      <div
        className={`absolute left-0 right-0 top-full z-50 hidden border-t border-[#e9edf3] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.10)] transition-all duration-200 lg:block ${
          businessOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex max-w-[1220px] items-start gap-10 px-4 py-7 sm:px-6 lg:px-8">
          {/* Two columns: Business + Payments */}
          <div className="flex flex-1 gap-8">
            {businessLinks.map((col) => (
              <ul key={col.col} className="flex-1 space-y-1">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => setBusinessOpen(false)}
                      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F3F5F8]"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F5F8] text-[#5B616E] transition-colors group-hover:bg-white">
                        {businessIcons[item.label]}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[14px] font-semibold text-[#000000] transition-colors group-hover:text-[#0052FF]">
                          {item.label}
                        </span>
                        <span className="mt-0.5 text-[12px] text-[#5B616E]">
                          {item.desc}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* onchain_payment_protocol.png feature card */}
          <div className="flex w-[300px] shrink-0 items-center gap-5">
            <img
              src={onchainPaymentProtocol}
              alt="Commerce Payments Protocol"
              className="h-[160px] w-[160px] shrink-0 rounded-2xl object-cover"
            />
            <div>
              <p className="text-[20px] font-bold leading-snug text-[#000000]">
                Commerce Payments Protocol
              </p>
              <p className="mt-1 text-[16px] leading-snug text-[#5B616E]">
                A new standard for onchain payments.
              </p>
              <Link
                to="/"
                onClick={() => setBusinessOpen(false)}
                className="mt-3 inline-block text-[14px] font-semibold text-[#000000] underline transition-colors hover:text-[#0052FF]"
              >
                Go to Payments
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Institutions mega-menu dropdown ── */}
      <div
        className={`absolute left-0 right-0 top-full z-50 hidden border-t border-[#e9edf3] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.10)] transition-all duration-200 lg:block ${
          institutionsOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex max-w-[1220px] items-start gap-10 px-4 py-7 sm:px-6 lg:px-8">
          {/* Two columns: Prime + Markets */}
          <div className="flex flex-1 gap-8">
            {institutionsLinks.map((col) => (
              <div key={col.col} className="flex-1">
                <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-[#5B616E]">
                  {col.heading}
                </p>
                <ul className="space-y-1">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        onClick={() => setInstitutionsOpen(false)}
                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F3F5F8]"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F5F8] text-[#5B616E] transition-colors group-hover:bg-white">
                          {institutionsIcons[item.label]}
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[14px] font-semibold text-[#000000] transition-colors group-hover:text-[#0052FF]">
                            {item.label}
                          </span>
                          <span className="mt-0.5 text-[12px] text-[#5B616E]">
                            {item.desc}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* institutions_upsell.png feature card */}
          <div className="flex w-[300px] shrink-0 items-center gap-5">
            <img
              src={institutionsUpsell}
              alt="Trusted by institutions and government"
              className="h-[160px] w-[160px] shrink-0 rounded-2xl object-cover"
            />
            <div>
              <p className="text-[20px] font-bold leading-snug text-[#000000]">
                Our clients
              </p>
              <p className="mt-1 text-[16px] leading-snug text-[#5B616E]">
                Trusted by institutions and government.
              </p>
              <Link
                to="/"
                onClick={() => setInstitutionsOpen(false)}
                className="mt-3 inline-block text-[14px] font-semibold text-[#000000] underline transition-colors hover:text-[#0052FF]"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Developers mega-menu dropdown ── */}
      <div
        className={`absolute left-0 right-0 top-full z-50 hidden border-t border-[#e9edf3] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.10)] transition-all duration-200 lg:block ${
          developersOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex max-w-[1220px] items-start gap-10 px-4 py-7 sm:px-6 lg:px-8">
          {/* Two columns with headings */}
          <div className="flex flex-1 gap-8">
            {developersLinks.map((col) => (
              <div key={col.col} className="flex-1">
                <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-[#5B616E]">
                  {col.heading}
                </p>
                <ul className="space-y-1">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        onClick={() => setDevelopersOpen(false)}
                        className="group flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F3F5F8]"
                      >
                        <span className="text-[14px] font-semibold text-[#000000] transition-colors group-hover:text-[#0052FF]">
                          {item.label}
                        </span>
                        <span className="mt-0.5 text-[12px] text-[#5B616E]">
                          {item.desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* developers_upsell_cdxv2_2.jpg feature card */}
          <div className="w-[280px] shrink-0 overflow-hidden rounded-2xl border border-[#e9edf3] shadow-sm">
            <img
              src={developersUpsell}
              alt="Crypto App Developer Platform"
              className="h-auto w-full object-cover"
            />
            <div className="bg-[#F8FAFC] px-4 py-3">
              <p className="text-[13px] font-semibold text-[#000000]">
                World class crypto infrastructure
              </p>
              <p className="mt-0.5 text-[12px] text-[#5B616E]">
                Discover Crypto App&apos;s developer platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Company mega-menu dropdown ── */}
      <div
        className={`absolute left-0 right-0 top-full z-50 hidden border-t border-[#e9edf3] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.10)] transition-all duration-200 lg:block ${
          companyOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex max-w-[1220px] items-start gap-10 px-4 py-7 sm:px-6 lg:px-8">
          {/* Two columns of company links */}
          <div className="flex flex-1 gap-8">
            {companyLinks.map((col) => (
              <ul key={col.col} className="flex-1 space-y-1">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => setCompanyOpen(false)}
                      className="group flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F3F5F8]"
                    >
                      <span className="text-[14px] font-semibold text-[#000000] transition-colors group-hover:text-[#0052FF]">
                        {item.label}
                      </span>
                      <span className="mt-0.5 text-[12px] text-[#5B616E]">
                        {item.desc}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* company_upsell.png feature card */}
          <div className="w-[320px] shrink-0 overflow-hidden rounded-2xl">
            <img
              src={companyUpsell}
              alt="Crypto moves money forward"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

    </header>

    {/* ── Mobile Menu Overlay ── */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-[100] flex flex-col bg-white">
          {/* Top bar */}
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-[#e9edf3] px-4 sm:px-6">
            <Link to="/" onClick={closeMobileMenu} aria-label="Crypto App home">
              <img src={logo} alt="Crypto App" className="h-10 w-auto" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Search"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e8f0] bg-gray-200 text-[#596273] transition-colors hover:bg-gray-300"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Language"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e8f0] bg-gray-200 text-[#596273] transition-colors hover:bg-gray-300"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" fill="white" stroke="#111111" strokeWidth="1.5" />
                  <path d="M7.1 8.3c.8-.8 1.8-.7 2.6-.2.5.3 1 .4 1.4.1.6-.4 1.3-.2 1.6.5.3.6 0 1.2-.4 1.7-.4.5-.4 1.1 0 1.5.4.4.9.7.9 1.4 0 .9-.7 1.5-1.5 1.5-.7 0-1.1.5-1.6.9-.7.6-1.5.9-2.4.5-.8-.3-1.2-1.1-1.1-2 .1-.9-.2-1.6-.8-2.3-.8-.9-.9-2.6.3-3.6Z" fill="#111111" />
                  <path d="M15.7 8.1c.4-.3.9-.2 1.2.2.4.4.9.5 1.4.6.4.1.7.4.7.8 0 .5-.3.8-.8.9-.4.1-.8.4-1 .8-.2.4-.5.7-.9.6-.4 0-.7-.3-.8-.7-.2-.7-.6-1.3-.5-2 0-.5.3-.9.7-1.2Z" fill="#111111" />
                </svg>
              </button>

              <Link
                to="/signin"
                onClick={closeMobileMenu}
                className="rounded-full bg-gray-200 px-4 py-2 text-[14px] font-semibold text-[#101114] transition-colors hover:bg-gray-300"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                onClick={closeMobileMenu}
                className="rounded-full bg-[#1652f0] px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#0c46df]"
              >
                Sign up
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobileMenu}
                className="grid h-10 w-10 place-items-center rounded-full text-[#596273] transition-colors hover:bg-[#f4f7fc]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto">
            <ul>
              {topNavLinks.map((link) => {
                const hasSub = Boolean(mobileSubMenus[link.label]);
                const isExpanded = mobileExpandedItem === link.label;
                return (
                  <li key={link.label} className="border-b border-[#e9edf3]">
                    {hasSub ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setMobileExpandedItem(isExpanded ? null : link.label)}
                          className="flex w-full items-center justify-between px-5 py-5 text-[18px] font-semibold text-[#0a0b0d]"
                        >
                          {link.label}
                          <svg
                            viewBox="0 0 24 24"
                            className={`h-5 w-5 text-[#596273] transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>

                        {isExpanded && (
                          <ul className="bg-[#f7f9fc] pb-3 pt-1">
                            {mobileSubMenus[link.label].map((item) => (
                              <li key={item.label}>
                                <Link
                                  to={item.to}
                                  onClick={closeMobileMenu}
                                  className="flex flex-col px-6 py-3 transition-colors hover:bg-[#eff2f8]"
                                >
                                  <span className="text-[15px] font-semibold text-[#0a0b0d]">{item.label}</span>
                                  <span className="mt-0.5 text-[13px] text-[#5b616e]">{item.desc}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={closeMobileMenu}
                        className="flex items-center px-5 py-5 text-[18px] font-semibold text-[#0a0b0d] transition-colors hover:bg-[#f7f9fc]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
