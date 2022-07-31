require("dotenv").config();
module.exports = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: env("DATABASE_HOST", "127.0.0.1"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", process.env.DBNAME),
            user: env("DATABASE_USERNAME", process.env.DBUSER),
            password: env("DATABASE_PASSWORD", process.env.DBPASSWORD),
            schema: env("DATABASE_SCHEMA", "public"),
            // ssl: {
            //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
            // },
            ssl: false,
        },
        debug: false,
    },
});
