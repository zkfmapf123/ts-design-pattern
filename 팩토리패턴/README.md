# Factory Pattern Example

## Desc

- factory.ts

  - repository 자체가 만들어지는 class

- repository.ts

  - repository들의 class
  - repository들의 class 특성상 공통되는 메서드를 사용 -> interface로 정의

- main.ts
  - 구동함수

## Conclusion

- Factory Class자체에서 Repository의 생성자체를 위임해준다. (책임전이)
- 생성자체의 책임을 전이하기 때문에, 불필요한 생성이슈가 생기지 않게 해준다. => 여기저기 만들어지는 Repository Class

## Tips

- 결국 팩토리클래스는 다른 클래스를 만들어주기 위한 특수목적의 Class이기 때문에, 싱글턴으로 만들어둔다. => Runtime 자체내에서 이미 구동되어 있도록

```ts
export const repositoryFactory = new RepositoryFactory()
```
