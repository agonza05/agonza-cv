import React from 'react';
import { graphql } from 'gatsby';
import {
  Header,
  Summary,
  Experience,
  Projects,
  Skills,
  List,
  Education,
} from '../components';
import '../main.css';

const Home = ({ data }) => {
  const resume = data.allDataJson.edges[0].node;
  return (
    <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
      <div className="container mx-auto shadow bg-white py-5 px-10">
        <Header
          contacts={resume.contact}
          name={resume.fullname}
          role={resume.role}
        />
        <Summary data={resume.summary} />
        <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
          <div className="lg:w-2/3 lg:pr-8">
            {resume.experience && <Experience data={resume.experience} />}
            {resume.projects && <Projects data={resume.projects} />}
          </div>
          <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
            {resume.skills && <Skills data={resume.skills} />}
            {resume.education && <Education data={resume.education} />}
            {resume.sidebar && resume.sidebar.map(item => (
              <List key={`${item.title}-side`} data={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          contact {
            email
            phone
            website
            location
          }
          education {
            degree
            end
            institution
            start
          }
          experience {
            company
            description
            role
            end
            start
          }
          fullname
          projects {
            link
            company
            description
            name
          }
          role
          sidebar {
            items
            title
          }
          skills {
            type
            title
            subskills {
              name
              percent
            }
          }
          social {
            service
            url
          }
          summary
        }
      }
    }
  }
`;

export default Home;
