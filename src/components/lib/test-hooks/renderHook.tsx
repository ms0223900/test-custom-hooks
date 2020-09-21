import { mount, shallow } from 'enzyme';
import React, { ReactNode } from 'react';

type Callback = (params?: any) => any

// 作為一個組件來渲染，我們在此拿到更新的hookState
function TestHookWrapper<HookFn extends Callback>(hookFn: HookFn, ref?: any) {
  return (...hookArgs: Parameters<HookFn>) => () => {
    const hookStates = hookFn(...hookArgs) as ReturnType<HookFn>;
    if(ref){
      ref.current = hookStates;
    };
    
    return null;
  };
}

function renderHook<HookFn extends Callback>(hookFn: HookFn, Wrapper?: React.ComponentType<{ children: ReactNode}>) {
  return (...hookArgs: Parameters<HookFn>) => {
    const ref = { current: {} as ReturnType<HookFn> };
    const Hook = TestHookWrapper(hookFn, ref)(...hookArgs);

    if(Wrapper) {
      mount(
        <Wrapper>
          <Hook />
        </Wrapper>
      );
    } else {
      mount(
        <Hook />
      );
    }

    return ref;
  };
}

export default renderHook;