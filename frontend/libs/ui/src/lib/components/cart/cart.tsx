'use client';

import { Stepper, useMounted } from '@pw-fe-monorepo/ui';
import { useSession } from 'next-auth/react';
import { useContext, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { twMerge } from 'tailwind-merge';
import { CartContext } from '../../providers/cart';
import { CartButton } from './cart-button/cart-button';
import { Step1 } from './step-1/step-1';
import { Step2 } from './step-2/step-2';

export const Cart = () => {
  const nodeRef = useRef(null);
  const mounted = useMounted();
  const { status } = useSession();
  const { cartItems, cartStep, setCartStep } = useContext(CartContext);

  if (!mounted || status === 'loading') return null;

  return (
    <CartButton>
      <div className={twMerge('min-h-full flex flex-col gap-4', 'p-5 lg:p-6')}>
        {!!cartItems?.length && (
          <div className="flex flex-col gap-7 lg:gap-8">
            <h4 className="text-xl lg:text-2xl font-bold">
              {cartStep === 1 ? 'My Cart' : 'Checkout'}
            </h4>

            <Stepper
              currentStep={cartStep}
              onStepChange={setCartStep}
              steps={[{ label: 'My Cart' }, { label: 'Payment Method' }]}
            />
          </div>
        )}

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={cartStep}
            timeout={300}
            nodeRef={nodeRef}
            unmountOnExit
            classNames={{
              enter: 'opacity-0',
              enterActive: '!opacity-100 transition-opacity duration-300',
              exit: 'opacity-100',
              exitActive: '!opacity-0 transition-opacity duration-300',
            }}
          >
            <div className="contents" ref={nodeRef}>
              {cartStep === 1 && <Step1 />}

              {cartStep === 2 && <Step2 />}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </CartButton>
  );
};
