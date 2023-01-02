# esbuild

After some experimentation I've settled on a speedy TDD setup for node using `esbuild` as the build tool and the currently experimental native testing in Node. Since this requires a build step I'm using `onchange` to watch for the build to be fininshed before running the code. In order to get the build step and then run the code I've used `concurrently` to bring these steps into one script. This was a much more long-winded set up that doing the same thing in Deno or Bun, but I was supprised that it's comparitively speedy and I'm sure there are some optimisations that can still be made.

```shell
# run project
bun run index.ts

# start the app
# bun chokidar "**/*.ts" -c "bun run index.ts"
bun watch

# run the tests
bun wiptest

# start the test suite
# bun chokidar "**/*.ts" -c "bun wiptest"
bun tdd
```

```typescript
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-1]));
```
