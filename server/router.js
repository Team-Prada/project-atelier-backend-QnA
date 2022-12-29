const router = require('express').Router();
const controllers = require('./controllers');

router.get('/questions/:product_id', controllers.getQuestions);
router.get('/questions/:question_id/answers', controllers.getAnswers);

router.post('/questions/:product_id', controllers.addQuestion);
router.post('/questions/:question_id/answers', controllers.addAnswer);

router.put('/questions/:question_id/helpful', controllers.addQuestionHelpful);
router.put('/questions/:question_id/report', controllers.reportQuestion);

router.put('/answers/:answer_id/helpful', controllers.addAnswerHelpful);
router.put('/answers/:answer_id/report', controllers.reportAnswer);

module.exports = router;