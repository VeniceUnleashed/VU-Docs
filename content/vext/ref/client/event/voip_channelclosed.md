---
title: Voip:ChannelClosed
---

> **Voip:ChannelClosed**(channel: [VoipChannel](/vext/ref/client/type/voipchannel))

A VoIP channel has been closed by the server.

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **channel** | [VoipChannel](/vext/ref/client/type/voipchannel) |  |

## Example

```lua
Events:Subscribe('Voip:ChannelClosed', function(channel)
    -- Do stuff here.
end)
```
