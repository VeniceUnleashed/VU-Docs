---
title: ServerDoublePlayerEvent
---

Inherits from [ServerPlayerEvent](/vext/ref/server/type/serverplayerevent)

## Summary

### Constructors

|  |
| --- |
| **[ServerDoublePlayerEvent](#constructor-0)**(eventId: int, player: [Player](/vext/ref/server/type/player), extraPlayer: [Player](/vext/ref/server/type/player), sendToPlayerOnly: bool, sendToHostOnly: bool, sendToTeamOnly: bool, invertPlayerFilter: bool, invertTeamFilter: bool, forwardToSpectators: bool, team: [TeamId](/vext/ref/fb/teamid)) |
| **[ServerDoublePlayerEvent](#constructor-1)**(eventName: string, player: [Player](/vext/ref/server/type/player), extraPlayer: [Player](/vext/ref/server/type/player), sendToPlayerOnly: bool, sendToHostOnly: bool, sendToTeamOnly: bool, invertPlayerFilter: bool, invertTeamFilter: bool, forwardToSpectators: bool, team: [TeamId](/vext/ref/fb/teamid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "extraPlayer" >}} | [Player](/vext/ref/server/type/player) |

## Constructors

### ServerDoublePlayerEvent {#constructor-0}

> **ServerDoublePlayerEvent**(eventId: int, player: [Player](/vext/ref/server/type/player), extraPlayer: [Player](/vext/ref/server/type/player), sendToPlayerOnly: bool, sendToHostOnly: bool, sendToTeamOnly: bool, invertPlayerFilter: bool, invertTeamFilter: bool, forwardToSpectators: bool, team: [TeamId](/vext/ref/fb/teamid))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventId** | int |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **extraPlayer** | [Player](/vext/ref/server/type/player) |  |
| **sendToPlayerOnly** | bool |  |
| **sendToHostOnly** | bool |  |
| **sendToTeamOnly** | bool |  |
| **invertPlayerFilter** | bool |  |
| **invertTeamFilter** | bool |  |
| **forwardToSpectators** | bool |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

### ServerDoublePlayerEvent {#constructor-1}

> **ServerDoublePlayerEvent**(eventName: string, player: [Player](/vext/ref/server/type/player), extraPlayer: [Player](/vext/ref/server/type/player), sendToPlayerOnly: bool, sendToHostOnly: bool, sendToTeamOnly: bool, invertPlayerFilter: bool, invertTeamFilter: bool, forwardToSpectators: bool, team: [TeamId](/vext/ref/fb/teamid))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **extraPlayer** | [Player](/vext/ref/server/type/player) |  |
| **sendToPlayerOnly** | bool |  |
| **sendToHostOnly** | bool |  |
| **sendToTeamOnly** | bool |  |
| **invertPlayerFilter** | bool |  |
| **invertTeamFilter** | bool |  |
| **forwardToSpectators** | bool |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

## Properties

### {{% prop-heading "extraPlayer" %}}

> **[Player](/vext/ref/server/type/player)**

