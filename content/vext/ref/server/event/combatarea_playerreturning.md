---
title: CombatArea:PlayerReturning
---

> **CombatArea:PlayerReturning**(entity: [Entity](/vext/ref/shared/type/entity), player: [Player](/vext/ref/server/type/player))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entity** | [Entity](/vext/ref/shared/type/entity) |  |
| **player** | [Player](/vext/ref/server/type/player) |  |

## Example

```lua
Events:Subscribe('CombatArea:PlayerReturning', function(entity, player)
    -- Do stuff here.
end)
```
