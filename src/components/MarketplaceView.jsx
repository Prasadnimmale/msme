'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Filter,
  ShieldCheck,
  Factory,
  Sprout,
  Utensils,
  Scissors,
  Cog,
  FlaskConical,
  Home,
  ArrowRight,
  Building2,
  CheckCircle2,
} from 'lucide-react';

const marketplaceCategories = [
  {
    id: 'Manufacturing',
    title: 'Manufacturing',
    count: '140+ Verified Units',
    description:
      'Sheet metal fabrication, precision components, industrial fasteners, packaging materials, and OEM assemblies.',
    icon: Factory,
    color: 'navy',
    image: '/category-manufacture.avif',
  },
  {
    id: 'Agriculture',
    title: 'Agriculture',
    count: '95+ Agro Suppliers',
    description:
      'Graded pulses, grains, organic fertilizers, drip irrigation systems, seeds, and post-harvest agro commodities.',
    icon: Sprout,
    color: 'green',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'Food & Beverages',
    title: 'Food & Beverages',
    count: '110+ Food Processors',
    description:
      'Spices & condiments, cold-pressed oils, millet value-added foods, fruit pulps, and packaged snacks.',
    icon: Utensils,
    color: 'orange',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'Handlooms & Textiles',
    title: 'Handlooms & Textiles',
    count: '85+ Weavers & Mills',
    description:
      'Authentic handloom sarees, cotton fabrics, readymade garments, industrial workwear, and home furnishings.',
    icon: Scissors,
    color: 'blue',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'Engineering & Machinery',
    title: 'Engineering & Machinery',
    count: '120+ Equipment Makers',
    description:
      'Food processing machinery, agricultural implements, material handling conveyors, pumps, and electrical panels.',
    icon: Cog,
    color: 'navy',
    image:
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'Chemicals & Plastics',
    title: 'Chemicals & Plastics',
    count: '75+ Industrial Units',
    description:
      'HDPE/PP woven sacks, injection-molded industrial crates, eco-friendly packaging films, and specialty chemicals.',
    icon: FlaskConical,
    color: 'green',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'Home & Lifestyle',
    title: 'Home & Lifestyle',
    count: '90+ Brands & Artisans',
    description:
      'Modular office & home furniture, brassware, eco-friendly decor, kitchenware, and herbal personal care.',
    icon: Home,
    color: 'orange',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Precision CNC Machined Industrial Components',
    category: 'Manufacturing',
    supplier: 'Sri Venkata Precision Works',
    location: 'Visakhapatnam, AP',
    moq: 'Bulk / Custom OEM Orders',
    image: '/manufacture.avif',
  },
  {
    id: 10,
    name: 'Heavy Sheet Metal Fabrication & Laser Cut Enclosures',
    category: 'Manufacturing',
    supplier: 'Bharath Industrial Fabricators',
    location: 'Vijayawada, AP',
    moq: '25 Units / Custom Batch',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 11,
    name: 'High-Tensile Industrial Fasteners, Bolts & Flanges',
    category: 'Manufacturing',
    supplier: 'Deccan Alloy & Fastener Corp',
    location: 'Kakinada, AP',
    moq: '500 Pieces Wholesale',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    name: 'Export-Grade Guntur Chilli & Pure Spice Powders',
    category: 'Food & Beverages',
    categoryAlt: 'Agriculture',
    supplier: 'Coastal Agro Spice Industries',
    location: 'Guntur, AP',
    moq: '50 Kg Wholesale Packs',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    name: 'Automated Rice & Grain Sorting Conveyor System',
    category: 'Engineering & Machinery',
    supplier: 'Godavari MechTech Engineers',
    location: 'Vijayawada, AP',
    moq: '1 Unit (Turnkey Setup)',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 4,
    name: 'Pure Mercerized Cotton Handloom Fabrics & Apparels',
    category: 'Handlooms & Textiles',
    supplier: 'Chirala Heritage Weavers Co-op',
    location: 'Chirala / Mangalagiri, AP',
    moq: '25 Meters / Wholesale Lot',
    image:
      'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 12,
    name: 'Authentic Kalamkari & Mangalagiri Cotton Sarees',
    category: 'Handlooms & Textiles',
    supplier: 'Sri Lakshmi Handloom Cluster',
    location: 'Guntur, AP',
    moq: '15 Pieces Boutique Lot',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 5,
    name: 'Solar Drip Irrigation & Micro-Sprinkler Kit',
    category: 'Agriculture',
    supplier: 'Rayalaseema AgriTech Solutions',
    location: 'Tirupati, AP',
    moq: '5 Acre Kit / Dealer Lot',
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 13,
    name: 'Organic Vermicompost & Bio-Enriched Soil Conditioners',
    category: 'Agriculture',
    supplier: 'Konaseema Green Agro Inputs',
    location: 'Rajahmundry, AP',
    moq: '1 Ton Bulk Bags',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 6,
    name: 'Heavy-Duty Food-Grade HDPE Drums & Packaging Crates',
    category: 'Chemicals & Plastics',
    supplier: 'Krishna Polymer Industries',
    location: 'Rajahmundry, AP',
    moq: '100 Units Minimum',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 14,
    name: 'Multi-Layer BOPP Laminated Woven Sacks & Pouches',
    category: 'Chemicals & Plastics',
    supplier: 'Vijaya PolyPack Enterprises',
    location: 'Vijayawada, AP',
    moq: '2,000 Bags Minimum',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 7,
    name: 'Ergonomic Modular Office Workstations & Storage',
    category: 'Home & Lifestyle',
    supplier: 'Navya Workspace Interiors',
    location: 'Kakinada, AP',
    moq: '5 Workstations / Institutional',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 15,
    name: 'Handcrafted Etikoppaka Wooden Decor & Corporate Gifts',
    category: 'Home & Lifestyle',
    supplier: 'Visakha Artisan Craft Collective',
    location: 'Visakhapatnam, AP',
    moq: '25 Gift Sets Wholesale',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 8,
    name: 'Cold-Pressed Groundnut & Sesame Edible Oils',
    category: 'Food & Beverages',
    supplier: 'Nandi Natural Oils & Foods',
    location: 'Kurnool, AP',
    moq: '20 Boxes (Retail / HoReCa)',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 9,
    name: 'Three-Phase Industrial Power Control & MCC Panels',
    category: 'Engineering & Machinery',
    supplier: 'Apex Switchgear & Controls',
    location: 'Nellore, AP',
    moq: 'Custom Industrial Spec',
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80',
  },
];

export default function MarketplaceView() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All Cities');

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    if (typeof window !== 'undefined') {
      const target = document.getElementById('featured-products');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const filteredProducts = featuredProducts.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      item.category === selectedCategory ||
      item.categoryAlt === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity =
      selectedCity === 'All Cities' ||
      item.location.toLowerCase().includes(selectedCity.toLowerCase());
    return matchesCategory && matchesSearch && matchesCity;
  });

  return (
    <>
      {/* 1. SEARCH PRODUCTS & SERVICES UI */}
      <section className="bg-light" style={{ paddingBottom: '36px' }}>
        <div className="container">
          <div className="marketplace-search-bar">
            <div className="search-controls">
              <div className="input-with-icon">
                <Search size={19} color="#075A96" />
                <input
                  type="text"
                  placeholder="Search MSME products, machinery, raw materials, or services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search products and services"
                />
              </div>

              <div className="input-with-icon">
                <Filter size={18} color="#168A45" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Filter by product category"
                >
                  <option value="All">All 7 Industry Categories</option>
                  {marketplaceCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-with-icon">
                <MapPin size={18} color="#F47721" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  aria-label="Filter by city"
                >
                  <option value="All Cities">All Cities &amp; Hubs</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Guntur">Guntur</option>
                  <option value="Tirupati">Tirupati</option>
                  <option value="Kakinada">Kakinada</option>
                  <option value="Rajahmundry">Rajahmundry</option>
                  <option value="Kurnool">Kurnool</option>
                  <option value="Nellore">Nellore</option>
                </select>
              </div>

              <button
                type="button"
                className="btn btn-green"
                onClick={() => handleCategorySelect(selectedCategory)}
                style={{ padding: '12px 22px' }}
              >
                <Search size={17} />
                Search
              </button>
            </div>

            <div className="category-pills">
              <button
                type="button"
                className={`category-pill ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('All')}
              >
                All Categories
              </button>
              {marketplaceCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(cat.id)}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORY CARDS (ALL 7 SECTORS) */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Explore By Industry</span>
            <h2 className="section-title">
              MSME Product &amp; Service <span className="text-green">Categories</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Browse verified Indian MSME manufacturers, processors, weavers, and industrial suppliers
              across seven core sectors.
            </p>
          </div>

          <div className="grid-4">
            {marketplaceCategories.map((cat) => {
              const IconComponent = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  className="product-card"
                  style={{
                    cursor: 'pointer',
                    borderColor: isSelected ? '#168A45' : undefined,
                    boxShadow: isSelected ? '0 0 0 2px #168A45, 0 12px 28px rgba(22, 138, 69, 0.16)' : undefined,
                  }}
                  onClick={() => handleCategorySelect(cat.id)}
                >
                  <div className="product-img-wrap" style={{ height: '165px' }}>
                    <img src={cat.image} alt={cat.title} loading="lazy" />
                    <span className="product-category-tag">{cat.count}</span>
                    {isSelected && (
                      <span className="product-verified-tag">
                        <CheckCircle2 size={13} /> Selected
                      </span>
                    )}
                  </div>
                  <div className="product-body">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '10px',
                      }}
                    >
                      <div
                        className={`card-icon ${cat.color}`}
                        style={{ width: '40px', height: '40px', marginBottom: 0 }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{cat.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.88rem', marginBottom: '14px' }}>{cat.description}</p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategorySelect(cat.id);
                      }}
                      style={{
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        color: isSelected ? '#FFFFFF' : '#168A45',
                        backgroundColor: isSelected ? '#168A45' : '#EFF8EF',
                        border: '1px solid #C6E6CE',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        marginTop: 'auto',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        width: '100%',
                      }}
                    >
                      {isSelected ? `Viewing ${cat.title}` : `Filter ${cat.title}`}{' '}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* 8th Card: List Your Products CTA */}
            <div
              className="card"
              style={{
                background: 'linear-gradient(135deg, #0B2D55 0%, #075A96 100%)',
                color: '#FFFFFF',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  backgroundColor: '#F47721',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  alignSelf: 'flex-start',
                  marginBottom: '14px',
                }}
              >
                FOR MSME SELLERS
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '10px' }}>
                Showcase Your Products Here
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.86)', fontSize: '0.9rem', marginBottom: '20px' }}>
                Become a member of SME Growth Circle and feature your catalog in front of city-wise and
                national B2B buyers.
              </p>
              <Link href="/membership" className="btn btn-green" style={{ width: '100%' }}>
                List Your Business
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      <section id="featured-products" className="section bg-light-blue">
        <div className="container">
          <div className="section-header">
            <span className="section-badge green">Verified B2B &amp; Wholesale Listings</span>
            <h2 className="section-title">
              Featured <span className="text-blue">MSME Products</span> &amp; Supplies
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Showing{' '}
              <strong>
                {selectedCategory === 'All' ? 'All Featured Products' : `${selectedCategory} Products`}
              </strong>{' '}
              ({filteredProducts.length} verified listings) from member enterprises across India.
            </p>
            {(selectedCategory !== 'All' || selectedCity !== 'All Cities' || searchQuery.trim() !== '') && (
              <div style={{ marginTop: '14px' }}>
                <button
                  type="button"
                  className="btn btn-outline-navy"
                  style={{ padding: '8px 18px', fontSize: '0.86rem' }}
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedCity('All Cities');
                    setSearchQuery('');
                  }}
                >
                  Show All Categories ({featuredProducts.length} Products)
                </button>
              </div>
            )}
          </div>

          <div className="grid-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="product-category-tag">{product.category}</span>
                  <span className="product-verified-tag">
                    <ShieldCheck size={13} /> Verified MSME
                  </span>
                </div>
                <div className="product-body">
                  <h3 style={{ fontSize: '1.14rem', marginBottom: '8px' }}>{product.name}</h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#075A96',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      marginBottom: '6px',
                    }}
                  >
                    <Building2 size={15} />
                    <span>{product.supplier}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#4A5E78',
                      fontSize: '0.85rem',
                    }}
                  >
                    <MapPin size={15} color="#F47721" />
                    <span>{product.location}</span>
                  </div>

                  <div className="product-meta">
                    <span>
                      <strong>Supply:</strong> {product.moq}
                    </span>
                    <span style={{ color: '#168A45', fontWeight: 600 }}>Ready to Connect</span>
                  </div>

                  <Link
                    href="/contact"
                    className="btn btn-outline-navy"
                    style={{ width: '100%', marginTop: '14px', padding: '10px 16px' }}
                  >
                    Send Trade Enquiry
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div
              className="card"
              style={{ textAlign: 'center', padding: '48px 24px', maxWidth: '540px', margin: '0 auto' }}
            >
              <h3 style={{ marginBottom: '10px' }}>No matching products found</h3>
              <p style={{ marginBottom: '20px' }}>
                Try clearing your search filters or switching to all categories to view our full
                featured catalog.
              </p>
              <button
                type="button"
                className="btn btn-green"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setSelectedCity('All Cities');
                }}
              >
                Reset Marketplace Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. SECTOR SPOTLIGHT BREAKDOWN */}
      <section className="section bg-white">
        <div className="container">
          <div className="split-grid">
            <div>
              <span className="section-badge orange">Why Source via SME Growth Circle</span>
              <h2 className="section-title">
                Direct Sourcing from <span className="text-green">Verified Indian MSMEs</span>
              </h2>
              <p style={{ marginBottom: '18px' }}>
                Our static marketplace showcase highlights the depth and quality of Indian micro, small,
                and medium enterprises across manufacturing, agriculture, food processing, textiles,
                engineering, chemicals, and lifestyle sectors.
              </p>
              <div className="feature-checklist">
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Direct Manufacturer &amp; Producer Connect</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>City-Wise Verified Member Enterprises</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Bulk B2B &amp; Institutional Supply Ready</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Zero Intermediary Platform Overhead</span>
                </div>
              </div>
              <Link href="/membership" className="btn btn-green">
                Become a Verified Seller
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="image-frame">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
                alt="MSME Supply Chain and Warehousing"
              />
              <div className="image-caption-ribbon">
                <ShieldCheck size={20} color="#F4B51B" />
                <span>Connecting Regional Producers with Buyers Across Every State</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

