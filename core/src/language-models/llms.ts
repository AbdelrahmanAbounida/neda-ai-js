/**
abstract classes 
class instances
generics 
private functions 
this["asd"]
export function isOpenAITool(tool: unknown): tool is ToolDefinition

export abstract class BaseLanguageModel<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RunOutput = any,
    CallOptions extends BaseLanguageModelCallOptions = BaseLanguageModelCallOptions
  >

  implements 

  import {type asd} from ""

  type BaseCallbackManagerMethods = {
  [K in keyof CallbackHandlerMethods]?: (
    ...args: Parameters<Required<CallbackHandlerMethods>[K]>
  ) => Promise<unknown>;
};

https://github.com/leonardomso/33-js-concepts?tab=readme-ov-file#1-call-stack


type vs interface 
hoisting 
closure, currying , compose , pipe 
event loop, message queue
async, promises 
callbacks, callback hell, event bubbling 
proxy
functions, classes, factories 
rxjs
template literals / template strings , es6,  ECMAScript 
single threaded , therading , webworker 
generators , iterators , colections 
data structures
var, let , const 
Call Stack
primitive types 
value types and reference types 
implicit , explicit, nominal, structuring and duck typing 
typeof , ==, ===
function scope, block scope and lexical scope 
expression vs statement 
Invoked Function Expressions (IIFEs) 
settimeout, setinterval, requestanimationframe
js engines 
bitwise operators , type arrays and array buffers 
dome and layout trees 
call vs apply vs bind , this 
new, Constructor, instanceof and Instances
Prototype Inheritance and Prototype Chain
Object.create and Object.assign
map, reduce and filter 
pure functions , side effects , state mutation and event propagation 
high order functions 
recursion 
memory management and garbage collection 
date and time 
browser objects (window, history, navigator, screen)
eval, closest 
super 
any, never, unknwown, undefined, symbol
Array vs ArrayBuffer, UnitArray, []
readonly vs Readonly vs ReadonlyArray
first class vs fitst order function 
pure function 
error types 
xss and web security 
cors 
optional chaining 
coercion 
polyfill
object.freeze 
event delegation 
temporal dead zone 
obfuscation 
memoization 
reflow, repaint 
weakset , set ,map 
object prototype 
heaps 
prototypal inheritence vs ingeritance 
how does js executed in browser 
shallow vs deep copy 
splice , slice 
pass be reference vs pass be value 
ajax 
webpack, rollup, parcel, babel,  lerna, rush, bazel, preact, yarn, or npm 
Nan, null, undefined 
arrow vs regualr functions 
__proto__
debounce 
throttling 
array operations , Object Literals, for of , for in, foreach 
Declaration vs Expression
Execution Context
Truthy, falsy values 


# TS 
decorator
metaprogramming and reflect api 
*/

interface T {
  x: number;
}

let a: Readonly<T> = { x: 1 };

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

export abstract class BaseLLM {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class LLM extends BaseLLM {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.height;
