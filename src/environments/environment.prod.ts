export const environment = {
  production: true,

  config: {
    datasource: '{{ENV}}',

    common: {
      apiUrl: 'http://prod.com/api/'
    },

    dev: {
      apiUrl: 'http://dev.com/api/'
    },

    qa: {
      apiUrl: 'http://qa.com/api/'
    },

    prod: {
    }
  }
};
