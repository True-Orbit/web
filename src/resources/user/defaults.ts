import { defaultContext as BaseDefaultContext } from '@/resources/base';

export const defaultUser = {
  email: '',
  firstName: '',
  lastName: '',
  profileUrl: '',
  handle: '',
  avatar: '',
}

export const defaultContext = {
  ...BaseDefaultContext,
  users: {},
  user: { ...defaultUser },
}