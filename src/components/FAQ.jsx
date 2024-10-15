import React, { useState } from 'react';
import { faqData } from '../faqData.js'
import  Accordion  from './Accordion.jsx';

const FAQ = () => {

  return (
    <div className="p-4 rounded-lg md:mt-10">
      <h1 className="flex text-xl justify-center">FAQ</h1>

      <div className="flex justify-center  md:m-16 mt-8 ">
        <ul className="md:my-0 md:w-[60rem] ">
          {faqData.map((faq) => (
            <li
              key={faq.question}
              className="bg-steal-200 border-b border-slate-300 "
            >
              <Accordion question={faq.question} answer={faq.answer} />
            </li>
          ))}
        </ul>
      </div>
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