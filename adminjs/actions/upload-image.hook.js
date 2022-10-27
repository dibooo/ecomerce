const path = require('path');
const fs = require('fs');
const AdminJs = require('adminjs');
var mv = require('mv');

/** @type {AdminJs.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, uploadImage } = context;

  if (record.isValid() && uploadImage) {
    const filePath = path.join('uploads', record.id().toString(), uploadImage.name);
    console.log(filePath+' diab');
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
    // await fs.promises.rename(uploadImage.path, filePath);
    mv(uploadImage.path,filePath , {mkdirp: true}, function(err) {
      // done. it first created all the necessary directories, and then
      // tried fs.rename, then falls back to using ncp to copy the dir
      // to dest and then rimraf to remove the source dir
    });
    await record.update({ profilePhotoLocation: `/${filePath}` });
  }
  return response;
};

/** @type {AdminJs.Before} */
const before = async (request, context) => {
  if (request.method === 'post') {
    const { uploadImage, ...otherParams } = request.payload;

    // eslint-disable-next-line no-param-reassign
    context.uploadImage = uploadImage;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };
