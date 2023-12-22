import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { QuizController } from './quiz.controller';
import { QuizValidation } from './quiz.validation';

const router = Router();

router.post(
  '/create-quiz',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(QuizValidation.createQuiz),
  QuizController.createQuiz
);
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
*/

router.get('/:id', QuizController.getSingleQuiz);

export const QuizRoutes = router;
