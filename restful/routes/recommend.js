const express = require('express');
const router = express.Router();
const recommendMiddleWare = require('../middleWare/recommendMiddleWare.js');
const recPrjList = recommendMiddleWare.recPrjList;
const addRecPrj = recommendMiddleWare.addRecPrj;
const delRecPrj = recommendMiddleWare.delRecPrj;
const recTagList = recommendMiddleWare.recTagList;
const addRecTag = recommendMiddleWare.addRecTag;
const delRecTag = recommendMiddleWare.delRecTag;
const recFriendList = recommendMiddleWare.recFriendList;
const addRecFriend = recommendMiddleWare.addRecFriend;
const delRecFriend = recommendMiddleWare.delRecFriend;


/**
 *@swagger
 *tags:
 *  name: recommendPrjList
 *  description: 프로젝트 추천 목록 리스트
 *definitions:
 *  recPrjListOk:
 *    type: object
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#recPrjList#ok'
 *        description: json data kind
 *      code:
 *        type: integer
 *        example: 24
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code(second layer code)
 *      snippet.message:
 *        type: string
 *        example: 'AI recommend project list'
 *        description: json data snippet detail message(second layer message)
 *      snippet.recommendProjects:
 *        type: Object
 *        description: recommend_prj, prj, matching_category join result
 *  recPrjListDeny:
 *    type: object
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#resPrjList#deny'
 *        description:
 *      code:
 *        type: integer
 *        example: 25
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code
 *      snippet.message:
 *        type: string
 *        example: 'The user id is invalid'
 *        description: json data snippet detail message(second layer message)
*/

/**
* @swagger
* /recommend/project:
*  get:
*   summary: AI 프로젝트 추천 목록
*   tags: [recommendPrjList]
*   parameters:
*     - in: query
*       name: language
*       schema:
*         type: string
*       description: selecting supported language(ko, en)
*   responses:
*     200:
*       description: 추천 목록 불러오기 성공
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/recPrjListOk'
*     403:
*       description: 추천 목록 불러오기 실패
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/recPrjListDeny'
*/
router.get('/projects', recPrjList);


/**
 *@swagger
 *tags:
 *  name: writeRecPrj
 *  description: AI 시스템 추천 알고리즘 결과 갱신
 *definitions:
 *  writeRecPrjOk:
 *    type: object
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#writeRecPrj#ok'
 *        description: json data kind
 *      code:
 *        type: integer
 *        example: 18
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code(second layer code)
 *      snippet.message:
 *        type: string
 *        example: 'AI recommend project list'
 *        description: json data snippet detail message(second layer message)
 *      snippet.myInfo:
 *        type: Object
 *        description: recommend_prj, prj, matching_category join result
 *  writeRecPrjDeny:
 *    type: object
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#writeRecPrj#deny'
 *        description:
 *      code:
 *        type: integer
 *        example: 19
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code
 *      snippet.message:
 *        type: string
 *        example: 'The user id is invalid'
 *        description: json data snippet detail message(second layer message)
*/

/**
* @swagger
* /recommend/project:
*  post:
*   summary: AI 프로젝트 추천 알고리즘 결과 갱신
*   tags: [writeRecPrj]
*   parameters:
*     - in: query
*       name: language
*       schema:
*         type: string
*       description: selecting supported language(ko, en)
*   responses:
*     200:
*       description: 추천 목록 불러오기 성공
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/writeRecPrjOk'
*     403:
*       description: 추천 목록 불러오기 실패
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/writeRecPrjDeny'
*/
router.post('/projects', addRecPrj);

router.delete('/projects', delRecPrj);

router.get('/tags', recTagList);

router.post('/tags', addRecTag);

router.delete('/tags', delRecTag);

router.get('/friends', recFriendList);

router.post('/friends', addRecFriend);

router.delete('/friends', delRecFriend);


module.exports = router;
