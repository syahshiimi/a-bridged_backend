module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e5852dd44af2bb16749afceacd03dcb2'),
  },
});
