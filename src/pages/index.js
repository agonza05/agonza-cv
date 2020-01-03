import React from 'react';
import { graphql } from 'gatsby';
import { Header, Summary } from '../components';
import '../main.css';

const Home = ({ data }) => {
  const resume = data.allDataJson.edges[0].node;
  console.log(resume);
  return (
    <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen p-5">
      <div className="container mx-auto shadow bg-white p-6">
        <Header
          contacts={resume.contact}
          name={resume.fullname}
          role={resume.role}
        />
        <Summary data={resume.summary} />
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
            Degree
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
            Link
            company
            description
            name
          }
          role
          sidebar {
            Items
            title
          }
          skills {
            Type
            title
            subskills {
              Name
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
