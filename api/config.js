const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://dbuser:postgres1@ds129906.mlab.com:29906/tai',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
