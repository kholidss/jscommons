// import * as S3 from 'aws-sdk/clients/s3';
import Config from './Config';

export default (config: Config) => {
  return async (): Promise<void> => {
    // Gets all of the objects to be deleted.
    const listObjectsOutput = await config.client.listObjects({
      Bucket: config.bucketName,
      Prefix: config.subFolder,
    }).promise();
    const objects = listObjectsOutput.Contents !== undefined ? listObjectsOutput.Contents : [];
    const identifierList: any = objects.reduce(
      (identifiers: any, { Key }: any) => {
        if (Key !== undefined) {
          return [...identifiers, { Key }];
        }
        return identifiers;
      },
      [] as any,
    );

    // Deletes the objects.
    if (identifierList.length === 0) {
      return;
    }
    await config.client.deleteObjects({
      Bucket: config.bucketName,
      Delete: { Objects: identifierList },
    }).promise();
  };
};
