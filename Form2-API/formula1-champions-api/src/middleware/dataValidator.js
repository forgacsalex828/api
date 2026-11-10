const { body, validationResult } = require('express-validator');

const dataValidator = [
    body('nev').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
    body('nemzetiseg').isString().withMessage('Nationality must be a string').notEmpty().withMessage('Nationality is required'),
    body('cimek').isInt({ min: 0 }).withMessage('Titles must be a non-negative integer'),
    body('elsoCim').isInt({ min: 1900 }).withMessage('First title year must be a valid year'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = dataValidator;