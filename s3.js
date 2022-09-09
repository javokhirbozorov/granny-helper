const { S3 } = require('aws-sdk');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const uuid = require('uuid').v4;
require('dotenv').config();

exports.s3Uploadv2 = async (file) => {
  const s3 = new S3();
  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `images/${uuid()}-${file.originalname}`,
    Body: file.buffer,
  };

  return await s3.upload(param).promise();
//   const params = files.map((file) => ({
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: `images/${uuid()}-${file.originalname}`,
//     Body: file.buffer,
//   }));
//   return await Promise.all(params.map((param) => s3.upload(param).promise()));
};


