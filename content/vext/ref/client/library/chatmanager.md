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

## Methods

### SendMessage {#sendmessage}

> **SendMessage**(message: string): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **message** | string |  |

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
| **message** | string |  |
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
| **message** | string |  |
| **toTeam** | [TeamId](/vext/ref/fb/teamid) |  |
| **toSquad** | [SquadId](/vext/ref/fb/squadid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

