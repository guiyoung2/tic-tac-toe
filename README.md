# Tic-Tac-Toe 게임

React로 구현한 틱택토 게임입니다. React 공식 튜토리얼 방식을 참고하여 단계별로 개발했습니다.

## React 공식 튜토리얼과의 차이점

이 프로젝트는 React 공식 튜토리얼을 기반으로 하되, 다음과 같은 차이점이 있습니다:

### 1. 데이터 구조

- **공식 튜토리얼**: 1차원 배열 `squares = [null, null, null, ...]` (9개 요소)
- **이 프로젝트**: 턴 기반 배열 `gameTurns = [{ square: { i, j }, player: "X" }, ...]`
  - 각 턴의 정보를 객체로 저장
  - 2차원 배열로 보드 렌더링

### 2. 좌표 표현 방식

- **공식 튜토리얼**: 인덱스 번호 (0~8)
- **이 프로젝트**: 객체 형태 `{ i, j }` (행, 열)
  - 더 직관적이고 확장 가능한 구조

### 3. 추가 기능

- ✅ **플레이어 이름 편집**: 게임 중 플레이어 이름 변경 가능
- ✅ **게임 로그**: 각 턴의 진행 기록 표시
- ✅ **히스토리 분기 처리**: 과거 턴에서 새 턴 추가 시 이후 히스토리 자동 제거

## 주요 기능

- ✅ 3x3 게임 보드
- ✅ 플레이어 턴 전환 (X → O → X)
- ✅ 승리 조건 체크 (가로, 세로, 대각선)
- ✅ 무승부 판정
- ✅ 플레이어 이름 편집
- ✅ 게임 로그 표시
- ✅ 히스토리 기능 (시간 여행)
- ✅ 게임 리셋

## 개발 순서

### 1단계: 정적 UI 만들기

- GameBoard 컴포넌트 정의 (2차원 배열 렌더링)
- Player 컴포넌트 정의
- 기본 UI 구조 완성

### 2단계: 상호작용 추가

- 클릭 이벤트 추가
- 상태 관리 시작 (`useState`)

### 3단계: 상태 끌어올리기

- App 컴포넌트에서 상태 관리
- `gameTurns` 상태로 턴 기반 관리
- 플레이어 턴 전환 구현

### 4단계: 게임 로직 추가

- `winning.js` 생성: 승리 조건 체크 함수
- `checkWinner` 함수 구현
- 승리/무승부 판정

### 5단계: 게임 종료 및 재시작

- 게임 종료 메시지 표시
- Reset 버튼 구현

### 6단계: 플레이어 관리 추가

- 플레이어 이름 편집 기능
- 활성 플레이어 하이라이트

### 7단계: 게임 로그 추가

- Log 컴포넌트 생성
- 게임 진행 기록 표시

### 8단계: 히스토리 기능 추가 (시간 여행)

- 히스토리 상태 관리
- `handleJumpTo` 함수 구현
- History 컴포넌트 생성
- 특정 턴으로 되돌아가기 기능
- 히스토리 분기 처리 (과거 턴에서 새 턴 추가 시)

### 9단계: 컴포넌트 분리

- 컴포넌트를 별도 파일로 분리
- 유틸 함수 분리 (`gameLogic.js`)

## 파일 구조

```
tic-tac-toe/
├── src/
│   ├── App.jsx              # 메인 컴포넌트 (상태 관리)
│   ├── App.css              # 스타일
│   ├── main.jsx             # 진입점
│   ├── index.css            # 전역 스타일
│   │
│   ├── components/          # UI 컴포넌트
│   │   ├── GameBoard.jsx    # 게임 보드
│   │   ├── Player.jsx       # 플레이어 정보
│   │   ├── Log.jsx          # 게임 로그
│   │   └── History.jsx      # 히스토리 (시간 여행)
│   │
│   └── util/                # 유틸 함수
│       ├── winning.js       # 승리 조건 체크
│       └── gameLogic.js     # 게임 로직 (플레이어 계산 등)
│
├── package.json
├── vite.config.js
└── README.md
```

## 주요 파일 설명

### `src/App.jsx`

- 게임 상태 관리 (`gameTurns`, `history`, `turnIndex`)
- 플레이어 이름 관리
- 게임 핸들러 함수들 (`handleClickBoard`, `handleJumpTo`, `handleReset`)

### `src/components/GameBoard.jsx`

- 3x3 게임 보드 렌더링
- 클릭 이벤트 처리

### `src/components/Player.jsx`

- 플레이어 이름 표시 및 편집
- 활성 플레이어 하이라이트

### `src/components/Log.jsx`

- 게임 진행 기록 표시
- 각 턴의 좌표와 플레이어 표시

### `src/components/History.jsx`

- 히스토리 목록 표시
- 특정 턴으로 이동 버튼
- 현재 턴 하이라이트

### `src/util/winning.js`

- `checkWinner(gameTurns)`: 승리 조건 체크
- 반환값: `"X"`, `"O"`, `"draw"`, `null`

### `src/util/gameLogic.js`

- `getCurrentPlayer(turns)`: 현재 플레이어 계산
- `isPlayerActive(player, currentPlayer, winner)`: 플레이어 활성 상태 체크

## 기술 스택

- React
- Vite
- JavaScript (ES6+)

## 참고 자료

- React 공식 튜토리얼 (Tic-Tac-Toe)
