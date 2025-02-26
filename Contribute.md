## Docker installation

- Install docker
- Start a new network `docker network create user_project`
- Start postgres
   - `docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`

- Build the image - `docker build --network=host -t user_project .`
- Start the image - `docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network user_project -p 3000:3000 user_project`














## Docker compose

- Install docker,docker-compose
- Run `docker compose up`