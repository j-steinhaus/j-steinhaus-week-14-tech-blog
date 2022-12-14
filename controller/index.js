const router = require('express').Router();

//accessing routes
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

// 404 error 
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

