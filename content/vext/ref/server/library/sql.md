---
title: SQL
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[Open](#open)**() | bool |
| **[Close](#close)**() | void |
| **[Query](#query)**(query: string, ...args: any) | table \| nil |
| **[Escape](#escape)**(text: string) | string |
| **[Blob](#blob)**(data: string) | [SQLBlob](/vext/ref/server/type/sqlblob) |
| **[Error](#error)**() | string |
| **[AffectedRows](#affectedrows)**() | int |
| **[LastInsertId](#lastinsertid)**() | int |

## Methods

### Open {#open}

> **Open**(): bool

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### Close {#close}

> **Close**()

### Query {#query}

> **Query**(query: string, ...args: any): table \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **query** | string |  |
| ...**args** | any |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **table** \| **nil** |  |

### Escape {#escape}

> **Escape**(text: string): string

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **text** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |

### Blob {#blob}

> **Blob**(data: string): [SQLBlob](/vext/ref/server/type/sqlblob)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SQLBlob](/vext/ref/server/type/sqlblob)** |  |

### Error {#error}

> **Error**(): string

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |

### AffectedRows {#affectedrows}

> **AffectedRows**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### LastInsertId {#lastinsertid}

> **LastInsertId**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

