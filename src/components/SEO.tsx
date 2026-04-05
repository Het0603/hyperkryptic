import { Helmet } from "react-helmet-async";

const BASE_URL = "https://chic-china-finds.lovable.app";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
}

const SEO = ({
  title = "HyperKryptic - Designer Interior Lights & Luxury Furniture",
  description = "Premium designer interior lights and luxury furniture imported from world-class manufacturers. Track lights, rope lights, sofas, chairs, beds, dining tables & more.",
  path = "/",
  type = "website",
}: SEOProps) => {
  const url = `${BASE_URL}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HyperKryptic",
    url: BASE_URL,
    logo: `${BASE_URL}/og-logo.png`,
    description,
    contactPoint: {
      "@type": "ContactPoint",
      email: "hetpatel.hktech@gmail.com",
      contactType: "sales",
    },
    sameAs: [],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="HyperKryptic" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="HyperKryptic" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${BASE_URL}/og-logo.png`} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="keywords" content="designer interior lights, luxury furniture, track lights, rope lights, LED lights, sofas, chairs, beds, dining tables, TV cabinets, premium furniture, imported furniture, HyperKryptic" />
      <meta name="theme-color" content="#1a1a2e" />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
