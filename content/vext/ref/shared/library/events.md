---
title: Events
---
## Description

## Methods

| Type                                | Name                            | Parameters                                                |
| ----------------------------------- | ------------------------------- | --------------------------------------------------------- |
| [Event](/vext/ref/shared/class/event) | [Subscribe](#subscribe)         | string **message**, function **callback**                 |
| [Event](/vext/ref/shared/class/event) | [Subscribe](#subscribe)         | string **message**, object **obj**, function **callback** |
| void                                | [Dispatch](#dispatch)           | string **message**, ...args                               |
| void                                | [DispatchLocal](#dispatchlocal) | string **message**, ...args                               |
| void                                | [Unsubscribe](#unsubscribe)     |                                                           |
| void                                | [Unsubscribe](#unsubscribe)     | string **match**                                          |

### Subscribe

> [Event](/vext/ref/shared/class/event) **Subscribe**(string **message**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| message  | string   |             |
| callback | function |             |

### Subscribe

> [Event](/vext/ref/shared/class/event) **Subscribe**(string **message**, object **obj**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| message  | string   |             |
| obj      | object   |             |
| callback | function |             |

### Dispatch

> void **Dispatch**(string **message**, ...args)

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| message | string |             |
| args    |        |             |

### DispatchLocal

> void **DispatchLocal**(string **message**, ...args)

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
