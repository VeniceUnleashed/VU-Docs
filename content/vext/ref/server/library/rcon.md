---
title: RCON
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[SendCommand](#sendcommand)**(command: string) | string{} |
| **[SendCommand](#sendcommand-1)**(command: string, args: string{}) | string{} |
| **[RegisterCommand](#registercommand)**(command: string, flags: [RemoteCommandFlag](/vext/ref/shared/type/remotecommandflag), callback: callable) | int |
| **[RegisterCommand](#registercommand-1)**(command: string, flags: [RemoteCommandFlag](/vext/ref/shared/type/remotecommandflag), context: any, callback: callable) | int |
| **[DeregisterCommand](#deregistercommand)**(handle: int) | void |
| **[GetServerGuid](#getserverguid)**() | [Guid](/vext/ref/shared/type/guid) \| nil |
| **[TriggerEvent](#triggerevent)**(event: string) | void |
| **[TriggerEvent](#triggerevent-1)**(event: string, args: string{}) | void |

## Methods

### SendCommand {#sendcommand}

> **SendCommand**(command: string): string{}

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **command** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string**{} |  |

### SendCommand {#sendcommand-1}

> **SendCommand**(command: string, args: string{}): string{}

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **command** | string |  |
| **args** | string{} |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string**{} |  |

### RegisterCommand {#registercommand}

> **RegisterCommand**(command: string, flags: [RemoteCommandFlag](/vext/ref/shared/type/remotecommandflag), callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **command** | string |  |
| **flags** | [RemoteCommandFlag](/vext/ref/shared/type/remotecommandflag) |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterCommand {#registercommand-1}

> **RegisterCommand**(command: string, flags: [RemoteCommandFlag](/vext/ref/shared/type/remotecommandflag), context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **command** | string |  |
| **flags** | [RemoteCommandFlag](/vext/ref/shared/type/remotecommandflag) |  |
| **context** | any |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### DeregisterCommand {#deregistercommand}

> **DeregisterCommand**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### GetServerGuid {#getserverguid}

> **GetServerGuid**(): [Guid](/vext/ref/shared/type/guid) \| nil

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Guid](/vext/ref/shared/type/guid)** \| **nil** |  |

### TriggerEvent {#triggerevent}

> **TriggerEvent**(event: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **event** | string |  |

### TriggerEvent {#triggerevent-1}

> **TriggerEvent**(event: string, args: string{})

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **event** | string |  |
| **args** | string{} |  |

