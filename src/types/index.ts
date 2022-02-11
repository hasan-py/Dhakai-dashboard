export interface loginPayloadInterface {
  auth: {
    email: string;
    deviceUuid: string;
  };
  password: string;
}

export interface authReduxInterface {
  token: string;
  refreshToken: string;
  expiresAt: string;
}
