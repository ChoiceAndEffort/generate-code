import instance from './index';

instance.post('/aas/v1/account/staffPasswordlogin', {
  clientType: 0,
  loginPwd: '0123456',
  mobile: '18824399959'
});
