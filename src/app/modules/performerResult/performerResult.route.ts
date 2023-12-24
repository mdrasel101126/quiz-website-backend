import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { PerformerResultController } from './performerResult.controller';
import { PerformerResultValidation } from './performerResult.validation';

const router = Router();

router.post(
  '/create-result',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.PERFORMER),
  validateRequest(PerformerResultValidation.createPerformerResult),
  PerformerResultController.createPerformerResult
);
router.get('/my-result', auth(), PerformerResultController.getMyResults);
/* router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.updateCategory),
  CategoryController.updateCategory
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteCategory
);
router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getSingleCategory); */

export const RerformerResultRoutes = router;
