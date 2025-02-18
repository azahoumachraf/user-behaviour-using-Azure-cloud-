const express = require('express');
const Resource = require('../models/Resource');
const { ensureAuthenticated } = require('../middlewares/auth');

const router = express.Router();

// Get all resources
router.get('/', ensureAuthenticated, async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get resources by semester and module
router.get('/:semester/:module', ensureAuthenticated, async (req, res) => {
    try {
        const { semester, module } = req.params;
        const resources = await Resource.find({ semester, module });
        res.json(resources);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;