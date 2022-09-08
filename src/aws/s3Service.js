const { S3 } = require('aws-sdk');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const uuid = require('uuid').v4;

const s3Uploadv2 = async (file) => {
  const s3 = new S3();
  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${uuid()}-${file.originalname}`,
    Body: file.buffer,

  };
  const result = await (s3.upload(param).promise());
  return result;
};

module.exports = { s3Uploadv2 };
