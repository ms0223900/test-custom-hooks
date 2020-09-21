# Custom Hook Test 簡介

## 測試
```
npm test
```

## 使用renderHook
```
// 路徑建議用絕對路徑
import renderHook from 'components/lib/test-hooks/renderHook'

const hookRef = renderHook(YOUR_TOGGLE)(YOUR_TOGGLE_PARAMS);
//...

```