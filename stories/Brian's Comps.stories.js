import React from 'react';
import Analysis from '../comps/Analysis';
import Header from '../comps/Header';
import Settingsbar from '../comps/Settings bar';  
import User from '../comps/User';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 


export default {
    title: 'Brian Comp',
    component: Settingsbar,
}


export const settingscomp = () => 
 <div>
     <Settingsbar />
 </div>

 export const usercomp = () => 
 <div>
     <User />
 </div>

 export const settingspage = () =>
 <div>
     <Header />
     <User />
     <Settingsbar />
 </div>

 export const analysispage = () =>
 <div>
     <Header />
     <Analysis />
 </div>