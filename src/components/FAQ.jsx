import React, { useState } from 'react';
import { faqData } from '../faqData.js'
import  Accordion  from './Accordion.jsx';
const FAQ = () => {
  return (
    <div className="p-4 rounded-lg md:mt-32 my-40">
      <h1 className="flex justify-center m">FAQ</h1>
      <ul>
        {faqData.map((faq) => (
          <li key={faq.question}>
            <Accordion
              question="Do you prefer Android or iOS"
              answer="I like to use iOS products"
            />
          </li>
        ))}
      </ul>
    </div>
    // <div
    //   className="p-4
    //  rounded-lg md:mt-32 my-40"
    // >
    //   <h1>FAQ</h1>
    //   <p className="bg-primary-500">sdsadsa</p>
    //   <Accordion
    //     title="Do you prefer Android or iOS"
    //     answer="I like to use iOS products"
    //     />
    //   <Accordion
    //     title="Do you prefer writing CSS or Tailwind?"
    //     answer="I like to use Tailwind"
    //   />
    //   <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
    // </div>
  );
}
export default FAQ