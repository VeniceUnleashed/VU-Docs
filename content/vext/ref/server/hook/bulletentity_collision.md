---
title: BulletEntity:Collision
---

> **BulletEntity:Collision**(entity: [Entity](/vext/ref/shared/type/entity), hit: [RayCastHit](/vext/ref/shared/type/raycasthit), giverInfo: [DamageGiverInfo](/vext/ref/server/type/damagegiverinfo)): bool \| nil

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entity**{{< hook-ro >}} | [Entity](/vext/ref/shared/type/entity) |  |
| **hit** | [RayCastHit](/vext/ref/shared/type/raycasthit) |  |
| **giverInfo**{{< hook-ro >}} | [DamageGiverInfo](/vext/ref/server/type/damagegiverinfo) |  |

## Returns

| Type | Description |
| ---- | ----------- |
| **bool** \| **nil** |  |

## Example

```lua
Hooks:Install('BulletEntity:Collision', 1, function(hook, entity, hit, giverInfo)
    -- Do stuff here.
end)
```
