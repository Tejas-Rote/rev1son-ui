import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "rev1son-ui";
const AccordionExample: React.FC = () => {
  return (
    <div className="p-8 font-mono">
      <Accordion className="w-full ">
        <AccordionItem>
          <AccordionHeader title="The First Computer Programmer" />
          <AccordionContent>
            Ada Lovelace, an English mathematician and writer, is often
            considered the first computer programmer. She wrote an algorithm for
            Charles Babbage's early mechanical general-purpose computer, the
            Analytical Engine.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader title="The First 1GB Hard Drive" />
          <AccordionContent>
            In 1980, IBM announced the first 1GB hard drive, which weighed over
            500 pounds and cost $40,000. This marked a significant milestone in
            data storage technology.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader title="The First Computer Virus" />
          <AccordionContent>
            The first computer virus, known as the "Creeper virus," was created
            in 1971 as an experimental self-replicating program. It was designed
            to demonstrate the possibility of a self-replicating program and did
            not cause any harm.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader title="The Universal Machine Concept" />
          <AccordionContent>
            The concept of a universal machine, which is a fundamental idea in
            computer science, was introduced by Alan Turing in 1936. This
            concept laid the groundwork for modern computing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader title="The First 'Hello, World!' Program" />
          <AccordionContent>
            "Hello, World!" is often the first program written by people
            learning to code. It was first used as an example in the 1978 book
            "The C Programming Language" by Brian Kernighan and Dennis Ritchie.
          </AccordionContent>
        </AccordionItem>
      </Accordion>{" "}
    </div>
  );
};

export default AccordionExample;
