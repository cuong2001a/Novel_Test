import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/install_app.png';
export default function FooterComponent() {
  const aboutLinks = [
    { text: "Careers", href: "/careers" },
    { text: "Company Details", href: "/company-details" },
    { text: "Terms & Conditions", href: "/terms" },
    { text: "Help center", href: "/help" },
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Affiliate", href: "/affiliate" }
  ];

  const productLinks = [
    { text: "NFT Marketplace", href: "/marketplace" },
    { text: "Singshot", href: "/singshot" },
    { text: "Swaps", href: "/swaps" },
    { text: "NFT Launchpad", href: "/launchpad" },
    { text: "Runes Platform", href: "/runes" },
    { text: "Creator Dashboard", href: "/creator" }
  ];

  const resourceLinks = [
    { text: "Support", href: "/support" },
    { text: "API", href: "/api" },
    { text: "Feature Requests", href: "/feature-requests" },
    { text: "Trust & Safety", href: "/trust" },
    { text: "Sitemap", href: "/sitemap" }
  ];

  const contactInfo = [
    { text: "support@tech.email", href: "mailto:support@tech.email" },
    { text: "affiliate@tech.com", href: "mailto:affiliate@tech.com" }
  ];

  

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="container mx-auto max-w-[1128px]">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[18px] italic uppercase font-bold mb-4 text-white">ABOUT US</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[#D2D2D2] hover:text-white text-[14px]">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] italic uppercase font-bold mb-4 text-white">PRODUCTS</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[#D2D2D2] hover:text-white text-[14px]">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] italic uppercase font-bold mb-4 text-white">RESOURCES</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[#D2D2D2] hover:text-white text-[14px]">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] italic uppercase font-bold mb-4 text-white">CONTACT US</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <Link href={info.href} className="text-gray-400 hover:text-white text-sm">
                    {info.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={'#'}>
                <Image src={logo} alt=''/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}