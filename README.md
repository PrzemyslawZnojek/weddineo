#Weddineo

## Running backend for development purposes

### Environment requirements
- Java 11 or higher
- Maven 4.0.0 or higher
- Docker

### Steps

#### Database
Application requires PostgreSQL RDBMS running on localhost:5432. 
It should contain empty database named *weddineo*. 
The easiest way to achive that is to run:

<code>docker run --name weddineo-postgres -p 5432:5432 -e POSTGRES_PASSWORD=pass -d postgres</code>

#### Firebase

Application requires Firebase private key to start up. 
It loads key from path provided in WEDDINEO_FIREBASE_CREDENTIALS_PATH OS environment variable.
You should add that variable in your system before launching application. 
Ask @mukasz, @PrzemyslawZnojek or @Kusibab to get firebase private key(JSON file) for development environment.
 