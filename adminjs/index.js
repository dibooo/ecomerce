const express = require('express');
const AdminJS = require('adminjs')
const options = require('./admin.options');
const AdminJSExpress = require('@adminjs/express')

const admin = new AdminJS(options);
const router = AdminJSExpress.buildRouter(admin);
 



module.exports = {admin,router};
