# structured data prototype for algotecture protocol / api adaptation

## what is this?

This repo contains an example how algotecture could define interactions between user-agents (web-browser, bot, web-service, etc.) in a interoperable way.

> Currently this is all a work in progress and not much is fleshed out yet.

## goal

I tried to replicate in general the format of algotecture.io, ([example](https://algotecture.io/space/GetByCoordinates?latitude=45.97045135498047&longitude=8.883978843688965) but using hardcoded jsonld files, so it can be read by more than just user-agents that know this api.

Using a http server written in node.js (koa) which currently only serves static files, can be used to extend this prototype further.

## how to use this

0. clone this repository
1. install node.js (recommended using [node version manager](https://github.com/nvm-sh/nvm) by running (once `nvm install`) and `nvm use` in this folder
2. install dependencies by running `npm install` in `server/` folder
3. start the server by running `npm start`
4. Visit local server for hardcoded example: http://localhost:3000/piazza-lago.jsonld


## development
If you want to develop this further I recommend to use it in a reload on save fashion to get fast feedback.

1. Install nodemon: `npm i -g nodemon`
2. Run dev script `npm run dev`

## Questions to solve for an actual implementation:

- [ ] ownership identifiers (do we use wallets or any identification service to be referenced? solid / openid connect? specific blockchains / ledgers?)
- [ ] identifiers for Places / SubspaceId (scheme prefix "algotecture://abcd#123" vs RESTful Ids "http://service:1234", or something like ipfs:// ?)
