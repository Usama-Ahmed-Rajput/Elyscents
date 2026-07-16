export function StructuredData() {
  const businessData = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: 'Al Abrar Fragrances',
    url: 'https://alabrar.com',
    logo: 'https://alabrar.com/al-abrar-logo.png',
    description: 'Premium fragrances and perfumes at Al Abrar',
    sameAs: [
      'https://www.instagram.com/alabrar',
      'https://www.facebook.com/alabrar',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al Abrar Fragrances',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@alabrar.com',
    },
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Al Abrar Fragrances',
    url: 'https://alabrar.com',
    logo: 'https://alabrar.com/al-abrar-logo.png',
    description: 'Premium fragrances and perfumes',
    sameAs: [
      'https://www.instagram.com/alabrar',
      'https://www.facebook.com/alabrar',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@alabrar.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
    </>
  );
}
