import Accordion from "../components/Accordion/Accordion";
import AccordionItem from "../components/Accordion/AccordionItem";
import AccordionHeader from "../components/Accordion/AccordionHeader";
import AccordionContent from "../components/Accordion/AccordionContent";
import { FaChevronDown } from "react-icons/fa6";
import AccordionButton from "../components/Accordion/AccordionButton";
import AccordionTitle from "../components/Accordion/AccordionTitle";
const AccordianExample = () => {
  return (
    <div className="Accordion-example">
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTitle>Header</AccordionTitle>

            <AccordionButton>
              <FaChevronDown
                style={{
                  fontSize: "12px",
                }}
              />
            </AccordionButton>
          </AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta
            numquam delectus aut! Numquam atque minima autem libero, cum sint.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTitle>Header</AccordionTitle>

            <AccordionButton>
              <FaChevronDown
                style={{
                  fontSize: "12px",
                }}
              />
            </AccordionButton>
          </AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            repellat, nostrum vitae quis in eos sed odio eligendi nesciunt quasi
            blanditiis modi tenetur quia ratione distinctio, assumenda,
            excepturi quibusdam aperiam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat repellat, nostrum vitae quis in eos sed
            odio eligendi nesciunt quasi blanditiis modi tenetur quia ratione
            distinctio, assumenda, excepturi quibusdam aperiam? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Placeat repellat,
            nostrum vitae quis in eos sed odio eligendi nesciunt quasi
            blanditiis modi tenetur quia ratione distinctio, assumenda,
            excepturi quibusdam aperiam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat repellat, nostrum vitae quis in eos sed
            odio eligendi nesciunt quasi blanditiis modi tenetur quia ratione
            distinctio, assumenda, excepturi quibusdam aperiam?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordianExample;
