// Admin
import adminAccountController from './controller/admin/accountController.js';
import adminProductController from './controller/admin/productController.js';

// Client
import clientAccountController from './controller/client/accountController.js';
import clientOrderController from './controller/client/orderController.js';

import { clientPermission, adminPermission } from './repository/connection/auth.js';

export default function configRoutes(server) {
  server.use('/admin', adminAccountController);
  server.use('/admin', adminPermission, adminProductController);

  server.use('/client', clientAccountController);
  server.use('/client', clientPermission, clientOrderController);
}