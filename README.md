KEVM Ganache-CLI Fork
=====================

Installing KEVM
---------------

In order to run `kevm-ganache-cli`, you will need to install `kevm-vm`.
We currently support Ubuntu Bionic (18.04) and MacOS (Arch Linux coming soon).
There is no support for Windows directly, but instead you can install `kevm-vm` on WSL using the instructions for Ubuntu Bionic (More about WSL: https://docs.microsoft.com/en-us/windows/wsl/install-win10).
Here a specific GitHub release is used, feel free to replace the URL with a newer release from <https://github.com/kframework/evm-semantics/releases>.

### Ubuntu

This is for Ubuntu Bionic (18.04), from a fresh LXC container.

```sh
sudo apt install nodejs npm curl git
curl --location 'https://github.com/kframework/evm-semantics/releases/download/v1.0.0-84e09b2/kevm_1.0.0_amd64.deb' --output kevm_1.0.0_amd64.deb
sudo apt install ./kevm_1.0.0_amd64.deb
```

### MacOS

```sh
brew install kframework/k/kevm
```

### Arch

This is for Arch Linux, from a fresh LXC container.

```sh
sudo pacman -S nodejs npm git python2 make gcc curl git
curl --location 'https://github.com/kframework/evm-semantics/releases/download/v1.0.0-84e09b2/kevm-git-1.0.0-1-x86_64.pkg.tar.xz' --output kevm-git-1.0.0-1-x86_64.pkg.tar.xz
sudo pacman -U kevm-git-1.0.0-1-x86_64.pkg.tar.xz
```

Install `npx`
-------------

Install the `npx` executable globally with:

```sh
sudo npm install -g npx
```

Run some Tests
--------------

Start the Ganache + KEVM server:

```sh
npx kevm-ganache-cli
```

Run some tests (in another terminal, or background the last run):

```sh
git clone 'https://github.com/openzeppelin/openzeppelin-solidity'
cd openzeppelin-solidity
npm install
npx truffle test test/token/ERC20/ERC20.test.js
```
