---
title: VoipChannel
---

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" true >}} | string |
| {{< prop "defaultEmitterType" true >}} | [VoipEmitterType](/vext/ref/shared/type/voipemittertype) |
| {{< prop "players" true >}} | [Player](/vext/ref/server/type/player){} |

### Methods

| Method | Returns |
| ------ | ------- |
| **[AddPlayer](#addplayer)**(player: [Player](/vext/ref/server/type/player)) | void |
| **[RemovePlayer](#removeplayer)**(player: [Player](/vext/ref/server/type/player)) | void |
| **[Close](#close)**() | void |

## Properties

### {{% prop-heading "name" true %}}

> **string**

### {{% prop-heading "defaultEmitterType" true %}}

> **[VoipEmitterType](/vext/ref/shared/type/voipemittertype)**

### {{% prop-heading "players" true %}}

> **[Player](/vext/ref/server/type/player)**{}

The players that are in this channel.

## Methods

### AddPlayer {#addplayer}

> **AddPlayer**(player: [Player](/vext/ref/server/type/player))

Adds a player to this VoIP channel and informs all connected clients.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |

### RemovePlayer {#removeplayer}

> **RemovePlayer**(player: [Player](/vext/ref/server/type/player))

Removes a player to this VoIP channel and informs all connected clients.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |

### Close {#close}

> **Close**()

Closes this channel and informs all connected clients.

