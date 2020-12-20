---
title: BulletEntity:Collision
---

> **BulletEntity:Collision**(entity: [Entity](/vext/ref/shared/type/entity), hit: [RayCastHit](/vext/ref/shared/type/raycasthit), giverInfo: [DamageGiverInfo](/vext/ref/server/type/damagegiverinfo))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entity**{{< hook-ro >}} | [Entity](/vext/ref/shared/type/entity) |  |
| **hit** | [RayCastHit](/vext/ref/shared/type/raycasthit) |  |
| **giverInfo**{{< hook-ro >}} | [DamageGiverInfo](/vext/ref/server/type/damagegiverinfo) |  |

## Example

```lua
Hooks:Install('BulletEntity:Collision', 1, function(hook, entity, hit, giverInfo)
    -- Do stuff here.
end)
```
