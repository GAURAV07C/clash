// import IORedis from "ioredis";
import { Redis } from "ioredis";
// export const redisConnection:ConnectionOptions = {
//     host: process.env.REDIS_HOST,
//     port: 6379,
//     password:process.env.REDIS_PASSWORD,
//   };
// export const redisConnection: ConnectionOptions = new IORedis.default({
//   host: "localhost", // redis host
//   port: 6379, //port
//   maxLoadingRetryTime: null, // no retry
//   maxRetriesPerRequest: null, // no retry
// });
export const redisConnection = new Redis(process.env.REDIS_URL, {
    maxLoadingRetryTime: null, // no retry
    maxRetriesPerRequest: null, // no retry
});
export const defaultQueueConfig = {
    removeOnComplete: {
        count: 20,
        age: 60 * 60, // `1hr
    },
    attempts: 3, // 3 times try
    backoff: {
        type: "exponential", // exponential delay
        delay: 1000, // 1 sec delay
    },
};
