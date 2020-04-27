---
title: Soldier:PrePhysicsUpdate
---

> **Soldier:PrePhysicsUpdate**(soldier: [SoldierEntity](/vext/ref/server/type/soldierentity), deltaTime: float)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **soldier** | [SoldierEntity](/vext/ref/server/type/soldierentity) |  |
| **deltaTime** | float |  |

## Example

```lua
Events:Subscribe('Soldier:PrePhysicsUpdate', function(soldier, deltaTime)
    -- Do stuff here.
end)
```
