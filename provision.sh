#!/bin/bash
(
    cd /hospital20-master/hospital20-master/FrontEnd
    npm install
    npm start
)
(
    cd /hospital20-master/hospital20-master/BackEnd
    npm install
    node index.js
)