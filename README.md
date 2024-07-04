# API-PASSWORD-GENERATOR

API Web para generación de contraseñas. Las contraseñas se pueden configurar para que tenga una longitud específica, si debe aceptar letras mayúsculas o minúsculas, símbolos y números.

Las contraseñas generadas no se guardan en ninguna base de datos.

## DOCUMENTACIÓN

### `POST - /api/passwords`

#### Cuerpo de Solicitud

```json
{
  "length": number, // [OBLIGATORIO] Longitud de la contraseña (min: 8, max: 50)
  "lower": boolean, // [NO OBLIGTORIO] `true` para aceptar letras minúsculas
  "upper": boolean, // [NO OBLIGATORIO] `true` para aceptar letras mayúsculas
  "symbol": boolean, // [NO OBLIGATORIO] `true` para aceptar carácteres simbólicos
  "number": boolean, // [NO OBLIGATORIO] `true` para aceptar carácteres numéricos
}
```

*NOTA: ¡Debe tener por lo menos un tipo de carácter en `true` (`"lower"`, `"upper"`, `"symbol"` o `"number"`)!*

#### Solicitud Correcta

```json
{
  "password": "S]HL!nGIT¡[IHkD;C66V-w#aSTT9-8d=YqaQS]cP%3^Pn=^YT7"
}
```

#### Solicitud Incorrecta - No se indica longitud de contraseña

```json
{
  "message": "La longitud de la contraseña es requerida",
  "statusCode": 400
}
```

#### Solicitud Incorrecta - Longitud de contraseña fuera de rango

```json
{
  "message": "La longitud de la contraseña debe ser entre 8 y 50",
  "statusCode": 400
}
```

#### Solicitud Incorrecta - Sin elementos para generar contraseña

```json
{
  "message": "La configuración debe tener por lo menos un elemento entre letras mayúsculas o minúsculas, símbolos o números",
  "statusCode": 400
}
```