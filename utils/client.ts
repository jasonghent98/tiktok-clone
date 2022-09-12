import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '7j4r3g42',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});