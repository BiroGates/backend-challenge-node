import express from "express";

// Admin
import adminAccountController from './controller/admin/accountController.js';
import adminProductController from './controller/admin/productController.js';

// Client
import clientAccountController from './controller/client/accountController.js';
import clientOrderController from './controller/client/orderController.js';

export default function configRoutes(server) {
  server.use(adminAccountController);
  server.use(adminProductController);

  server.use(clientAccountController);
  server.use(clientOrderController);
}