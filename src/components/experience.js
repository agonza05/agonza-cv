import React from 'react';

const Experience = ({ data }) => (
  <section>
    <h1 className="text-primary-500 text-xl lg:text-2xl border-l-4 border-primary-500 pl-3 font-bold">
      Experience
    </h1>
    {data.map((item, i) => (
      <article className="my-5" key={`${item.company}-${i}`}>
        <h2 className="text-lg font-bold tracking-tight leading-relaxed text-neutral-700">{item.role}</h2>
        <h3 className="font-light tracking-wide text-sm">{item.company} | {item.start} - {item.end || 'PRESENT'}</h3>
        <p className="mt-4">{item.description}</p>
      </article>
    ))}
  </section>
);

export default Experience;
