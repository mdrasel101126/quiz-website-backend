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
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(QuizValidation.updateQuiz),
  QuizController.updateQuiz
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), QuizController.deleteQuiz);
router.get(
  '/category/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  QuizController.getAllQuizByCategory
);
router.get(
  '/exam-quizzes/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.PERFORMER),
  QuizController.getExamQuestions
);
router.get('/:id', QuizController.getSingleQuiz);

export const QuizRoutes = router;
