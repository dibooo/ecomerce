const uploadFeature = require('@adminjs/upload')
const AdminJs = require('adminjs');
const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('../actions/upload-image.hook');
const {before:deleteImageHookBefore,after:deleteImageHookAfter}=require('../actions/delete-image.hook')
const Product = require('../../models/product');
const productOption={
    resource: Product,
    options:{
    properties: {
      profilePhotoLocation: {
        isVisible: false,
      },
      uploadImage: {
        components: {
          edit: AdminJs.bundle('../components/upload-image.edit.tsx'),
          list: AdminJs.bundle('../components/upload-image.list.tsx'),
          show:AdminJs.bundle('../components/view-image.show.tsx')
        },
      }
    } ,
    actions: {
      new: {
        after: async (response, request, context) => {
          return uploadAfterHook(response, request, context);
        },
        before: async (request, context) => {
         return uploadBeforeHook(request, context);
        }
      },
      delete:{
        before: async (request, context) => {
          return deleteImageHookBefore(request, context);
         },
         after: async (response, request, context) => {
          return deleteImageHookAfter(response, request, context);
        },
      },
      edit: {
        after: async (response, request, context) => {
          return uploadAfterHook(response, request, context);
        },
        before: async (request, context) => {
          return uploadBeforeHook(request, context); 
        },
      },
    }
  }
  }
module.exports={productOption}