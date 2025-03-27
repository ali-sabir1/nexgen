"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ title, content, isOpen, onToggle, index }) => {
  return (
    <div className="border-b-4 mx-5 my-1">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer ${
          isOpen ? "bg-gray-200" : ""
        }`}
        onClick={() => onToggle(index)} // Trigger the toggle with the index
      >
        <div className="text-[#051d40] text-md lg:text-sm font-semibold">
          {title}
        </div>
        <span className="text-[#051d40] text-lg pl-2">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </div>

      {isOpen && (
        <div className="p-4 text-[#051d40] lg:text-sm font-medium">
          {content}
        </div>
      )}
    </div>
  );
};

const QnA = ({
  q1,
  a1,
  q2,
  a2,
  q3,
  a3,
  q4,
  a4,
  q5,
  a5,
  q6,
  a6,
  q7,
  a7,
  q8,
  a8,
  q9,
  a9,
  q10,
  a10,
}) => {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open accordion item

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked item or close it if it's already open
  };

  return (
    <div className="pt-3">
      <h2 className="text-[#051d40] px-7 lg:px-20 text-center text-3xl md:text-4xl lg:text-4xl font-semibold">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-10 py-5">
        <AccordionItem
          title={`1. ${q1}`}
          content={a1}
          isOpen={openIndex === 0}
          onToggle={handleToggle}
          index={0}
        />
        <AccordionItem
          title={`2. ${q2}`}
          content={a2}
          isOpen={openIndex === 1}
          onToggle={handleToggle}
          index={1}
        />
        <AccordionItem
          title={`3. ${q3}`}
          content={a3}
          isOpen={openIndex === 2}
          onToggle={handleToggle}
          index={2}
        />
        <AccordionItem
          title={`4. ${q4}`}
          content={a4}
          isOpen={openIndex === 3}
          onToggle={handleToggle}
          index={3}
        />
        <AccordionItem
          title={`5. ${q5}`}
          content={a5}
          isOpen={openIndex === 4}
          onToggle={handleToggle}
          index={4}
        />
        <AccordionItem
          title={`6. ${q6}`}
          content={a6}
          isOpen={openIndex === 5}
          onToggle={handleToggle}
          index={5}
        />
        <AccordionItem
          title={`7. ${q7}`}
          content={a7}
          isOpen={openIndex === 6}
          onToggle={handleToggle}
          index={6}
        />
        <AccordionItem
          title={`8. ${q8}`}
          content={a8}
          isOpen={openIndex === 7}
          onToggle={handleToggle}
          index={7}
        />
        <AccordionItem
          title={`9. ${q9}`}
          content={a9}
          isOpen={openIndex === 8}
          onToggle={handleToggle}
          index={8}
        />
        <AccordionItem
          title={`10. ${q10}`}
          content={a10}
          isOpen={openIndex === 9}
          onToggle={handleToggle}
          index={9}
        />
      </div>
    </div>
  );
};

export default QnA;
