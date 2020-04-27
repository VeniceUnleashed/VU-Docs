---
title: Soldier:HealthAction
---

> **Soldier:HealthAction**(soldier: [SoldierEntity](/vext/ref/server/type/soldierentity), action: [HealthStateAction](/vext/ref/shared/type/healthstateaction))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **soldier** | [SoldierEntity](/vext/ref/server/type/soldierentity) |  |
| **action** | [HealthStateAction](/vext/ref/shared/type/healthstateaction) |  |

## Example

```lua
Events:Subscribe('Soldier:HealthAction', function(soldier, action)
    -- Do stuff here.
end)
```
