import React from "react";
import Results from "../comps/Results/index";
import Happy from "../Images/happy.png";
import Best from "../Images/best.png";
import Sad from "../Images/sad.png";

export default {
  title: "Results",
  component: Results,
};

const resultdata = {
  goodText:
    "There is still room for improvement - but don’t worry - You are on the right track and we have some tips to help you out!",
  badText:
    "There’s still room for improvement - but don’t worry - You are now much more aware about sustainability than you were before and we have some tips to help you out",
  bestText:
    "You are a sustainable superstar!   Looks like you already know the benefits of a sustainable lifestyle.  We have included some tips on how you can best  spread your knowledge to those around you!",
  goodImage: Happy,
  badImage: Sad,
  bestImage: Best,
};
export function goodresult() {
  return <Results text= {resultdata.goodText} imageurl={resultdata.goodImage}></Results>;
  
}

export function badresult() {
    return <Results text= {resultdata.badText} imageurl={resultdata.badImage}></Results>;
}

export function bestresult() {
    return <Results text= {resultdata.bestText} imageurl={resultdata.bestImage}></Results>;
}
