const { Router } = require('express');

const {
    createCurso,
    readCurso,
    updateCurso,
    deleteCurso,
} = require('../controllers/curso.controller');

const router = Router();

router.get('/', readCurso);

router.post('/', createCurso);

router.put('/:id', updateCurso);

router.delete('/:id', deleteCurso);

module.exports = router;