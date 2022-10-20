  // redirects user to login when they are logged out
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
         // allows users to view when they are already logged in
    } else {
        next();
    }
};

module.exports = withAuth;