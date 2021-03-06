import * as platformTemplate from '../datasource/platform_template.js';

let intent = (inputData, object, cb) => {
  let content = require('../contents/'+inputData.bot+'.json');

  let startAnalyisText = content.get_started;

  let template = {
    yes_payload: "get_started_yes",
    no_payload: "get_started_no"
  }

  platformTemplate.quickReplyButtonsYesOrNo(inputData, template, function(quickReplyButtonsTemplate) {
    let outputData = {
      userId: inputData.userId,
      responseType: 'TEXT_WITH_QUICK_REPLY',
      responseText: startAnalyisText,
      responseImage: null,
      responseAudio: null,
      responseVideo: null,
      responseAttachment: null,
      quickReplyButtons: quickReplyButtonsTemplate
    }
    cb(outputData);
  });
};

export { intent };
