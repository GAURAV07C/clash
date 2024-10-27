import { Job, Queue, Worker } from "bullmq";
import { defaultQueueConfig, redisConnection } from "../config/queue.js";
import { sendMail } from "../config/mail.js";

export const emailQueueName = "emailQueue"; // queue name

export const emailQueue = new Queue(emailQueueName, {  // queue 
  connection: redisConnection, // redis connection
  defaultJobOptions: defaultQueueConfig, // default job options    imported why because we have to set some default options for the queue  , 1 time create and use 
});

// * Workers
export const handler = new Worker(
  emailQueueName, //queue name
  async (job: Job) => {
    const data = job.data;
    await sendMail(data.to, data.subject, data.html); // send mail 
  },
  { connection: redisConnection } // redis connection , imported why because we have to set some default options for the queue  , 1 time create and use  
);
