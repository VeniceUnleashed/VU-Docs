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
| **[SendUnreliableTo](#sendunreliableto)**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any) | void |
| **[SendUnreliableToLocal](#sendunreliabletolocal)**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any) | void |
| **[BroadcastUnreliable](#broadcastunreliable)**(eventName: string, ...args: any) | void |
| **[BroadcastUnreliableLocal](#broadcastunreliablelocal)**(eventName: string, ...args: any) | void |
| **[SendUnreliableOrderedTo](#sendunreliableorderedto)**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any) | void |
| **[SendUnreliableOrderedToLocal](#sendunreliableorderedtolocal)**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any) | void |
| **[BroadcastUnreliableOrdered](#broadcastunreliableordered)**(eventName: string, ...args: any) | void |
| **[BroadcastUnreliableOrderedLocal](#broadcastunreliableorderedlocal)**(eventName: string, ...args: any) | void |
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

### SendUnreliableTo {#sendunreliableto}

> **SendUnreliableTo**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| ...**args** | any |  |

### SendUnreliableToLocal {#sendunreliabletolocal}

> **SendUnreliableToLocal**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| ...**args** | any |  |

### BroadcastUnreliable {#broadcastunreliable}

> **BroadcastUnreliable**(eventName: string, ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| ...**args** | any |  |

### BroadcastUnreliableLocal {#broadcastunreliablelocal}

> **BroadcastUnreliableLocal**(eventName: string, ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| ...**args** | any |  |

### SendUnreliableOrderedTo {#sendunreliableorderedto}

> **SendUnreliableOrderedTo**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| ...**args** | any |  |

### SendUnreliableOrderedToLocal {#sendunreliableorderedtolocal}

> **SendUnreliableOrderedToLocal**(eventName: string, player: [Player](/vext/ref/server/type/player), ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| ...**args** | any |  |

### BroadcastUnreliableOrdered {#broadcastunreliableordered}

> **BroadcastUnreliableOrdered**(eventName: string, ...args: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| ...**args** | any |  |

### BroadcastUnreliableOrderedLocal {#broadcastunreliableorderedlocal}

> **BroadcastUnreliableOrderedLocal**(eventName: string, ...args: any)

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

