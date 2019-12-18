---
title: HttpOptions (Shared Class)
---
## Description

Allows configuration of additional options for when sending an HTTP request.

## Constructors

| Constructor                                                                              | Description |
| ---------------------------------------------------------------------------------------- | ----------- |
| [HttpOptions](/vext/ref/cls/shr/httpoptions)()                                        |             |
| [HttpOptions](/vext/ref/cls/shr/httpoptions)(table **headers**, int **timeout** = 30) |             |

## Properties

| Name              | Type  | Writable | Description                                                                            |
| ----------------- | ----- | -------- | -------------------------------------------------------------------------------------- |
| timeout           | int   | Y        | The connection timeout in seconds.                                                     |
| verifyCertificate | bool  | Y        | Whether to verify the remote SSL certificate. Defaults to `true` (highly recommended). |
| headers           | table | N        | A table containing all the request headers.                                            |

## Methods

| Type   | Name                          | Parameters                      |
| ------ | ----------------------------- | ------------------------------- |
| void   | [SetHeader](#setheader)       | string **key**, sting **value** |
| void   | [RemoveHeader](#removeheader) | string **key**                  |
| string | [GetHeader](#getheader)       | string **key**                  |
| bool   | [HasHeader](#hasheader)       | string **key**                  |

### SetHeader

> void **SetHeader**(string **key**, sting **value**)

Sets the value of the header with the specified key. The `User-Agent` header **cannot** be set.

#### Parameters

| Name  | Type   | Description                                            |
| ----- | ------ | ------------------------------------------------------ |
| key   | string | The case-insensitive header key (i.e. `Content-Type`). |
| value | sting  | The header value (i.e. `application/json`).            |

### RemoveHeader

> void **RemoveHeader**(string **key**)

Removes the header with the specified key. The `User-Agent` header **cannot** be removed.

#### Parameters

| Name | Type   | Description                                            |
| ---- | ------ | ------------------------------------------------------ |
| key  | string | The case-insensitive header key (i.e. `Content-Type`). |

### GetHeader

> string **GetHeader**(string **key**)

Returns the value of a header with the specified key. If the header is not found it returns an empty string.

#### Parameters

| Name | Type   | Description                                            |
| ---- | ------ | ------------------------------------------------------ |
| key  | string | The case-insensitive header key (i.e. `Content-Type`). |

### HasHeader

> bool **HasHeader**(string **key**)

Returns true if the header with the specified key exists.

#### Parameters

| Name | Type   | Description                                            |
| ---- | ------ | ------------------------------------------------------ |
| key  | string | The case-insensitive header key (i.e. `Content-Type`). |
