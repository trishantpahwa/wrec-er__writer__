import AWS from "./aws.service";

const S3Service = {
  listObjects: async (prefix = null) => {
    const s3 = new AWS.S3();
    const bucketParams = {
      Bucket: process.env.BUCKET_NAME || "wrec-er",
      Prefix: prefix,
    }; // Replace here => TP
    const response = await s3.listObjects(bucketParams).promise();
    return response.Contents.map((file) => file.Key);
  },
  getObject: async (fileName) => {
    const s3 = new AWS.S3();
    const bucketParams = {
      Bucket: process.env.BUCKET_NAME || "wrec-er",
      Key: fileName,
    };
    const response = await s3.getObject(bucketParams).promise();
    return response;
  },
  upload: async (key, body, options = {}) => {
    const s3 = new AWS.S3();
    const bucketParams = {
      Bucket: process.env.BUCKET_NAME || "wrec-er",
      Key: key,
      Body: body,
      ...options,
    };
    const response = await s3.upload(bucketParams).promise();
    return response;
  },
  deleteObject: async (fileName) => {
    const s3 = new AWS.S3();
    const bucketParams = {
      Bucket: process.env.BUCKET_NAME || "wrec-er",
      Key: fileName,
    };
    const response = await s3.deleteObject(bucketParams).promise();
    return response;
  },
};

export default S3Service;
