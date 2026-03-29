import React from 'react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const cardDelays = ['delay-0', 'delay-200', 'delay-100'];

export default function Gallery() {
  const [headRef, headVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  return (
    <section id="proyectos" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">

        <div
          ref={headRef}
          className={`anim anim-up text-center mb-16 ${headVisible ? 'visible' : ''}`}
        >
          <span className="font-barlow font-light text-xs text-acento tracking-[0.25em] uppercase">
            Nuestro trabajo
          </span>
          <h2 className="font-syne text-3xl md:text-4xl text-principal mt-3 tracking-tight">
            Proyectos
          </h2>
          <div className="mt-4 mx-auto w-10 h-px bg-acento/60" />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              niche={project.niche}
              description={project.description}
              demoUrl={project.demoUrl}
              image={project.image}
              delay={cardDelays[i] || 'delay-0'}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
