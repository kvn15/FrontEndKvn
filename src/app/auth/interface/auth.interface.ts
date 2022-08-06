export interface Auth {
  sUser:     string;
  sPassword: string;
}

export interface AuthResponse {
  state:   boolean;
  data?:    Authentication | null;
  mensage: null;
}

export interface Authentication {
  sUser: string;
  token: string;
}

export interface Usuario {
  nIdUsuario?: number;
  sUser?: string;
  sNameUser?: string | null;
  nIdPersonal?: number;
  nTipoUser?: number;
  state: boolean
}
