---
title: Player:ManDownRevived
---

> **Player:ManDownRevived**(player: [Player](/vext/ref/server/type/player), reviver: [Player](/vext/ref/server/type/player) \| nil, isAdrenalineRevive: bool)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **reviver** | [Player](/vext/ref/server/type/player) \| nil |  |
| **isAdrenalineRevive** | bool |  |

## Example

```lua
Events:Subscribe('Player:ManDownRevived', function(player, reviver, isAdrenalineRevive)
    -- Do stuff here.
end)
```
