# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Run `docker-compose up` command
3. Run `npm start` command

Gerando migration
```bash
yarn typeorm migration:generate -d ./src/main/database/dataSource.ts src/main/database/migrations/
```

Rodando migration
```bash
yarn typeorm migration:run -- -d ./src/main/database/dataSource.ts
```
