class User {
    constructor(model) {
      this.Model = model;
    }
    signUp(signUpData) {
      if (signUpData.password !== signUpData.passwordConfirmation) {
        throw new Error('Password must be the same!');
      }
  
      return this.Model.create(signUpData);
    }
    async signIn(signInData, ctx) {
      try {
        const user = await ctx.authenticate(signInData);
        
      return user;
      } catch(error) {
        return error;
      }
    }
  
    signOut(ctx) {
      try {
        ctx.logout();
        return true;
      } catch(e) {
        return false;
      }
    }
  }
  
  module.exports = User;