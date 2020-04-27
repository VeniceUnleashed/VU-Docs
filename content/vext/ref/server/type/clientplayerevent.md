---
title: ClientPlayerEvent
---

Inherits from [EntityEvent](/vext/ref/shared/type/entityevent)

## Summary

### Constructors

|  |
| --- |
| **[ClientPlayerEvent](#constructor-0)**(eventId: int, player: [Player](/vext/ref/server/type/player), sendToPlayerOnly: bool, sendToHostOnly: bool, sendToTeamOnly: bool, invertPlayerFilter: bool, invertTeamFilter: bool, forwardToSpectators: bool, team: [TeamId](/vext/ref/fb/teamid)) |
| **[ClientPlayerEvent](#constructor-1)**(eventName: string, player: [Player](/vext/ref/server/type/player), sendToPlayerOnly: bool, sendToHostOnly: bool, sendToTeamOnly: bool, invertPlayerFilter: bool, invertTeamFilter: bool, forwardToSpectators: bool, team: [TeamId](/vext/ref/fb/teamid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "player" >}} | [Player](/vext/ref/server/type/player) |
| {{< prop "sendToPlayerOnly" >}} | bool |
| {{< prop "sendToHostOnly" >}} | bool |
| {{< prop "sendToTeamOnly" >}} | bool |
| {{< prop "invertPlayerFilter" >}} | bool |
| {{< prop "invertTeamFilter" >}} | bool |
| {{< prop "forwardToSpectators" >}} | bool |
| {{< prop "team" >}} | [TeamId](/vext/ref/fb/teamid) |

## Constructors

### ClientPlayerEvent {#constructor-0}

> **ClientPlayerEvent**(eventId: int, player: [Player](/vext/ref/server/type/player), sendToPlayerOnly: bool, sendToHostOnly: bool, sendToTeamOnly: bool, invertPlayerFilter: bool, invertTeamFilter: bool, forwardToSpectators: bool, team: [TeamId](/vext/ref/fb/teamid))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventId** | int |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **sendToPlayerOnly** | bool |  |
| **sendToHostOnly** | bool |  |
| **sendToTeamOnly** | bool |  |
| **invertPlayerFilter** | bool |  |
| **invertTeamFilter** | bool |  |
| **forwardToSpectators** | bool |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

### ClientPlayerEvent {#constructor-1}

> **ClientPlayerEvent**(eventName: string, player: [Player](/vext/ref/server/type/player), sendToPlayerOnly: bool, sendToHostOnly: bool, sendToTeamOnly: bool, invertPlayerFilter: bool, invertTeamFilter: bool, forwardToSpectators: bool, team: [TeamId](/vext/ref/fb/teamid))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **sendToPlayerOnly** | bool |  |
| **sendToHostOnly** | bool |  |
| **sendToTeamOnly** | bool |  |
| **invertPlayerFilter** | bool |  |
| **invertTeamFilter** | bool |  |
| **forwardToSpectators** | bool |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

## Properties

### {{% prop-heading "player" %}}

> **[Player](/vext/ref/server/type/player)**

### {{% prop-heading "sendToPlayerOnly" %}}

> **bool**

### {{% prop-heading "sendToHostOnly" %}}

> **bool**

### {{% prop-heading "sendToTeamOnly" %}}

> **bool**

### {{% prop-heading "invertPlayerFilter" %}}

> **bool**

### {{% prop-heading "invertTeamFilter" %}}

> **bool**

### {{% prop-heading "forwardToSpectators" %}}

> **bool**

### {{% prop-heading "team" %}}

> **[TeamId](/vext/ref/fb/teamid)**

