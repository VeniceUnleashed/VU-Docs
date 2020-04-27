---
title: HttpResponse
---

Represents an HTTP response received from a remote server.

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "status" true >}} | int |
| {{< prop "body" true >}} | string |
| {{< prop "headers" >}} | table |

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetHeader](#getheader)**(header: string) | string |
| **[HasHeader](#hasheader)**(header: string) | bool |

## Properties

### {{% prop-heading "status" true %}}

> **int**

The HTTP status of the response.

### {{% prop-heading "body" true %}}

> **string**

A string containing the response body data.

### {{% prop-heading "headers" %}}

> **table**

An associative table containing all the response headers.

## Methods

### GetHeader {#getheader}

> **GetHeader**(header: string): string

Gets the value of a header with the specified name from the HTTP response. If the header is not found it returns an empty string.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **header** | string | The header name (eg. `Content-Type`). |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |

### HasHeader {#hasheader}

> **HasHeader**(header: string): bool

Checks if a header with the specified name exists in the HTTP response.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **header** | string | The header name (eg. `Content-Type`). |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

