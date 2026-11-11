import React from 'react';
import PageBanner from '@/components/PageBanner';
import MarketplaceView from '@/components/MarketplaceView';
import MadeInAndhraShowcase from '@/components/MadeInAndhraShowcase';

export const metadata = {
  title: 'Made in AndhraSME.in Marketplace | SME Growth Circle',
  description:
    'Explore the SME Growth Circle & Made in AndhraSME.in Digital Marketplace featuring Manufacturing, Agriculture, Food & Beverages, Handlooms & Textiles, Engineering & Machinery, Chemicals & Plastics, and Home & Lifestyle.',
};

export default function MarketplacePage() {
  return (
    <>
      <PageBanner
        badge="Made in AndhraSME.in • Digital Marketplace"
        title="Andhra Products. Global Opportunities — From Local to Global"
        description="Showcase and sell your products & services to the world. Discover verified manufacturers, suppliers, agro-processors, textile weavers, and business opportunities."
      />
      <MarketplaceView />
      <MadeInAndhraShowcase />
    </>
  );
}

