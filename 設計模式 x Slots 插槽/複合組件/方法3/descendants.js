import React from 'react';
import { noop, insertAt } from './utils.js';

export  const createDescendantContext =(name, initialValue = []) => {
const descendants=[]
let ctx=React.createContext({
    registerDescendant: () => noop,
    descendants,
...initialValue
})
console.log('ctx',ctx)
ctx.displayName=name
return ctx
}


useDescendantsInit
useDescendant
DescendantProvider