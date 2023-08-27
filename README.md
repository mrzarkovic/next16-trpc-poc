This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Database

1. Copy and modify the init SQL file. Commands in this file will automatically execute the first time you create MySQL docker container by running `docker-compose up -d`.

```bash
mv init.sql.example init.sql
```

2. Copy and modify the DB env file for the docker-compose db service.

```bash
mv db.env.example db.env
```

Use `openssl rand -base64 16` to generate a strong random password.

3. Copy and modify the env file for Prisma.

```bash
mv .env.example .env
```

4. Start the DB server

```bash
docker-compose up -d
```

4. Run DB migrations

```bash
npx prisma migrate dev
```

5. Generate Prisma Client

```bash
npx prisma generate
```

### Dev Server

Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
