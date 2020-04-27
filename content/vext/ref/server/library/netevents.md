---
title: NetEvents
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[Subscribe](#subscribe)**(eventName: string, callback: callable) | [NetEvent](/vext/ref/server/type/netevent) |
| **[Subscribe](#subscribe-1)**(eventName: string, context: any, callback: callable) | [NetEvent](/vext/ref/server/type/netevent) |
| **[SendTo](#sendto)**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any) | void |
| **[SendToLocal](#sendtolocal)**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any) | void |
| **[Broadcast](#broadcast)**(eventName: string, ...args: any) | void |
| **[BroadcastLocal](#broadcastlocal)**(eventName: string, ...args: any) | void |
| **[Unsubscribe](#unsubscribe)**() | void |
| **[Unsubscribe](#unsubscribe-1)**(eventName: string) | void |

## Methods

### Subscribe {#subscribe}

> **Subscribe**(eventName: string, callback: callable): [NetEvent](/vext/ref/server/type/netevent)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[NetEvent](/vext/ref/server/type/netevent)** |  |

### Subscribe {#subscribe-1}

> **Subscribe**(eventName: string, context: any, callback: callable): [NetEvent](/vext/ref/server/type/netevent)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **context** | any |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[NetEvent](/vext/ref/server/type/netevent)** |  |

### SendTo {#sendto}

> **SendTo**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| ...**args** | any |  |

### SendToLocal {#sendtolocal}

> **SendToLocal**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| ...**args** | any |  |

### Broadcast {#broadcast}

> **Broadcast**(eventName: string, ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| ...**args** | any |  |

### BroadcastLocal {#broadcastlocal}

> **BroadcastLocal**(eventName: string, ...args: any)

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

