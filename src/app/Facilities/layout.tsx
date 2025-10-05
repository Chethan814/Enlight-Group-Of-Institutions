import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Facilities - Enlight Group of Institutions",
  description: "Explore the state-of-the-art facilities at Enlight Group of Institutions including modern labs, library, transport, and more.",
};

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
