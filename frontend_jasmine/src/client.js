import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "n3jd8byz",
  dataset: "production",
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: "2023-03-07",
  token:
    "skoRfQKBpQx9l8PSSVHxtT98BQ0jseJSaK1R0qqEA1S8pYdhdKqcdDvz4GZGWhR9DOQRQPAGGQMKqFJLynZu4YqJ3JAT8toqw6NzMUbGYutQ7H5akmFhS8NdJzao6CcXdAup7HNYgDQZ1lvpTVNgJLVfrwt3caxObGO5lcrY1XorN0zd3YFG",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
