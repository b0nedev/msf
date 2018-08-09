const express = require('express');
const router = express.Router();

const userMiddleWare = require('../middleWare/userMiddleWare.js');
const myInfo = userMiddleWare.myInfo;
const signUp = userMiddleWare.signUp;
const editUsers = userMiddleWare.editUsers;
const delUsers = userMiddleWare.delUsers;

const userAuthMiddleWare = require('../middleWare/userAuthMiddleWare.js');
const confirmCode = userAuthMiddleWare.confirmCode;
const signIn = userAuthMiddleWare.signIn;
const findPwd = userAuthMiddleWare.findPwd;

const friendMiddleWare = require('../middleWare/friendMiddleWare.js');
const friendList = friendMiddleWare.friendList;
const addFriend = friendMiddleWare.addFriend;
const delFriend = friendMiddleWare.delFriend;


/**
 *@swagger
 *tags:
 *  name: users
 *  description: myInfo(GET), signUp(Post), (PUT), withDrawl(DELETE)
 *definitions:
 *  myInfoOk:
 *    type: object
 *    required:
 *      - user_id
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#myInfo#ok'
 *        description: json data kind
 *      code:
 *        type: integer
 *        example: 14
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code(second layer code)
 *      snippet.message:
 *        type: string
 *        example: 'My Info is displayed'
 *        description: json data snippet detail message(second layer message)
 *      snippet.myInfo:
 *        type: Object
 *        description: users and body_size join result
 *  myInfoDeny:
 *    type: object
 *    required:
 *      - user_id
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#myInfo#deny'
 *        description:
 *      code:
 *        type: integer
 *        example: 15
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code
 *      snippet.message:
 *        type: string
 *        example: 'The user id is invalid'
 *        description: json data snippet detail message(second layer message)
 *  signUpOk:
 *    type: object
 *    required:
 *      - email
 *      - code
 *      - password
 *      - rePassword
 *      - term
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#signUp#ok'
 *        description: signUp success json data
 *      code:
 *        type: integer
 *        example: 7
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: detail code
 *      snippet.message:
 *        type: string
 *        example: 'The account is signed Up'
 *        description: detail message
 *  signUpFail:
 *    type: object
 *    required:
 *      - email
 *      - code
 *      - password
 *      - rePassword
 *      - term
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#signUp#deny'
 *        description: signUp fail json data kind
 *      code:
 *        type: integer
 *        example: 6
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 2
 *        description: detail code
 *      snippet.message:
 *        type: string
 *        example: 'The password is invalid'
 *        description: detail message
 *  editUsersOk:
 *    type: object
 *    required:
 *      - email
 *      - code
 *      - password
 *      - rePassword
 *      - term
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#editUsers#ok'
 *        description: signUp success json data
 *      code:
 *        type: integer
 *        example: 7
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: detail code
 *      snippet.message:
 *        type: string
 *        example: 'The account is signed Up'
 *        description: detail message
 *  editUsersFail:
 *    type: object
 *    required:
 *      - email
 *      - code
 *      - password
 *      - rePassword
 *      - term
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#signUp#deny'
 *        description: signUp fail json data kind
 *      code:
 *        type: integer
 *        example: 6
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 2
 *        description: detail code
 *      snippet.message:
 *        type: string
 *        example: 'The password is invalid'
 *        description: detail message
*/

/**
* @swagger
* /users:
*  get:
*   summary: 사용자 정보(이름, 성별, 익명이름, 사진, 키, 몸무게, 신체 사이즈)
*   tags: [users]
*   responses:
*     200:
*       description: getting my Info data is success
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/myInfoOk'
*     403:
*       description: getting my Info is deny
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/myInfoDeny'
*/
router.get('/', myInfo);


/**
* @swagger
* /users:
*  post:
*   summary: 사용자 계정 signUp
*   tags: [users]
*   parameters:
*     - name: email
*       description: email
*       in: formData
*       required: true
*       type: string
*     - name: code
*       description: confirm code
*       in: formData
*       required: true
*       type: string
*     - name: password
*       description: user password
*       in: formData
*       required: true
*       type: string
*     - name: rePassword
*       description: user password repeat
*       in: formData
*       required: true
*       type: string
*     - name: term
*       description: stipulation term
*       in: formData
*       required: true
*       type: boolean
*   responses:
*     200:
*       description: signed Up success and return json web token.
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/signUpOk'
*     403:
*       description: signed Up is failed.
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/signUpFail'
*/
router.post('/', signUp);


/**
* @swagger
* /users:
*  put:
*   summary: 사용자 정보 수정/ 사용자 비밀번호 수정
*   tags: [users]
*   parameters:
*     - in: query
*       name: kind
*       schema:
*         type: string
*       description: info(사용자 정보 수정) 혹은 password(비밀번호 수정)
*     - name: userName
*       description: 사용자 이름(type=info 일 때)
*       in: formData
*       required: true
*       type: string
*     - name: gender
*       description: 성별 변경(type=info 일 때)
*       in: formData
*       required: true
*       type: string
*     - name: height
*       description: 사용자 키 변경(type=info 일 때)
*       in: formData
*       required: true
*       type: string
*     - name: weight
*       description: 사용자 몸무게 변경(type=info 일 때)
*       in: formData
*       required: true
*       type: boolean
*     - name: password
*       description: 기존 사용자 비밀번호(type=password 일 때)
*       in: formData
*       required: true
*       type: string
*     - name: newPassword
*       description: 변경할 사용자 비밀번호(type=password 일 때)
*       in: formData
*       required: true
*       type: string
*     - name: reNewPassword
*       description: 변경할 사용자 비밀번호 확인(type=password 일 때)
*       in: formData
*       required: true
*       type: string
*   responses:
*     200:
*       description: editting user info is success.
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/editUsersOk'
*     403:
*       description: edditing user info is fail.
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/editUsersFail'
*/
router.put('/', editUsers);

/**
 *@swagger
 *tags:
 *  name: signIn
 *  description: 사용자 signIn/ signIn 된 사용자에게 jwt 할당
 *definitions:
 *  signInOk:
 *    type: object
 *    required:
 *      - email
 *      - password
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#signIn#ok'
 *        description: json data kind
 *      code:
 *        type: integer
 *        example: 11
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code(second layer code)
 *      snippet.message:
 *        type: string
 *        example: 'Account is Signed In'
 *        description: json data snippet detail message(second layer message)
 *  signInFail:
 *    type: object
 *    required:
 *      - email
 *      - password
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#signIn#deny'
 *        description:
 *      code:
 *        type: integer
 *        example: 10
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 1
 *        description: json data snippet code
 *      snippet.message:
 *        type: string
 *        example: 'Account info is invalid'
 *        description: json data snippet detail message(second layer message)
*/

/**
* @swagger
* /users/signIn:
*  post:
*   summary: email, password 일치여부 확인하고 jwt 반환
*   tags: [signIn]
*   parameters:
*     - name: email
*       description: email
*       in: formData
*       required: true
*       type: string
*     - name: password
*       description: password
*       in: formData
*       required: true
*       type: string
*   responses:
*     200:
*       description: email and password is correct
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/signInOk'
*     403:
*       description: account information is invalid
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/signInFail'
*/
router.post('/signIn', signIn);


/**
 *@swagger
 *tags:
 *  name: confirm Code
 *  description: 사용자 email 유효성 체크를 위한 임시 코드를 사용자 email로 전송
 *definitions:
 *  codeOk:
 *    type: object
 *    required:
 *      - email
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#code#ok'
 *        description: json data kind
 *      code:
 *        type: integer
 *        example: 8
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code(second layer code)
 *      snippet.message:
 *        type: string
 *        example: 'The confirm code is sended to email'
 *        description: json data snippet detail message(second layer message)
 *  codeFail:
 *    type: object
 *    required:
 *      - email
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#code#fail'
 *        description:
 *      code:
 *        type: integer
 *        example: 9
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: json data snippet code
 *      snippet.message:
 *        type: string
 *        example: 'You have to check your email for code'
 *        description: json data snippet detail message(second layer message)
*/

/**
* @swagger
* /users/code:
*  post:
*   summary: email 주소를 입력으로 받고 해당 주소로 6자리 임시 코드를 발송
*   tags: [confirm Code]
*   parameters:
*     - name: email
*       description: email
*       in: formData
*       required: true
*       type: string
*   responses:
*     200:
*       description: email validation check is successed
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/codeOk'
*     403:
*       description: not valid email address.
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/codeFail'
*/
router.post('/code', confirmCode);


/**
 *@swagger
 *tags:
 *  name: find Password
 *  description: 유요한 사용자 email 입력받아 임시 패스워드를 해당 email로 발송
 *definitions:
 *  pwQueryOk:
 *    type: object
 *    required:
 *      - email
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#pwQuery#ok'
 *        description: signUp success json data
 *      code:
 *        type: integer
 *        example: 12
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: detail code
 *      snippet.message:
 *        type: string
 *        example: 'The temporary password is assigned'
 *        description: detail message
 *  pwQueryFail:
 *    type: object
 *    required:
 *      - email
 *      - code
 *      - password
 *      - rePassword
 *      - term
 *    properties:
 *      kind:
 *        type: string
 *        example: 'rest#pwQuery#deny'
 *        description: signUp fail json data kind
 *      code:
 *        type: integer
 *        example: 13
 *        description: json data kind code
 *      snippet.code:
 *        type: integer
 *        example: 0
 *        description: detail code
 *      snippet.message:
 *        type: string
 *        example: 'The email address is invalid'
 *        description: detail message
*/

/**
* @swagger
* /users/pwQuery:
*  post:
*   summary: email 주소 입력받고 등록 회원이라면 email 주소로 임시 패스워드 전송
*   tags: [find Password]
*   parameters:
*     - name: email
*       description: email
*       in: formData
*       required: true
*       type: string
*   responses:
*     200:
*       description: signed Up success and return json web token.
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/pwQueryOk'
*     403:
*       description: signed Up is failed.
*       schema:
*         type: Object
*         properties:
*           confirmCode:
*             $ref: '#/definitions/pwQueryFail'
*/
router.post('/pwQuery', findPwd);


router.get('/friend', friendList);



router.post('/friend', addFriend);



router.delete('/friend', delFriend);

module.exports = router;
