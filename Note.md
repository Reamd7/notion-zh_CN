查看MACOS 支持的架构  ` rustc --print target-list | grep "darwin" `
查看 windows 支持的架构  `rustc --print target-list | grep "windows"`
rustc --version --verbose
```
rustc 1.72.0 (5680fa18f 2023-08-23)
binary: rustc
commit-hash: 5680fa18feaa87f3ff04063800aec256c3d4b4be
commit-date: 2023-08-23
host: x86_64-unknown-linux-gnu
release: 1.72.0
LLVM version: 16.0.5
```

rustup target add x86_64-apple-darwin

rustup toolchain install stable-x86_64-apple-darwin

cargo build --release --target x86_64-pc-windows-gnu