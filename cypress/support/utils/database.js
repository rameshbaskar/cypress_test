require('dotenv').config();
import mysql from 'mysql';

const jobsDBPool = mysql.createPool({
  host: process.env.JOBS_DB_HOST,
  port: process.env.JOBS_DB_PORT,
  user: process.env.JOBS_DB_USER,
  password: process.env.JOBS_DB_PASSWORD,
  database: process.env.JOBS_DB_NAME,
  ssl: true,
  connectionLimit: 5,
  connectTimeout: 10
});

const profileDBPool = mysql.createPool({
  host: process.env.PROFILE_DB_HOST,
  port: process.env.PROFILE_DB_PORT,
  user: process.env.PROFILE_DB_USER,
  password: process.env.PROFILE_DB_PASSWORD,
  database: process.env.PROFILE_DB_NAME,
  ssl: true,
  connectionLimit: 5,
  connectTimeout: 10
});

export async function queryJobsDB(sql) {
  return new Promise((resolve, reject) => {
    jobsDBPool.query(sql, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

export async function queryProfileDB(sql) {
  return new Promise((resolve, reject) => {
    profileDBPool.query(sql, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}