# React 공식 문서 틱택토 튜토리얼 단계 및 파일 생성 순서

## React 공식 튜토리얼의 주요 단계

### 전체 단계 개요

React 공식 문서는 **점진적으로 기능을 추가**하는 방식으로 진행됩니다.
처음에는 모든 코드를 하나의 파일에 작성하고, 나중에 컴포넌트를 분리합니다.

---

## 단계별 상세 내용

### **1단계: 정적 버전 만들기 (Static Version)**

**목표:** UI만 먼저 만들기 (상호작용 없음)

**파일:** `App.jsx` (또는 `App.js`)

- Square 컴포넌트 정의 (하드코딩된 값)
- Board 컴포넌트 정의 (9개의 Square)
- Game 컴포넌트 정의 (Board 포함)
- **모든 컴포넌트를 하나의 파일에 작성**

**특징:**

- 클릭 이벤트 없음
- 상태 관리 없음
- 단순히 UI만 렌더링

---

### **2단계: 상호작용 추가 (Adding Interactivity)**

**목표:** 클릭 시 값이 변경되도록 만들기

**파일:** `App.jsx` (같은 파일 수정)

- Square 컴포넌트에 `useState` 추가
- 각 Square가 독립적으로 상태 관리
- 클릭 시 X/O 표시

**특징:**

- 각 Square가 독립적인 상태를 가짐
- 아직 승리 조건 없음

---

### **3단계: 상태 끌어올리기 (Lifting State Up)**

**목표:** Board에서 상태를 관리하도록 변경

**파일:** `App.jsx` (같은 파일 수정)

- Square의 상태를 Board로 이동
- Board에서 9개 Square의 상태를 배열로 관리
- `squares` 배열: `[null, null, null, ...]` (1차원 배열)
- Square는 props로 값과 클릭 핸들러를 받음

**특징:**

- Board가 모든 Square의 상태를 관리
- 승리 조건 추가 (`calculateWinner` 함수)

---

### **4단계: Game 컴포넌트로 상태 이동**

**목표:** Game 컴포넌트에서 게임 전체 상태 관리

**파일:** `App.jsx` (같은 파일 수정)

- Board의 상태를 Game으로 이동
- `xIsNext` 상태 추가 (다음 플레이어 추적)
- Game이 Board에 props 전달

**특징:**

- Game이 최상위 상태 관리
- 플레이어 턴 전환 구현

---

### **5단계: 히스토리 추가 (Adding Time Travel)**

**목표:** 게임 히스토리 저장 및 되돌아가기

**파일:** `App.jsx` (같은 파일 수정)

- `history` 상태 추가: `[Array(9).fill(null), ...]`
- `currentMove` 상태 추가
- `jumpTo(move)` 함수 추가
- 히스토리 목록 UI 추가

**특징:**

- 모든 게임 상태를 배열로 저장
- 특정 턴으로 이동 가능
- 히스토리 분기 처리

---

## React 공식 튜토리얼의 파일 생성 순서

### **방식: 단일 파일 → 분리 (선택사항)**

#### **기본 방식 (튜토리얼에서 권장)**

```
1. App.jsx (또는 App.js)
   - 모든 컴포넌트를 하나의 파일에 작성
   - Square, Board, Game 모두 포함
   - calculateWinner 함수도 같은 파일에
```

#### **고급 방식 (튜토리얼 후반부 또는 실전)**

```
1. App.jsx
   - Game 컴포넌트만

2. components/Board.jsx (선택사항)
   - Board 컴포넌트

3. components/Square.jsx (선택사항)
   - Square 컴포넌트

4. utils/calculateWinner.js (선택사항)
   - calculateWinner 함수
```

**중요:** React 공식 튜토리얼은 **처음에는 분리하지 않고** 하나의 파일에 모든 것을 작성합니다.
이유: 컴포넌트 분리는 나중에 필요할 때 하는 것이 좋다는 철학 때문입니다.

---

## React 공식 튜토리얼 vs 현재 계획 비교

### **React 공식 방식**

```
단계 1: 정적 UI
단계 2: Square에 useState
단계 3: Board로 상태 끌어올리기
단계 4: Game으로 상태 이동
단계 5: 히스토리 추가

파일: App.jsx 하나에 모든 것
```

### **현재 계획 **

```
단계 1: 폴더 구조 생성
단계 2: 상수/유틸 함수
단계 3: 컴포넌트 분리 (GameBoard, Player, Log, GameOver)
단계 4: App 조합
단계 5: 히스토리 추가

파일: 여러 파일로 분리
```

---

## React 공식 튜토리얼의 핵심 학습 포인트

### 1. **상태 끌어올리기 (Lifting State Up)**

- 하위 컴포넌트의 상태를 상위로 이동
- 공유 상태는 공통 부모에서 관리

### 2. **불변성 (Immutability)**

- 상태를 직접 수정하지 않고 새 배열 생성
- `squares.slice()` 사용

### 3. **단방향 데이터 흐름**

- props는 위에서 아래로만 전달
- 이벤트 핸들러로 위로 전달

### 4. **점진적 복잡도 증가**

- 간단한 것부터 시작
- 단계적으로 기능 추가

---

## React 공식 튜토리얼의 최종 구조

### **최종 파일 구조 (하나의 파일)**

```jsx
// App.jsx
function Square({ value, onSquareClick }) { ... }

function Board({ xIsNext, squares, onPlay }) { ... }

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  // ...
}

function calculateWinner(squares) { ... }

export default Game
```

### **데이터 구조**

- 보드: 1차원 배열 `[null, null, null, ...]` (9개)
- 히스토리: `[board1, board2, board3, ...]` (보드 배열의 배열)
- 현재 보드: `history[currentMove]`

---

## 현재 계획과의 차이점 요약

| 항목              | React 공식      | 현재 계획          |
| ----------------- | --------------- | ------------------ |
| **파일 구조**     | 단일 파일       | 여러 파일 분리     |
| **보드 구조**     | 1차원 배열      | 2차원 배열         |
| **상태 관리**     | 보드 상태 저장  | 턴 기록            |
| **컴포넌트 분리** | 나중에 분리     | 처음부터 분리      |
| **플레이어 관리** | 없음            | 이름 편집 가능     |
| **게임 로그**     | 없음            | 있음               |
| **학습 목적**     | React 개념 학습 | 실전 프로젝트 구조 |
