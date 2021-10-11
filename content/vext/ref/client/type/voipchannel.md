---
title: VoipChannel
---

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" true >}} | string |
| {{< prop "defaultEmitterType" true >}} | [VoipEmitterType](/vext/ref/shared/type/voipemittertype) |
| {{< prop "players" true >}} | [Player](/vext/ref/client/type/player){} |
| {{< prop "emitters" true >}} | [VoipEmitter](/vext/ref/client/type/voipemitter){} |
| {{< prop "transmissionMode" >}} | [VoipTransmissionMode](/vext/ref/shared/type/voiptransmissionmode) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[StartTransmitting](#starttransmitting)**() | void |
| **[StopTransmitting](#stoptransmitting)**() | void |
| **[GetEmitter](#getemitter)**(player: [Player](/vext/ref/client/type/player)) | [VoipEmitter](/vext/ref/client/type/voipemitter) \| nil |

## Properties

### {{% prop-heading "name" true %}}

> **string**

### {{% prop-heading "defaultEmitterType" true %}}

> **[VoipEmitterType](/vext/ref/shared/type/voipemittertype)**

The type of emitter that will be created by default when a new player is added to this channel.

### {{% prop-heading "players" true %}}

> **[Player](/vext/ref/client/type/player)**{}

The players that are in this channel.

### {{% prop-heading "emitters" true %}}

> **[VoipEmitter](/vext/ref/client/type/voipemitter)**{}

The emitters for all the players that are in this channel. Each emitter has a one-to-one relationship with a player.

### {{% prop-heading "transmissionMode" %}}

> **[VoipTransmissionMode](/vext/ref/shared/type/voiptransmissionmode)**

The transmission mode to use when the local player is in this channel. Defaults to `PushToTalk`.

## Methods

### StartTransmitting {#starttransmitting}

> **StartTransmitting**()

Starts transmitting voice through this channel. This only works if the local player is in the channel and the transmission mode of this channel is set to `PushToTalk`.

### StopTransmitting {#stoptransmitting}

> **StopTransmitting**()

Stops transmitting voice through this channel. This only works if the local player is in the channel and the transmission mode of this channel is set to `PushToTalk`.

### GetEmitter {#getemitter}

> **GetEmitter**(player: [Player](/vext/ref/client/type/player)): [VoipEmitter](/vext/ref/client/type/voipemitter) \| nil

Gets the VoIP emitter of the provided player. If the player is not in this channel, this method returns `nil`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/client/type/player) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VoipEmitter](/vext/ref/client/type/voipemitter)** \| **nil** |  |

