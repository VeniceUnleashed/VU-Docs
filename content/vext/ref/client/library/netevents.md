---
title: NetEvents
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[Subscribe](#subscribe)**(eventName: string, callback: callable) | [NetEvent](/vext/ref/client/type/netevent) |
| **[Subscribe](#subscribe-1)**(eventName: string, context: any, callback: callable) | [NetEvent](/vext/ref/client/type/netevent) |
| **[Send](#send)**(eventName: string, ...args: any) | void |
| **[SendLocal](#sendlocal)**(eventName: string, ...args: any) | void |
| **[Unsubscribe](#unsubscribe)**() | void |
| **[Unsubscribe](#unsubscribe-1)**(eventName: string) | void |

## Methods

### Subscribe {#subscribe}

> **Subscribe**(eventName: string, callback: callable): [NetEvent](/vext/ref/client/type/netevent)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[NetEvent](/vext/ref/client/type/netevent)** |  |

### Subscribe {#subscribe-1}

> **Subscribe**(eventName: string, context: any, callback: callable): [NetEvent](/vext/ref/client/type/netevent)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **context** | any |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[NetEvent](/vext/ref/client/type/netevent)** |  |

### Send {#send}

> **Send**(eventName: string, ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| ...**args** | any |  |

### SendLocal {#sendlocal}

> **SendLocal**(eventName: string, ...args: any)

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

