---
title: Voip
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[IsAvailable](#isavailable)**() | bool |
| **[GetChannel](#getchannel)**(channelName: string) | [VoipChannel](/vext/ref/client/type/voipchannel) \| nil |
| **[GetChannels](#getchannels)**() | [VoipChannel](/vext/ref/client/type/voipchannel){} |
| **[GetEmitters](#getemitters)**() | [VoipEmitter](/vext/ref/client/type/voipemitter){} |

## Methods

### IsAvailable {#isavailable}

> **IsAvailable**(): bool

Returns `true` if the client has VoIP capabilities (eg. they have a microphone).

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### GetChannel {#getchannel}

> **GetChannel**(channelName: string): [VoipChannel](/vext/ref/client/type/voipchannel) \| nil

Get a VoIP channel with the given name (if one exists).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **channelName** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VoipChannel](/vext/ref/client/type/voipchannel)** \| **nil** |  |

### GetChannels {#getchannels}

> **GetChannels**(): [VoipChannel](/vext/ref/client/type/voipchannel){}

Gets all available VoIP channels.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VoipChannel](/vext/ref/client/type/voipchannel)**{} |  |

### GetEmitters {#getemitters}

> **GetEmitters**(): [VoipEmitter](/vext/ref/client/type/voipemitter){}

Gets all VoIP emitters from all available channels.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VoipEmitter](/vext/ref/client/type/voipemitter)**{} |  |

