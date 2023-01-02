# Bun

The only dependency for this is `chokadir-cli` to allow watching for file changes. Maybe there is already a way to do this built into Bun which I haven't yet found.

Commands:

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
