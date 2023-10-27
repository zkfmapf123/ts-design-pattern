# SingleTon

## Desc

- 실제 구동중인 프로그램에서, 특정한 목적을 가진 인스턴스가 여러개일 필요가 있을까?
- 특정 클래스에 객체 인스턴스가 하나만 만들어지게끔 강제한다.
- 자원을 많이 잡아먹는 인스턴스가 있을경우, 싱글턴으로 하나만 만들게끔 사용하기도 함..

## Implementation

- 자체적인 클래스내에서 싱글톤 인스턴스형태로 관리하기
  [singleton](./singleton.ts)

- 기존 클래스를 사용하면서 싱글톤 클래스로 관리하기
  [adapter-singleton](./adapter-singleton.ts)

- nodejs 경우, 싱글스레드 이기때문에 동기화문제는 없지만 기본적인 Runtime 시점에 싱글톤형태로 인스턴스로 만들수 있다.
  [nodejs-singleton](./nodejs-singleton.ts)
