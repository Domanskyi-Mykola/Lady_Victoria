import { site } from '@/data/site';
import type { ServiceCategory } from '@/data/services';
import type { FaqItem } from '@/data/faq';

const dayMap: Record<string, string> = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
};

export function buildLocalBusinessSchema(canonicalUrl: string, logoUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: site.name,
    description: site.description,
    url: canonicalUrl,
    image: logoUrl,
    telephone: site.phoneRaw,
    priceRange: site.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: 'UA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.hoursSchema.map((entry) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: entry.days.map((d) => dayMap[d]),
      opens: entry.opens,
      closes: entry.closes,
    })),
    ...(site.instagram ? { sameAs: [site.instagram] } : {}),
  };
}

export function buildServiceSchema(category: ServiceCategory, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: category.title,
    name: `${category.title} — ${site.name}`,
    description: category.description,
    url: canonicalUrl,
    provider: {
      '@type': 'BeautySalon',
      name: site.name,
      telephone: site.phoneRaw,
    },
    areaServed: site.address.city,
    offers: category.items.map((item) => ({
      '@type': 'Offer',
      name: item.name,
      priceCurrency: site.currency,
      price: item.price.replace(/[^\d.,]/g, '').replace(',', '.') || undefined,
      availability: 'https://schema.org/InStock',
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
