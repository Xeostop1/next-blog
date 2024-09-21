'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types/project';

const ProductGrid = ({ projects }: {projects: Project[];}) => {
  return (
    <section className="container mx-auto product-grid">
      {projects.map((project) => (
        <div key={project.path} className="product-item">
          <Image src={`/images/${project.path}.jpg`} alt={project.title} width={300} height={200} className="w-full h-auto rounded-md" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link href={`/projects/${project.path}`} className="text-primary mt-4 block">View More</Link>
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;
