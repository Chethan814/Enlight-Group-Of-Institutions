import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Enlight Group of Institutions",
  description: "Get in touch with Enlight Group of Institutions. Find our contact information, location, and send us a message.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
