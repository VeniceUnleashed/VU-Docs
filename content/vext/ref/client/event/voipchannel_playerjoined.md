---
title: VoipChannel:PlayerJoined
---

> **VoipChannel:PlayerJoined**(channel: [VoipChannel](/vext/ref/client/type/voipchannel), player: [Player](/vext/ref/client/type/player), emitter: [VoipEmitter](/vext/ref/client/type/voipemitter))

A player has joined a VoIP channel and a new emitter has been created for them. This event will also trigger as soon as the player joins a server with existing channels and players in them.

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **channel** | [VoipChannel](/vext/ref/client/type/voipchannel) |  |
| **player** | [Player](/vext/ref/client/type/player) |  |
| **emitter** | [VoipEmitter](/vext/ref/client/type/voipemitter) |  |

## Example

```lua
Events:Subscribe('VoipChannel:PlayerJoined', function(channel, player, emitter)
    -- Do stuff here.
end)
```
