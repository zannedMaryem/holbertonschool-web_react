# Learning TypeScript for JavaScript Developers

TypeScript is a superset of JavaScript. It adds a static type system and features such as interfaces, generics, and namespaces, then compiles the result to JavaScript that can run in a browser or on Node.js.

The examples below use modern TypeScript syntax and assume that `tsc` is available:

```bash
npm install --save-dev typescript
npx tsc example.ts --strict --target ES2017
```

`--strict` enables useful checks instead of allowing TypeScript to silently fall back to loose JavaScript behavior.

## Contents

- [Basic types](#basic-types)
- [Interfaces, classes, and functions](#interfaces-classes-and-functions)
- [The DOM and TypeScript](#the-dom-and-typescript)
- [Generic types](#generic-types)
- [Namespaces](#namespaces)
- [Declaration merging](#declaration-merging)
- [Ambient namespaces and external libraries](#ambient-namespaces-and-external-libraries)
- [Basic nominal typing](#basic-nominal-typing)

## Basic types

Type annotations describe the values a variable can contain. They are checked while developing and are removed when TypeScript compiles the code.

```ts
// Primitive values have familiar JavaScript equivalents.
let username: string = 'Ada';
let age: number = 36;
let isOnline: boolean = true;

// Arrays can use either notation. The first form is often easier to scan.
const scores: number[] = [10, 8, 9];
const tags: Array<string> = ['typescript', 'javascript'];

// A tuple has a fixed number and order of values.
const userRecord: [number, string] = [1, 'Ada'];

// An enum gives names to a limited set of values.
enum Status {
 Pending,
 Complete,
 Failed,
}
const currentStatus: Status = Status.Complete;

// `unknown` is safer than `any`: the value must be checked before use.
function printLength(value: unknown): void {
 if (typeof value === 'string' || Array.isArray(value)) {
  console.log(value.length);
 }
}

// `void` means that this function does not return a useful value.
// `never` describes code that cannot finish normally.
function fail(message: string): never {
 throw new Error(message);
}
```

### Union and literal types

Union types model a value that may be one of several types. Literal types restrict a value to specific strings or numbers.

```ts
type Id = number | string;
type Theme = 'light' | 'dark';

function formatId(id: Id, theme: Theme): string {
 // TypeScript knows that `id` is either a number or a string here.
 return `${theme}: ${id}`;
}

formatId(42, 'dark');
// formatId(true, 'dark'); // Error: boolean is not an Id.
```

## Interfaces, classes, and functions

### Interfaces

An interface describes the shape of an object. It is a compile-time contract and does not produce JavaScript at runtime.

```ts
interface Product {
 readonly id: number; // Cannot be reassigned after initialization.
 name: string;
 price?: number; // Optional property.
}

const book: Product = {
 id: 1,
 name: 'TypeScript Handbook',
};

// book.id = 2; // Error: id is readonly.
```

### Classes

Classes combine data and behavior. An interface can describe the public shape that a class must implement.

```ts
interface Printable {
 print(): string;
}

class Invoice implements Printable {
 constructor(
  public readonly number: string,
  private total: number,
 ) {}

 print(): string {
  return `Invoice ${this.number}: $${this.total}`;
 }

 addCharge(amount: number): void {
  this.total += amount;
 }
}

const invoice = new Invoice('INV-001', 100);
invoice.addCharge(25);
console.log(invoice.print());
```

`public`, `private`, and `readonly` are checked by TypeScript. The constructor shorthand above creates and initializes the properties automatically.

### Functions

Function types describe parameter types and the return type. Annotating the return value makes accidental changes easier to detect.

```ts
function multiply(left: number, right: number): number {
 return left * right;
}

// Arrow functions can have the same annotations.
const greet = (name: string, punctuation = '!'): string => {
 return `Hello, ${name}${punctuation}`;
};

// A callback receives a function type.
function transform(values: number[], callback: (value: number) => number): number[] {
 return values.map(callback);
}

const doubled = transform([1, 2, 3], (value) => value * 2);
```

## The DOM and TypeScript

TypeScript includes DOM type definitions, so it can understand browser objects such as `document`, `HTMLButtonElement`, and `MouseEvent`.

```html
<button id="counter-button" type="button">Clicked 0 times</button>
```

```ts
const button = document.querySelector<HTMLButtonElement>('#counter-button');

// querySelector can return null, so the check prevents a runtime error.
if (button === null) {
 throw new Error('Counter button was not found');
}

let count = 0;

button.addEventListener('click', (event: MouseEvent): void => {
 count += 1;
 button.textContent = `Clicked ${count} times`;
 console.log(event.currentTarget);
});
```

The generic argument on `querySelector` tells TypeScript which element type is expected. Use a type guard such as `if (button === null)` before accessing the element. A type assertion (`as HTMLButtonElement`) is another option, but it should only be used when the element's existence is certain:

```ts
const heading = document.querySelector('#page-title') as HTMLHeadingElement;
heading.textContent = 'Welcome';
```

Assertions do not add runtime validation; an incorrect assertion can still cause a browser error.

## Generic types

Generics allow code to work with many types while preserving the relationship between inputs and outputs. Instead of using `any`, define a type parameter such as `T`.

```ts
function first<T>(items: T[]): T | undefined {
 return items[0];
}

const firstName = first(['Ada', 'Grace']); // string | undefined
const firstScore = first([10, 20]); // number | undefined
```

Generics can also be constrained. The following function accepts any value that has a `length` property.

```ts
interface HasLength {
 length: number;
}

function logLength<T extends HasLength>(value: T): T {
 console.log(`Length: ${value.length}`);
 return value;
}

logLength('TypeScript');
logLength([1, 2, 3]);
// logLength(42); // Error: number does not have a length property.
```

A generic interface is useful for reusable data structures:

```ts
interface ApiResponse<T> {
 data: T;
 status: number;
}

const response: ApiResponse<Product> = {
 data: book,
 status: 200,
};
```

## Namespaces

A namespace groups related values under one name. It can prevent collisions in older codebases that use multiple script files. Modern modules (`export` and `import`) are usually preferred for new applications, but namespaces remain useful when learning or maintaining legacy TypeScript.

```ts
namespace Geometry {
 export interface Point {
  x: number;
  y: number;
 }

 export function distance(first: Point, second: Point): number {
  const xDifference = second.x - first.x;
  const yDifference = second.y - first.y;
  return Math.sqrt(xDifference ** 2 + yDifference ** 2);
 }
}

const origin: Geometry.Point = { x: 0, y: 0 };
const destination: Geometry.Point = { x: 3, y: 4 };
console.log(Geometry.distance(origin, destination)); // 5
```

Only declarations marked `export` are available outside the namespace. A namespace is emitted as an object in JavaScript, unlike an interface, which disappears during compilation.

## Declaration merging

Declaration merging is a TypeScript feature where declarations with the same name are combined into one type. Interfaces merge naturally, which can be useful for extending a shared contract.

```ts
interface Account {
 username: string;
}

interface Account {
 createdAt: Date;
}

// Account now requires both properties.
const account: Account = {
 username: 'ada',
 createdAt: new Date(),
};
```

Namespaces can also merge with classes to add static helpers:

```ts
class Logger {
 constructor(public message: string) {}
}

namespace Logger {
 export function fromError(error: Error): Logger {
  return new Logger(error.message);
 }
}

const logger = Logger.fromError(new Error('Network unavailable'));
```

Declaration merging has limits: two interfaces cannot define the same property with incompatible types, and classes cannot merge with other classes. Use it intentionally because it can make a type's definition harder to find.

## Ambient namespaces and external libraries

An ambient declaration describes a library that exists at runtime but does not have TypeScript type declarations. The `declare` keyword tells TypeScript not to emit JavaScript for the declaration.

For a legacy global library that exposes `LegacyCharts` in the browser, create a declaration file such as `legacy-charts.d.ts`:

```ts
// This file describes an object supplied by an external script.
declare namespace LegacyCharts {
 interface ChartOptions {
  color: string;
  showLegend?: boolean;
 }

 function draw(element: HTMLElement, options: ChartOptions): void;
}
```

The external script must still be loaded by the HTML page. The declaration only teaches TypeScript about its API:

```ts
const chartElement = document.querySelector<HTMLElement>('#sales-chart');

if (chartElement !== null) {
 LegacyCharts.draw(chartElement, {
  color: 'steelblue',
  showLegend: true,
 });
}
```

For a modern package, prefer installing its official types or a community `@types` package:

```bash
npm install some-library
npm install --save-dev @types/some-library
```

Use an ambient namespace only when the library is genuinely global or has no module-based type declarations. Incorrect declarations can make invalid runtime calls look valid to the compiler.

## Basic nominal typing

TypeScript is structurally typed: two types are compatible when their members have compatible shapes. This is convenient, but it can allow values with the same primitive type to be mixed accidentally.

```ts
function sendUserEmail(userId: string): void {
 console.log(`Sending email to user ${userId}`);
}

function loadUser(userId: string): void {
 console.log(`Loading user ${userId}`);
}

const id = 'user-42';
sendUserEmail(id);
loadUser(id);
```

To create lightweight nominal types, intersect a primitive with a `unique symbol` brand. The brand exists for the type checker and does not change the runtime value.

```ts
declare const userIdBrand: unique symbol;
declare const orderIdBrand: unique symbol;

type UserId = string & { readonly [userIdBrand]: 'UserId' };
type OrderId = string & { readonly [orderIdBrand]: 'OrderId' };

function asUserId(value: string): UserId {
 // Validate before branding values at a system boundary.
 if (!value.startsWith('user-')) {
  throw new Error('Invalid user id');
 }
 return value as UserId;
}

function getUser(userId: UserId): void {
 console.log(`Fetching ${userId}`);
}

const userId = asUserId('user-42');
getUser(userId);

// const orderId = 'order-9' as OrderId;
// getUser(orderId); // Error: OrderId is not UserId.
```

Brands improve compile-time safety, but they are not runtime validation. Validate external input before using a type assertion or branding function.

## Key takeaways

- Use annotations and unions to make JavaScript values safer and easier to understand.
- Use interfaces for object contracts, classes for state and behavior, and typed functions for predictable APIs.
- Check nullable DOM values before using them.
- Use generics to preserve type information without duplicating code.
- Prefer ES modules for new code; understand namespaces and declaration merging for existing TypeScript projects.
- Describe untyped global libraries with ambient declarations, while keeping their runtime script loading separate.
- Use branded types when structurally identical values must not be mixed.
