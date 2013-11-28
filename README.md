# 간단한 nodejs용 로깅 래퍼 loggyu

console.log() 만 썻더니 시간이나 어떤 라인에서 남긴로그인지 알 수 없어서 당황한 경우가 많습니다. 
그래서 엄청 간단하게 만들었습니다. 

### 설치
설치는 npm으로 합니다.

```shell
npm install loggyu
```

혹은

```shell
npm update loggyu
```

package.json에 자동으로 추가하고 싶다면

```shell
npm install loggyu --save
```

이렇게 하시면 됩니다.

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
[ DEBUG    ] 2013-11-3 21:23:52.59 | (/Users/andy/dev/nodejs/loggyu/examples/test.js:12:5): 디버그 로그를 남기세요
[ INFO     ] 2013-11-3 21:23:52.59 | (/Users/andy/dev/nodejs/loggyu/examples/test.js:13:5): 정보를 찍는 로그입니다
[ WARN     ] 2013-11-3 21:23:52.60 | (/Users/andy/dev/nodejs/loggyu/examples/test.js:14:5): Warning! 뭔가 이상해요!
[ ERROR    ] 2013-11-3 21:23:52.60 | (/Users/andy/dev/nodejs/loggyu/examples/test.js:15:5): 에러!! 뭔가 잘못됐어요!
[ CRITICAL ] 2013-11-3 21:23:52.60 | (/Users/andy/dev/nodejs/loggyu/examples/test.js:16:5): 오이런! 이건 당장 해결해야해요!
```
네 위의 사용법이 다입니다.

객체를 찍으면 객체가 튀어나옵니다.

```javascript
var loggyu = require('loggyu');
var log = new loggyu();

log.info({"obj":"이건 제이슨이라고요"});
```

요건 요렇게 출력됩니다. 내부적으로 util.inspect를 호출하도록 되어 있습니다.
```
[ INFO     ] 2013-11-3 21:23:52.62 | (/Users/andy/dev/nodejs/loggyu/examples/test.js:19:5): { json: '이건 제이슨이라구요' }
```
### 라이센스
라이센스는 많이들 쓰시는 "MIT" 라이센스를 사용합니다.



