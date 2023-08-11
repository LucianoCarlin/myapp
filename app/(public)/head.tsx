interface HeadProps {
  title: string;
}
/* import type { Metadata } from 'next';
  
  export const metadata: Metadata = {
    title: 'oi',
    description: 'Welcome to Next.js',
  }; */

export default function Head({ title }: HeadProps) {
  return (
    <>
      <title>{`Windel Sistemas | ${title}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
