---
title: Events
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[Subscribe](#subscribe)**(eventName: string, callback: callable) | [Event](/vext/ref/shared/type/event) |
| **[Subscribe](#subscribe-1)**(eventName: string, context: any, callback: callable) | [Event](/vext/ref/shared/type/event) |
| **[Dispatch](#dispatch)**(eventName: string, ...args: any) | void |
| **[DispatchLocal](#dispatchlocal)**(eventName: string, ...args: any) | void |
| **[Unsubscribe](#unsubscribe)**() | void |
| **[Unsubscribe](#unsubscribe-1)**(eventName: string) | void |

## Methods

### Subscribe {#subscribe}

> **Subscribe**(eventName: string, callback: callable): [Event](/vext/ref/shared/type/event)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Event](/vext/ref/shared/type/event)** |  |

### Subscribe {#subscribe-1}

> **Subscribe**(eventName: string, context: any, callback: callable): [Event](/vext/ref/shared/type/event)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **context** | any |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Event](/vext/ref/shared/type/event)** |  |

### Dispatch {#dispatch}

> **Dispatch**(eventName: string, ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| ...**args** | any |  |

### DispatchLocal {#dispatchlocal}

> **DispatchLocal**(eventName: string, ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| ...**args** | any |  |

### Unsubscribe {#unsubscribe}

> **Unsubscribe**()

### Unsubscribe {#unsubscribe-1}

> **Unsubscribe**(eventName: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |

