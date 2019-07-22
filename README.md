KEVM Ganache-CLI Fork
=====================

Installing KEVM
---------------

In order to run `kevm-ganache-cli`, you will need to install `kevm-vm`.
We currently support Ubuntu Bionic (18.04) and Arch Linux (MacOS coming soon).
Here a specific GitHub release is used, feel free to replace the URL with a newer release from <https://github.com/kframework/evm-semantics/releases>.

### Ubuntu Bionic (18.04) - fresh VM

```sh
sudo apt install nodejs npm
curl --location 'https://github.com/kframework/evm-semantics/releases/download/v1.0.0-c01d92f/kevm_1.0.0_amd64.deb' --output kevm_1.0.0_amd64.deb
sudo apt install ./kevm_1.0.0_amd64.deb
```

### Arch Linux - fresh VM

```sh
sudo pacman -S nodejs npm git python2 make gcc
curl --location 'https://github.com/kframework/evm-semantics/releases/download/v1.0.0-c01d92f/kevm-git-1.0.0-1-x86_64.pkg.tar.xz' --output kevm-git-1.0.0-1-x86_64.pkg.tar.xz
sudo pacman -U kevm-git-1.0.0-1-x86_64.pkg.tar.xz
```

Install `npx`
-------------

Install the `npx` executable globally with:

```sh
sudo npm install -g npx
```

Install KEVM Ganache CLI and Truffle
------------------------------------

This downloads and installs the KEVM variant of `ganache-cli` and the test-runner `truffle`.

```sh
npm install kevm-ganache-cli truffle
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
