---
title: Soldier:Damage
---

> **Soldier:Damage**(soldier: [SoldierEntity](/vext/ref/server/type/soldierentity), info: [DamageInfo](/vext/ref/server/type/damageinfo), giverInfo: [DamageGiverInfo](/vext/ref/server/type/damagegiverinfo) \| nil)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **soldier**{{< hook-ro >}} | [SoldierEntity](/vext/ref/server/type/soldierentity) |  |
| **info** | [DamageInfo](/vext/ref/server/type/damageinfo) |  |
| **giverInfo**{{< hook-ro >}} | [DamageGiverInfo](/vext/ref/server/type/damagegiverinfo) \| nil |  |

## Example

```lua
Hooks:Install('Soldier:Damage', 1, function(hook, soldier, info, giverInfo)
    -- Do stuff here.
end)
```
