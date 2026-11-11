import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PageBanner({ badge, title, description }) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="page-banner-inner">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>{badge}</span>
          </div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

