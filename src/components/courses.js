import React from 'react';

const Courses = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Courses</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.degree}>
          <h2 className="item-header text-lg">{item.degree}</h2>
          <h3 className="item-sub">{item.institution}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.date} ({item.hours} Hours)
          </p>
        </div>
      ))}
  </section>
);

export default Education;
