// Безпечна серіалізація JSON-LD для вставки у <script type="application/ld+json">:
// екрануємо "<", щоб рядкові значення не могли передчасно закрити тег script.
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
