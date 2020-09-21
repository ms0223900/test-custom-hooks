import React from 'react';
import { shallow, mount } from 'enzyme';
import renderHook from '../test-hooks/renderHook';
import useToggle from './useToggle';
import { act } from '@testing-library/react';

describe('test useToggle', () => {
  it('test handleToggle', () => {
    const hookRef = renderHook(useToggle)(true);
    const {
      handleToggle
    } = hookRef.current;

    // 確定改變前狀態
    expect(hookRef.current.toggle).toBeTruthy();
    
    // 用act 確保react狀態被正確更新
    act(() => {
      handleToggle();
    });

    expect(hookRef.current.toggle).toBeFalsy();
  });
});