// Business details used across the site.
// TODO: replace the placeholder contact details before going live.
export const site = {
  name: "Nixora",
  tagline: "Intelligent Living. Connected Spaces. Smarter Future.",
  description:
    "Nixora is an IoT and intelligent-technology company building connected environments for homes, businesses, and infrastructure in Nigeria.",
  url: "https://nixora.example",
  location: "Owerri, Nigeria",
  email: "hello@nixora.example",
  phoneDisplay: "+234 814 172 1854",
  whatsappNumber: "2348141721854", // international format, digits only
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],
};

export const nav = [
  { href: "/smart-home", label: "Smart Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/technology", label: "Technology" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
