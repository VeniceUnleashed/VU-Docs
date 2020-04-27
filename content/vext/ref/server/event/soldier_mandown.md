---
title: Soldier:ManDown
---

> **Soldier:ManDown**(soldier: [SoldierEntity](/vext/ref/server/type/soldierentity), inflictor: [Player](/vext/ref/server/type/player) \| nil)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **soldier** | [SoldierEntity](/vext/ref/server/type/soldierentity) |  |
| **inflictor** | [Player](/vext/ref/server/type/player) \| nil |  |

## Example

```lua
Events:Subscribe('Soldier:ManDown', function(soldier, inflictor)
    -- Do stuff here.
end)
```
