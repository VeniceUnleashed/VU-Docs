---
title: NetEvents
---
## Description

## Methods

| Type                                      | Name                        | Parameters                                                |
| ----------------------------------------- | --------------------------- | --------------------------------------------------------- |
| [NetEvent](/vext/ref/client/class/netevent) | [Subscribe](#subscribe)     | string **message**, function **callback**                 |
| [NetEvent](/vext/ref/client/class/netevent) | [Subscribe](#subscribe)     | string **message**, object **obj**, function **callback** |
| void                                      | [Send](#send)               | string **message**, ...args                               |
| void                                      | [SendLocal](#sendlocal)     | string **message**, ...args                               |
| void                                      | [Unsubscribe](#unsubscribe) |                                                           |
| void                                      | [Unsubscribe](#unsubscribe) | string **match**                                          |

### Subscribe

> [NetEvent](/vext/ref/client/class/netevent) **Subscribe**(string **message**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| message  | string   |             |
| callback | function |             |

### Subscribe

> [NetEvent](/vext/ref/client/class/netevent) **Subscribe**(string **message**, object **obj**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| message  | string   |             |
| obj      | object   |             |
| callback | function |             |

### Send

> void **Send**(string **message**, ...args)

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| message | string |             |
| args    |        |             |

### SendLocal

> void **SendLocal**(string **message**, ...args)

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
