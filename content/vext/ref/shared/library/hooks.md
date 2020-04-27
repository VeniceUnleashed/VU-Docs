---
title: Hooks
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[Install](#install)**(hookName: string, priority: int, callback: callable) | [Hook](/vext/ref/shared/type/hook) |
| **[Install](#install-1)**(hookName: string, priority: int, context: any, callback: callable) | [Hook](/vext/ref/shared/type/hook) |

## Methods

### Install {#install}

> **Install**(hookName: string, priority: int, callback: callable): [Hook](/vext/ref/shared/type/hook)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **hookName** | string |  |
| **priority** | int |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Hook](/vext/ref/shared/type/hook)** |  |

### Install {#install-1}

> **Install**(hookName: string, priority: int, context: any, callback: callable): [Hook](/vext/ref/shared/type/hook)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **hookName** | string |  |
| **priority** | int |  |
| **context** | any |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Hook](/vext/ref/shared/type/hook)** |  |

