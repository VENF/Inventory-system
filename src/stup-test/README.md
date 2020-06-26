# setup for tests environment
This class is designed to build the test runtime environment with our mongodb (mongoose) database.

### SetupTest
constructor class takes two private variables. 
- Server
-App = this.server

### database
Initialize an instance of mongodb. 
receive a name as parameter for the database

### removeAllCollections
Remueve las colecciones entre pruebas 

### dropAllCollections
Remove all collections at the end of tests and close the mongo instance