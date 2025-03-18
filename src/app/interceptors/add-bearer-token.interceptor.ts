import { HttpInterceptorFn } from '@angular/common/http';

export const addBearerTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const bearerToken = "token";

  // Añadimos el token Bearer a la peticion
  req.headers.set('Authorization', 'Bearer ' + bearerToken);

  // Clonar la solicitud y agregar el encabezado Authorization
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${bearerToken}`
    }
  });

  // Continuar con la solicitud modificada
  return next(modifiedReq);
};
