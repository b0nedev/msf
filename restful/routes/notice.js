const express = require('express');
const router = express.Router();
const noticeMiddleWare = require('../middleWare/noticeMiddleWare.js');
const noticeList = noticeMiddleWare.noticeList;
const postNotice = noticeMiddleWare.postNotice;
const modNotice = noticeMiddleWare.modNotice;
const delNotice = noticeMiddleWare.delNotice;

/**
 *@swagger
 *tags:
 *  name: noticeList
 *  description: 공지 글 모음을 가져오는 API(GET 방식)
 *definitions:
 *  noticeListOk:
 *    type: object
 *    required:
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#noticeList#ok'
 *        description: json data kind
 *      code:
 *        type: integer
 *        example: 16
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code(second layer code)
 *      snippet.message:
 *        type: string
 *        example: 'notices is loaded'
 *        description: json data snippet detail message(second layer message)
 *      snippet.noticeList:
 *        type: Object
 *        description: notices and notice_category join.
 *  noticeListDeny:
 *    type: object
 *    required:
 *      - user_id
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#noticeList#deny'
 *        description:
 *      code:
 *        type: integer
 *        example: 17
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code
 *      snippet.message:
 *        type: string
 *        example: 'loading notices is failed'
 *        description: json data snippet detail message(second layer message)
*/

/**
* @swagger
* /notice:
*  get:
*   summary:
*   tags: [noticeList]
*   parameters:
*     - in: query
*       name: part
*       schema:
*         type: string
*       description: select properties group(main, list, detail)
*     - in: query
*       name: language
*       schema:
*         type: string
*       description: selecting supported language(ko, en)
*     - in: query
*       name: noticeId
*       schema:
*         type: string
*       description: detail notice number(identifier)
*   responses:
*     200:
*       description: loading the notice data is success
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/noticeListOk'
*     403:
*       description: loading the notice data is denied
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/noticeListDeny'
*/
router.get('/', noticeList);


router.post('/', postNotice);

router.put('/', modNotice);

router.delete('/', delNotice);

module.exports = router;
