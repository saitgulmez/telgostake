import React, { useState } from 'react';
import { faqData } from '../faqData.js'
import  Accordion  from './Accordion.jsx';

const FAQ = () => {

  return (
    <div className="p-4 rounded-lg md:mt-10 mt-14">
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
  );
}
export default FAQ