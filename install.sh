#!/usr/bin/env sh
set -eu

# Downloads the latest tarball from https://atom-factory.com/xen/releases and
# unpacks it into ~/.local/xen. If you'd prefer to do this manually, instructions
# can be found at https://atom-factory.com/xen/get-started.html

main() {
    platform="$(uname -s)"
    arch="$(uname -m)"

    if [ -n "${TMPDIR:-}" ] && [ -d "${TMPDIR}" ]; then
        temp="$(mktemp -d "$TMPDIR/xen-XXXXXX")"
    else
        temp="$(mktemp -d "/tmp/xen-XXXXXX")"
    fi

    if [ "$platform" = "Linux" ]; then
        platform="linux"
    else
        echo "Unsupported platform $platform"
        exit 1
    fi

    case "$platform-$arch" in
        linux-x86* | linux-i686*)
            arch="x86_64"
            ;;
        *)
            echo "Unsupported platform or architecture"
            exit 1
            ;;
    esac

    if command -v curl >/dev/null 2>&1; then
        curl () {
            command curl -fL "$@"
        }
    elif command -v wget >/dev/null 2>&1; then
        curl () {
            wget -O- "$@"
        }
    else
        echo "Could not find 'curl' or 'wget' in your path"
        exit 1
    fi

    "$platform" "$@"

    if [ "$(command -v xen)" = "$HOME/.local/xen/bin/xen" ]; then
        echo "Xen has been installed. Run with 'xen'"
    else
        echo "To run Xen from your terminal, you must add ~/.local/xen/bin to your PATH"
        echo "Run:"

        case "$SHELL" in
            *zsh)
                echo "   echo 'export PATH=\$HOME/.local/xen/bin:\$PATH' >> ~/.zshrc"
                echo "   source ~/.zshrc"
                ;;
            *fish)
                echo "   fish_add_path -U $HOME/.local/bin"
                ;;
            *)
                echo "   echo 'export PATH=\$HOME/.local/xen/bin:\$PATH' >> ~/.bashrc"
                echo "   source ~/.bashrc"
                ;;
        esac

        echo "To run Xen now, '~/.local/xen/bin/xen'"
    fi
}

linux() {
    echo "Downloading Xen"
    curl "https://github.com/jakerieger/Xen/releases/download/v0.5.4/Xen-0.5.4-linux-x64.tar.gz" > "$temp/Xen-0.5.4-linux-x64.tar.gz"
    rm -rf "$HOME/.local/xen"
    mkdir -p "$HOME/.local/xen"
    tar -xzf "$temp/Xen-0.5.4-linux-x64.tar.gz" -C "$HOME/.local/xen/"
    rm -f "$temp/Xen-0.5.4-linux-x64.tar.gz"
}

main "$@"