const server = require('./server') 


server.listen(4001, () => {
  console.log('\n*** Server Running on http://localhost:4001 ***\n');
});
 

/** base URL 'http://localhost:4000 
 * 
 * Router Endpoint '/api/hubs'
 * 
 * Dynamic params or subroutes '/:id' 
 * 
 * Final result: 'http://localhost:4001/<router-endpoint>/<dynamic-or-subroute>
 */