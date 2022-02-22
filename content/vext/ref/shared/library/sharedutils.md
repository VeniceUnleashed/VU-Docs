---
title: SharedUtils
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[Print](#print)**(data: any) | void |
| **[GetTime](#gettime)**() | int |
| **[GetTimeMS](#gettimems)**() | int |
| **[GetTimeNS](#gettimens)**() | int |
| **[IsClientModule](#isclientmodule)**() | bool |
| **[IsServerModule](#isservermodule)**() | bool |
| **[SerializeTable](#serializetable)**(table: table) | string |
| **[GetContentPackages](#getcontentpackages)**() | string{} |
| **[GetLevelName](#getlevelname)**() | string \| nil |
| **[GetCurrentGameMode](#getcurrentgamemode)**() | string \| nil |
| **[GetTickrate](#gettickrate)**() | float |
| **[GetMemoryUsage](#getmemoryusage)**() | int |

## Methods

### Print {#print}

> **Print**(data: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | any |  |

### GetTime {#gettime}

> **GetTime**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### GetTimeMS {#gettimems}

> **GetTimeMS**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### GetTimeNS {#gettimens}

> **GetTimeNS**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### IsClientModule {#isclientmodule}

> **IsClientModule**(): bool

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### IsServerModule {#isservermodule}

> **IsServerModule**(): bool

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### SerializeTable {#serializetable}

> **SerializeTable**(table: table): string

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **table** | table |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |

### GetContentPackages {#getcontentpackages}

> **GetContentPackages**(): string{}

#### Returns

| Type | Description |
| ---- | ----------- |
| **string**{} |  |

### GetLevelName {#getlevelname}

> **GetLevelName**(): string \| nil

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** \| **nil** |  |

### GetCurrentGameMode {#getcurrentgamemode}

> **GetCurrentGameMode**(): string \| nil

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** \| **nil** |  |

### GetTickrate {#gettickrate}

> **GetTickrate**(): float

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### GetMemoryUsage {#getmemoryusage}

> **GetMemoryUsage**(): int

Gets the current memory usage of this mod in bytes.

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

