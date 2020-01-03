---
title: HttpResponse
---
## Description

Represents an HTTP response received from a remote server.

## Properties

| Name    | Type   | Writable | Description                                  |
| ------- | ------ | -------- | -------------------------------------------- |
| status  | int    | N        | The HTTP status of the response.             |
| body    | string | N        | A string containing the response body data.  |
| headers | table  | N        | A table containing all the response headers. |

## Methods

| Type   | Name                    | Parameters     |
| ------ | ----------------------- | -------------- |
| string | [GetHeader](#getheader) | string **key** |
| bool   | [HasHeader](#hasheader) | string **key** |

### GetHeader

> string **GetHeader**(string **key**)

Returns the value of a header with the specified key from the HTTP response. If the header is not found it returns an empty string.

#### Parameters

| Name | Type   | Description                           |
| ---- | ------ | ------------------------------------- |
| key  | string | The header key (i.e. `Content-Type`). |

### HasHeader

> bool **HasHeader**(string **key**)

Returns true if the header with the specified key exists in the HTTP response.

#### Parameters

| Name | Type   | Description                           |
| ---- | ------ | ------------------------------------- |
| key  | string | The header key (i.e. `Content-Type`). |
