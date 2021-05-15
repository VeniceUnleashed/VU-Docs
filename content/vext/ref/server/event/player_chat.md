---
title: Player:Chat
---

> **Player:Chat**(player: [Player](/vext/ref/server/type/player) \| nil, recipientMask: int, message: string)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) \| nil |  |
| **recipientMask** | int |  |
| **message** | string |  |

## Example

```lua
Events:Subscribe('Player:Chat', function(player, recipientMask, message)
    -- Do stuff here.
end)
```
