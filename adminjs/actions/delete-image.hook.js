const fs = require('fs');
const path = require('path');
const before = async (request, context) => {
    console.log(request);
    if (request.method === 'get') {
       const { recordId, ...otherParams } = request.params;
  
    //   // eslint-disable-next-line no-param-reassign
      context.recordId = recordId;
  
      return request;
    // }
    }
     return request;
  };
  const after = async (response, request, context) => {
    const { recordId } = context;
  
    if (recordId) {
      const folderPath = path.join('uploads', recordId);
      fs.rmSync(folderPath, { recursive: true, force: true });
    }
    return response;
  };
module.exports = { before,after };
