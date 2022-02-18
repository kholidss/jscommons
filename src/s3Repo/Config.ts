// import * as S3 from 'aws-sdk/clients/s3';

interface Config {
  readonly client: any;
  readonly bucketName: string;
  readonly subFolder: string;
}

export default Config;
