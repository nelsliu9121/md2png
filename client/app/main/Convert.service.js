export const ConvertService = $resource => {
  return $resource('/api/convert', {}, {
    html: {
      method: 'POST',
      url: '/api/convert/html',
      responseType: 'text'
    },
    png: {
      method: 'POST',
      url: '/api/convert/png',
      responseType: 'text'
    }
  });
};
ConvertService.$inject = ['$resource'];
