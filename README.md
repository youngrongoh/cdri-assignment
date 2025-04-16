# CERTICOS BOOKS

카카오 책 검색 API를 활용한 검색형 SPA 프로젝트입니다.  
디자인 시스템 기반으로 UI를 구성하고, 무한 스크롤 및 React Query를 통한 효율적인 API 상태 관리를 구현했습니다.

패키지 관리는 yarn의 PnP 방식을 사용하여 다른 환경에서 패키지 설치 없이 확인할 수 있도록 했습니다.

---

## 🚀 실행 방법

```bash
# 1. 패키지 매니저 버전 설정
nvm use
corepack use yarn

# 2. 패키지 설치
yarn

# 3. 환경변수 설정
# 메일로 첨부함

# 4. 개발 서버 실행
pnpm dev

# + 스토리북 실행시 패키지 설치가 필요할 수 있습니다.
```

## 기술 스택 및 선택 이유
- 필수
    - React.js
    - TypeScript
	- React Query
- 선택
	- Yarn Berry (PnP): 다른 환경에서 별도의 패키지 설치 시간을 줄여줌
	- Vite: 빠른 환경 셋업 및 HMR
	- eslint + prettier: 포매팅 및 린팅 도구
	- Storybook: 피그마에 정의된 디자인 시스템과 컴포넌트 확인
	- React Router v7 (Data API): 라우팅 및 loader 지원
	- Ky: 가벼운 HTTP 클라이언트, 브라우저 fetch api 기반
	- react-infinite-scroll-hook: 무한 스크롤 구현
	- react-use: 자주 쓰는 편의성 훅 제공

## 폴더 구조
```
/
├── src/
│   ├── components/         # UI 관련 모든 컴포넌트 관리
│   │   ├── shadcn-origin/  # shadcn/ui 컴포넌트(shadcn/ui 업데이트 시 diff용)
│   │   ├── Button          # 기본 버튼 컴포넌트 (shadcn/ui 복사 코드 + 커스터마이징)
│   │   └── ...             # 입력창 컴포넌트
│   │
│   ├── features/           # 도메인별 컴포넌트 (검색, 상세 페이지 등)
│   ├── lib/                # 유틸리티 함수들
│   ├── pages/              # 페이지 컴포넌트
│   ├── router/             # 라우팅 로직
│   ├── types/              # 글로벌 타입
│   └── assets/             # icon 등 에셋 파일
│
├── types/                  # 클라이언트와 관련 없는 타입
├── .storybook/             # 스토리북 설정파일
├── .yarn/                  # Yarn Plug n Play 패키지 저장
├── .nvm/                   # node 버전 기록
└── package.json
```

## 주요 기능
- 도서 목록 무한 스크롤
- URL 쿼리 파라미터 기반 검색 상태 동기화
- shadcn 기반 디자인 시스템
- 환경 변수 기반 API 키 보안 처리 (.env)
- 모듈 분리 (API 호출, 비즈니스 로직, UI)


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
