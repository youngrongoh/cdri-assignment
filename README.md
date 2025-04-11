# CERTICOS BOOKS

## 브랜치 관리 전략

- github flow
```
        feat/a
       /      \
main ------------------->
            \     /
            feat/b
```

- main
    - 기능 브랜치가 병합되는 mainline
    - 항상 stable하게 유지해야 함
    - 배포 대상

- feat/(name): 기능 브랜치

## 커밋 컨벤션
```
type. message

- detail 1
- detail 2
```

| 타입 | 설명 |
|------|------|
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| refac | 리팩토링 (기능 변경 없음) |
| style | 코드 스타일 수정 (세미콜론, 들여쓰기 등) |
| chore | 기타 변경사항 (패키지 설치, 설정 변경, 문서 수정 등) |