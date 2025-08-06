import { Link } from "react-router-dom";

interface InternalLinksProps {
  context: "services" | "locations" | "footer";
  className?: string;
}

export function InternalLinks({ context, className = "" }: InternalLinksProps) {
  const serviceLinks = [
    { to: "/services/residential-roofing", text: "residential roofing services" },
    { to: "/services/commercial-roofing", text: "commercial roofing" },
    { to: "/services/emergency-repairs", text: "emergency roof repairs" },
    { to: "/services/roof-maintenance", text: "roof maintenance" },
    { to: "/services/insurance-claims", text: "insurance claim assistance" },
    { to: "/services/gutters-exterior", text: "gutter installation" }
  ];

  const locationLinks = [
    { to: "/wills-point-roofing", text: "Wills Point roofing" },
    { to: "/terrell-roofing", text: "Terrell roofing contractor" },
    { to: "/forney-roofing", text: "Forney roofer" }
  ];

  if (context === "services") {
    return (
      <div className={className}>
        <p className="text-gray-600 mb-4">
          Our comprehensive <Link to="/services/residential-roofing" className="text-primary hover:underline">residential roofing services</Link> include 
          everything from <Link to="/services/emergency-repairs" className="text-primary hover:underline">emergency storm repairs</Link> to 
          complete roof replacements in <Link to="/wills-point-roofing" className="text-primary hover:underline">Wills Point</Link>, 
          <Link to="/terrell-roofing" className="text-primary hover:underline"> Terrell</Link>, and 
          <Link to="/forney-roofing" className="text-primary hover:underline"> Forney</Link>.
        </p>
      </div>
    );
  }

  if (context === "locations") {
    return (
      <div className={className}>
        <h4 className="font-semibold mb-3">Service Areas</h4>
        <div className="space-y-2">
          {locationLinks.map((link) => (
            <div key={link.to}>
              <Link to={link.to} className="text-gray-600 hover:text-primary transition-colors">
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (context === "footer") {
    return (
      <div className={className}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3 text-white">Our Services</h4>
            <div className="space-y-2">
              {serviceLinks.map((link) => (
                <div key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Service Areas</h4>
            <div className="space-y-2">
              {locationLinks.map((link) => (
                <div key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
