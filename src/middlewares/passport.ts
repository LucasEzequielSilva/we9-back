import passport from "passport";
import passportJwt from 'passport-jwt';
import User from "../models/usuarios";

const { Strategy, ExtractJwt } = passportJwt;

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findOne({where:{ id: jwtPayload.id }});
        if (user) {
          user.contraseña = null;
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        console.log(error);
        return done(error, false);
      }
    }
  )
);

export default passport;
