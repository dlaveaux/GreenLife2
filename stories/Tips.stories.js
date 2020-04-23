import React from "react";
import Tips from "../comps/Tips/index";
import Happy from "../Images/happy.png";
import Best from "../Images/best.png";
import Sad from "../Images/sad.png";


export default {
  title: "Tips",
  component: Tips,
};

const resultdata = {
  goodText:
    "There is still room for improvement - but don’t worry - You are on the right track and we have some tips to help you out!",
  badText:
    "There’s still room for improvement - but don’t worry - You are now much more aware about sustainability than you were before and we have some tips to help you out",
  bestText:
    "You are a sustainable superstar! Looks like you already know the benefits of a sustainable lifestyle. We have included some tips on how you can best spread your knowledge to those around you!",
  goodImage: Happy,
  badImage: Sad,
  bestImage: Best,
};

export function badtips() {
  return <Tips text = {resultdata.badText} imageurl= {resultdata.badImage}></Tips>;
}

export function goodtips() {
    return <Tips text = {resultdata.goodText} imageurl= {resultdata.goodImage}></Tips>;
}

export function besttips() {
    return <Tips text = {resultdata.bestText} imageurl= {resultdata.bestImage}></Tips>;
}
