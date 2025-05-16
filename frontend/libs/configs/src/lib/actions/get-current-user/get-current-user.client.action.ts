'use client';

import { useLazyQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../api';

export const useCurrentUser = () => {
  const response = useLazyQuery(GET_CURRENT_USER);

  return response;
};
