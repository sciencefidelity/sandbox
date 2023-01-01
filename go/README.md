# Go

The Go suite uses the built in `go test` command, extended with `github.com/stretchr/testify/assert`. For reloading the main app it uses `air` and on Mac the test suite uses `fswatch` for reloading, and `grc` to highlight the output. I've set up an alias, `gottd`, in the `.zshrc` to run the command:

```shell
go test && fswatch -o . | (while read; do grc go test; done)
```

Commands:

```shell
# run project
go run

# start the app
air

# run the tests
go test

# start the test suite
go tdd
```
