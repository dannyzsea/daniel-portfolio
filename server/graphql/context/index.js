const passport = require('passport');

// options == {email, password}
const authenticateUser = (req, options) => {
    return new Promise((resolve, reject) => {
       

        const done = (err, user) => {
            // Here we will get user if user is authenticated
            // If we will get user we can save session to DB
      
            if (error) {
                return reject(new Error(error));
              }

            if (user) {
                req.login(user, (error) => {
                    if (error) { return reject(new Error(error)); }
                    return resolve(user);
                  })
              }

              else {
                return reject(new Error('Invalid password or email!'));  }
            }
            const authFn = passport.authenticate('graphql', options, done);
            authFn();
          })
        }
  
  
        exports.buildAuthContext = (req) => {
    const auth = {
        authenticate: (options) => authenticateUser(req, options),
        logout: () => req.logout(),
    isAuthenticated: () => req.isAuthenticated(),
    getUser: () => req.user
    }
  
    return auth;
  }