# TypeScript Runtime Error Despite Compile-Time Type Safety

This repository demonstrates a scenario where TypeScript's type system allows code to compile successfully, even though it will produce a runtime error.  This occurs because TypeScript's type checking happens at compile time, not runtime.  The runtime behavior depends on the JavaScript engine.

The bug involves passing strings to a function expecting numbers.  While TypeScript's compiler will flag this as an error if strict type checking is enabled (using `strict: true` in `tsconfig.json`), this example is provided to highlight that type safety is not a guarantee against all runtime errors.