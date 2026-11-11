import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'SME Growth Circle | India’s City-Wise MSME Business Visibility & Growth Platform',
    template: '%s | SME Growth Circle',
  },
  description:
    'SME Growth Circle Foundation is India’s City-Wise MSME Business Visibility & Growth Platform connecting Manufacturers, Traders, Distributors, Retail Businesses, Service Providers, Startups, and Women Entrepreneurs with buyers, suppliers, and new markets.',
  keywords: [
    'SME Growth Circle',
    'SME Growth Circle Foundation',
    'MSME Business Growth Platform',
    'Indian MSME Directory',
    'MSME Marketplace India',
    'Andhra Pradesh MSME Circle',
    'Buyer Seller Connect',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

