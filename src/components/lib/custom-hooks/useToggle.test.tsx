import renderHook from 'components/lib/test-hooks/renderHook';
import useToggle from './useToggle';
import { act } from '@testing-library/react';

describe('test useToggle', () => {
  it('test handleToggle', () => {
    const changedCallback = jest.fn();

    const hookRef = renderHook(useToggle)({
      initToggle: true,
      changedCallback,
    });
    const {
      handleToggle
    } = hookRef.current;

    // 測試改變前狀態
    expect(hookRef.current.toggle).toBeTruthy();
    expect(changedCallback).toBeCalledTimes(1);

    // 用act 確保react狀態被正確更新
    act(() => {
      handleToggle();
    });

    // 測試改變後狀態
    expect(hookRef.current.toggle).toBeFalsy();
    expect(changedCallback).toBeCalledTimes(2);
  });
});