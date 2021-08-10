module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "dabcc7f6d38a7059edd97fa22b51a367"),
    },
  },
});
