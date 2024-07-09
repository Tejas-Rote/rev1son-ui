import React from "react";
import terminal from "../assets/terminal.png";
import {
  Featured,
  FeaturedDescription,
  FeaturedHeader,
  FeaturedContent,
  FeaturedTitle,
  FeaturedActions,
  Button,
} from "rev1son-ui";

import { FaCodeBranch } from "react-icons/fa6";

import { FaTerminal } from "react-icons/fa";
const FeaturedExample = () => {
  return (
    <div className="grid grid-cols-3  gap-8 font-mono  ">
      <Featured type="simple" className="font-mono">
        <FeaturedHeader type="icon">
          <FaTerminal />
        </FeaturedHeader>
        <FeaturedContent>
          <FeaturedTitle>Default Featured </FeaturedTitle>

          <FeaturedDescription>
            This dust is actually a powerful poison that will even make a pro
            wrestler sick, Regice cloaks itself with frigid air of -328 degrees
            Fahrenheit
          </FeaturedDescription>
        </FeaturedContent>
      </Featured>

      <Featured className="font-mono">
        <FeaturedHeader type="icon">
          <FaTerminal />
        </FeaturedHeader>
        <FeaturedContent>
          <FeaturedTitle>Card Featured </FeaturedTitle>

          <FeaturedDescription>
            People say it can run at the same speed as lightning striking, Its
            icy body is so cold, it will not melt even if it is immersed in
            magma
          </FeaturedDescription>
        </FeaturedContent>
      </Featured>

      <Featured className="font-mono">
        <FeaturedHeader type="image">
          <img src={terminal} className="h-8 w-auto" />
        </FeaturedHeader>
        <FeaturedContent>
          <FeaturedTitle>image Featured </FeaturedTitle>

          <FeaturedDescription>
            This dust is actually a powerful poison that will even make a pro
            wrestler sick, Regice cloaks itself with frigid air of -328 degrees
            Fahrenheit
          </FeaturedDescription>
        </FeaturedContent>
      </Featured>

      <Featured className="font-mono">
        <FeaturedHeader type="icon" style="highlighted">
          <FaTerminal />
        </FeaturedHeader>
        <FeaturedContent>
          <FeaturedTitle>Icon highlighted </FeaturedTitle>

          <FeaturedDescription>
            This dust is actually a powerful poison that will even make a pro
            wrestler sick, Regice cloaks itself with frigid air of -328 degrees
            Fahrenheit
          </FeaturedDescription>
        </FeaturedContent>
      </Featured>
      <Featured highlight className="font-mono">
        <FeaturedHeader type="image">
          <img src={terminal} className="h-8 w-auto" />
        </FeaturedHeader>
        <FeaturedContent>
          <FeaturedTitle>Highlighted Featured </FeaturedTitle>

          <FeaturedDescription>
            This dust is actually a powerful poison that will even make a pro
            wrestler sick, Regice cloaks itself with frigid air of -328 degrees
            Fahrenheit
          </FeaturedDescription>
        </FeaturedContent>
      </Featured>

      <Featured className="font-mono">
        <FeaturedHeader type="icon">
          <FaTerminal />
        </FeaturedHeader>
        <FeaturedContent>
          <FeaturedTitle>Feature with CTA </FeaturedTitle>

          <FeaturedDescription>
            People say it can run at the same speed as lightning striking, Its
            icy body is so cold, it will not melt even if it is immersed in
            magma
          </FeaturedDescription>
        </FeaturedContent>
        <FeaturedActions>
          <Button onClick={() => console.log("clicked")}>
            <FaCodeBranch /> Code
          </Button>
        </FeaturedActions>
      </Featured>
    </div>
  );
};
export default FeaturedExample;
