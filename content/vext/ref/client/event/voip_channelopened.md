---
title: Voip:ChannelOpened
---

> **Voip:ChannelOpened**(channel: [VoipChannel](/vext/ref/client/type/voipchannel))

A new VoIP channel has been opened by the server. This event will also trigger as soon as the player joins a server with existing channels open.

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **channel** | [VoipChannel](/vext/ref/client/type/voipchannel) |  |

## Example

```lua
Events:Subscribe('Voip:ChannelOpened', function(channel)
    -- Do stuff here.
end)
```
