(function () {

  // required environment variables
  const ENV_VARS = [
    'NODE_ENV',
    'PORT'
  ];

  ENV_VARS.forEach((name) => {
    if (!process.env[name]) {
      throw new Error(`Environment variable ${name} is missing`)
    }
  })

  module.exports = {
    'env': process.env.NODE_ENV,
    'logger': {
      level: process.env.LOG_LEVEL || 'info',
      enabled: process.env.BOOLEAN ? process.env.BOOLEAN.toLowerCase() === 'true' : false
    },
    'server': {
      port: Number(process.env.PORT)
    }
  };

}());

