---
title: Voip
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[CreateChannel](#createchannel)**(channelName: string, defaultEmitterType: [VoipEmitterType](/vext/ref/shared/type/voipemittertype)) | [VoipChannel](/vext/ref/server/type/voipchannel) \| nil |
| **[GetChannels](#getchannels)**() | [VoipChannel](/vext/ref/server/type/voipchannel){} |

## Methods

### CreateChannel {#createchannel}

> **CreateChannel**(channelName: string, defaultEmitterType: [VoipEmitterType](/vext/ref/shared/type/voipemittertype)): [VoipChannel](/vext/ref/server/type/voipchannel) \| nil

Creates a new VoIP channel with the provided name and default emitter type. If a channel with this name already exists, this method returns `nil`. All created channels are automatically replicated to connected clients.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **channelName** | string |  |
| **defaultEmitterType** | [VoipEmitterType](/vext/ref/shared/type/voipemittertype) | The type of emitter to create by default when a new player is added to this channel. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VoipChannel](/vext/ref/server/type/voipchannel)** \| **nil** |  |

### GetChannels {#getchannels}

> **GetChannels**(): [VoipChannel](/vext/ref/server/type/voipchannel){}

Gets all available VoIP channels.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VoipChannel](/vext/ref/server/type/voipchannel)**{} |  |

