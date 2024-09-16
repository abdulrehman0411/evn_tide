'use client';

// React Imports
import { FC, Fragment } from 'react';

// React Query Imports
import { UserLoginMutationHook } from '@/services/react-query-client/auth/user-login';

// Custom Component Imports
import { Button } from '@/components/ui/button';

interface ISignInViewProps {}

const SignInView: FC<ISignInViewProps> = () => {
  const { mutateAsync } = UserLoginMutationHook();

  /**
   * @description Handles the login process for the user
   *
   * @returns {void}
   */
  const handleLogin = async (): Promise<void> => {
    mutateAsync({
      email: 'aliraza@zenkoders.com',
      password: '123123',
    });
  };
  return (
    <Fragment>
      <div className='h-full flex justify-center items-center '>
        <Button variant={'outline'}>ShadCn Button</Button>
      </div>
    </Fragment>
  );
};

export default SignInView;
