# Script Display

## Description
This is web tool for sorting out different database sql script.

## Usage
* One can create his/her own script tool by creating a yaml file inside `./yaml` with a url-friendly file name,
such as `growth-ccpa-delete.yaml` for url `https://davidchen-minted.github.io/script-display/growth-ccpa-delete`.
* Or one can go to [https://davidchen-minted.github.io/script-display](https://davidchen-minted.github.io/script-display) and import yaml file on the web page.

## Development
1. install & use nvm
  ```sh
  nvm use || nvm install
  ```
2. make modification
3. preview changes in dev environment
  ```sh
  npm run dev
  ```
4. export static page
  ```sh
  npm run export
  ```
5. merge to master branch in github

## Notes
created from **[[nextjs_redux_toolkit]](https://github.com/Project-Setup/nextjs_redux_toolkit)** NextJs, Redux-Toolkit Example Project