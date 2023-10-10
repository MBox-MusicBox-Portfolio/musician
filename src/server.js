import Koa from 'koa';
//import db from './modules/db.js';
import addMember from './api/producer/addMember.js';
import findUser from './api/producer/findUser.js';
//import createNews from './api/producer/createNews.js'
import dotenv from 'dotenv'
dotenv.config();

const server = new Koa();
//server.use(createNews.routes());
server.use(addMember.routes());
server.use(addMember.allowedMethods());
server.use(findUser.routes());
server.use(findUser.allowedMethods());
//server.use(createNews.allowedMethods());
server.use(addMember.allowedMethods());

server.listen(process.env.SERVER_PORT || 4001 , async()=>{
     console.log(`[${new Date().toLocaleString()}] : Musician Server [Service]: Server running | Port ${process.env.SERVER_PORT || 4001} `);
})