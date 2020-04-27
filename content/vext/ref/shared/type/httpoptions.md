---
title: HttpOptions
---

Allows configuration of additional options for when sending an HTTP request.

## Summary

### Constructors

|  |
| --- |
| **[HttpOptions](#constructor-0)**(headers: table = {}, timeout: int = 30) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "timeout" >}} | int |
| {{< prop "verifyCertificate" >}} | bool |
| {{< prop "headers" true >}} | table |

### Methods

| Method | Returns |
| ------ | ------- |
| **[SetHeader](#setheader)**(header: string, value: string) | void |
| **[RemoveHeader](#removeheader)**(header: string) | void |
| **[GetHeader](#getheader)**(header: string) | string |
| **[HasHeader](#hasheader)**(header: string) | bool |

## Constructors

### HttpOptions {#constructor-0}

> **HttpOptions**(headers: table = {}, timeout: int = 30)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **headers** | table | An associative table containing the request headers. |
| **timeout** | int | The connection timeout in seconds. |

## Properties

### {{% prop-heading "timeout" %}}

> **int**

The connection timeout in seconds.

### {{% prop-heading "verifyCertificate" %}}

> **bool**

Whether to verify the remote SSL certificate. Defaults to `true`. Changing it to `false` is **not** recommended.

### {{% prop-heading "headers" true %}}

> **table**

An associative table containing the request headers.

## Methods

### SetHeader {#setheader}

> **SetHeader**(header: string, value: string)

Sets the value of the header with the specified name. The `User-Agent` header **cannot** be set.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **header** | string | The case-insensitive header name (eg. `Content-Type`). |
| **value** | string | The header value (eg. `application/json`). |

### RemoveHeader {#removeheader}

> **RemoveHeader**(header: string)

Removes the header with the specified name. The `User-Agent` header **cannot** be removed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **header** | string | The case-insensitive header name (eg. `Content-Type`). |

### GetHeader {#getheader}

> **GetHeader**(header: string): string

Returns the value of a header with the specified name. If the header is not found it returns an empty string.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **header** | string | The case-insensitive header name (eg. `Content-Type`). |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |

### HasHeader {#hasheader}

> **HasHeader**(header: string): bool

Checks if a header with the specified name exists.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **header** | string | The case-insensitive header name (eg. `Content-Type`). |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

