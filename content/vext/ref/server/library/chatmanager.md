---
title: ChatManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[SendMessage](#sendmessage)**(message: string) | bool |
| **[SendMessage](#sendmessage-1)**(message: string, toTeam: [TeamId](/vext/ref/fb/teamid)) | bool |
| **[SendMessage](#sendmessage-2)**(message: string, toTeam: [TeamId](/vext/ref/fb/teamid), toSquad: [SquadId](/vext/ref/fb/squadid)) | bool |
| **[SendMessage](#sendmessage-3)**(message: string, toPlayer: [Player](/vext/ref/server/type/player)) | bool |
| **[SendMessage](#sendmessage-4)**(message: string, toPlayers: [Player](/vext/ref/server/type/player){}) | bool |
| **[Yell](#yell)**(message: string, duration: float) | bool |
| **[Yell](#yell-1)**(message: string, duration: float, toTeam: [TeamId](/vext/ref/fb/teamid)) | bool |
| **[Yell](#yell-2)**(message: string, duration: float, toTeam: [TeamId](/vext/ref/fb/teamid), toSquad: [SquadId](/vext/ref/fb/squadid)) | bool |
| **[Yell](#yell-3)**(message: string, duration: float, toPlayer: [Player](/vext/ref/server/type/player)) | bool |
| **[Yell](#yell-4)**(message: string, duration: float, toPlayers: [Player](/vext/ref/server/type/player){}) | bool |

## Methods

### SendMessage {#sendmessage}

> **SendMessage**(message: string): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 127 characters. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

#### Example

```lua
ChatManager:SendMessage('Hello players!')
```

### SendMessage {#sendmessage-1}

> **SendMessage**(message: string, toTeam: [TeamId](/vext/ref/fb/teamid)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 127 characters. |
| **toTeam** | [TeamId](/vext/ref/fb/teamid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

#### Example

```lua
ChatManager:SendMessage('Hello Team 1 players!', TeamId.Team1)
```

### SendMessage {#sendmessage-2}

> **SendMessage**(message: string, toTeam: [TeamId](/vext/ref/fb/teamid), toSquad: [SquadId](/vext/ref/fb/squadid)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 127 characters. |
| **toTeam** | [TeamId](/vext/ref/fb/teamid) |  |
| **toSquad** | [SquadId](/vext/ref/fb/squadid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### SendMessage {#sendmessage-3}

> **SendMessage**(message: string, toPlayer: [Player](/vext/ref/server/type/player)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 127 characters. |
| **toPlayer** | [Player](/vext/ref/server/type/player) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### SendMessage {#sendmessage-4}

> **SendMessage**(message: string, toPlayers: [Player](/vext/ref/server/type/player){}): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 127 characters. |
| **toPlayers** | [Player](/vext/ref/server/type/player){} |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### Yell {#yell}

> **Yell**(message: string, duration: float): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 255 characters. |
| **duration** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### Yell {#yell-1}

> **Yell**(message: string, duration: float, toTeam: [TeamId](/vext/ref/fb/teamid)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 255 characters. |
| **duration** | float |  |
| **toTeam** | [TeamId](/vext/ref/fb/teamid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### Yell {#yell-2}

> **Yell**(message: string, duration: float, toTeam: [TeamId](/vext/ref/fb/teamid), toSquad: [SquadId](/vext/ref/fb/squadid)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 255 characters. |
| **duration** | float |  |
| **toTeam** | [TeamId](/vext/ref/fb/teamid) |  |
| **toSquad** | [SquadId](/vext/ref/fb/squadid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### Yell {#yell-3}

> **Yell**(message: string, duration: float, toPlayer: [Player](/vext/ref/server/type/player)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 255 characters. |
| **duration** | float |  |
| **toPlayer** | [Player](/vext/ref/server/type/player) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### Yell {#yell-4}

> **Yell**(message: string, duration: float, toPlayers: [Player](/vext/ref/server/type/player){}): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string | Text message to send. Limited to 255 characters. |
| **duration** | float |  |
| **toPlayers** | [Player](/vext/ref/server/type/player){} |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

