export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '81affed644102fcc3276a22b22b7c29b'),
  },
});
