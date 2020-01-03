---
title: NetEvents
---
## Description

## Methods

| Type                                      | Name                              | Parameters                                                                    |
| ----------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------- |
| [NetEvent](/vext/ref/server/class/netevent) | [Subscribe](#subscribe)           | string **message**, function **callback**                                     |
| [NetEvent](/vext/ref/server/class/netevent) | [Subscribe](#subscribe)           | string **message**, object **obj**, function **callback**                     |
| void                                      | [SendTo](#sendto)                 | string **message**, [Player](/vext/ref/server/class/player) **player**, ...args |
| void                                      | [SendToLocal](#sendtolocal)       | string **message**, [Player](/vext/ref/server/class/player) **player**, ...args |
| void                                      | [Broadcast](#broadcast)           | string **message**, ...args                                                   |
| void                                      | [BroadcastLocal](#broadcastlocal) | string **message**, ...args                                                   |
| void                                      | [Unsubscribe](#unsubscribe)       |                                                                               |
| void                                      | [Unsubscribe](#unsubscribe)       | string **match**                                                              |

### Subscribe

> [NetEvent](/vext/ref/server/class/netevent) **Subscribe**(string **message**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| message  | string   |             |
| callback | function |             |

### Subscribe

> [NetEvent](/vext/ref/server/class/netevent) **Subscribe**(string **message**, object **obj**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| message  | string   |             |
| obj      | object   |             |
| callback | function |             |

### SendTo

> void **SendTo**(string **message**, [Player](/vext/ref/server/class/player) **player**, ...args)

#### Parameters

| Name    | Type                                  | Description |
| ------- | ------------------------------------- | ----------- |
| message | string                                |             |
| player  | [Player](/vext/ref/server/class/player) |             |
| args    |                                       |             |

### SendToLocal

> void **SendToLocal**(string **message**, [Player](/vext/ref/server/class/player) **player**, ...args)

#### Parameters

| Name    | Type                                  | Description |
| ------- | ------------------------------------- | ----------- |
| message | string                                |             |
| player  | [Player](/vext/ref/server/class/player) |             |
| args    |                                       |             |

### Broadcast

> void **Broadcast**(string **message**, ...args)

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| message | string |             |
| args    |        |             |

### BroadcastLocal

> void **BroadcastLocal**(string **message**, ...args)

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| message | string |             |
| args    |        |             |

### Unsubscribe

> void **Unsubscribe**()

### Unsubscribe

> void **Unsubscribe**(string **match**)

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| match | string |             |
