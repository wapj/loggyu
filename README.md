# 간단한 nodejs용 로깅 래퍼 loggyu

console.log() 만 썻더니 시간이나 어떤 라인에서 남긴로그인지 알 수 없어서 당황한 경우가 많습니다. 
그래서 엄청 간단하게 만들었습니다. 

### 설치
설치는 npm으로 합니다.

```shell
npm install loggyu
```

package.json에 자동으로 추가하고 싶다면

```shell
npm install loggyu --save
```

package.json의 dependency에 설정을 한후에는 아래와 같이 하시면 됩니다. 

```shell
npm update loggyu
```

### 사용법
사용법은 엄청나게 간단 합니다. 
그만큼 기능이 없기도 합니다;

```javascript
var loggyu = require('loggyu');
var log =  new loggyu();

log.debug("디버그 로그를 남기세요");
log.info("정보를 찍는 로그입니다");
log.warning("Warning! 뭔가 이상해요!");
log.error("에러!! 뭔가 잘못됐어요!");
log.critical("오이런! 이건 당장 해결해야해요!");
```

위와 같이 코딩하면 아래와 같이 출력 됩니다.
```
2013-11-5 11:41:56.445 'debug' (/Users/andy/dev/nodejs/loggyu/examples/test.js:12:5) 디버그 로그를 남기세요
2013-11-5 11:41:56.446 'info' (/Users/andy/dev/nodejs/loggyu/examples/test.js:13:5) 정보를 찍는 로그입니다
2013-11-5 11:41:56.446 'warn' (/Users/andy/dev/nodejs/loggyu/examples/test.js:14:5) Warning! 뭔가 이상해요!
2013-11-5 11:41:56.446 'error' (/Users/andy/dev/nodejs/loggyu/examples/test.js:15:5) 에러!! 뭔가 잘못됐어요!
2013-11-5 11:41:56.447 'critical' (/Users/andy/dev/nodejs/loggyu/examples/test.js:16:5) 오이런! 이건 당장 해결해야해요!
```

#### 포매팅도 됩니다.
포매팅은 util.format() 함수와 동일하게 사용가능합니다. 

```javascript
var loggyu = require('loggyu');
var log = new loggyu();

log.debug("%s %d %j", "이건 글자", 12345, {"JSONObject": "이거슨  제이슨입니당"});
```

이렇게 출력됩니다. 

```
2013-11-5 11:44:48.940 'debug' (/Users/andy/dev/nodejs/loggyu/examples/test.js:19:5) 이건 글자 12345 {"JSONObject":"이거슨  제이슨입니당"}
```

### 설정하기

이 부분은 추후에 개발될 내용입니다.

### 라이센스
라이센스는 많이들 쓰시는 "MIT" 라이센스를 사용합니다.
