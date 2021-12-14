module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2cdc1d43342a848b184c4ec6ba754bc8'),
  },
});
