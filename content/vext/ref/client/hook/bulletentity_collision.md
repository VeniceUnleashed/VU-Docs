---
title: BulletEntity:Collision
---

> **BulletEntity:Collision**(entity: [Entity](/vext/ref/shared/type/entity), hit: [RayCastHit](/vext/ref/shared/type/raycasthit), shooter: [Player](/vext/ref/client/type/player) \| nil): bool \| nil

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entity**{{< hook-ro >}} | [Entity](/vext/ref/shared/type/entity) |  |
| **hit** | [RayCastHit](/vext/ref/shared/type/raycasthit) |  |
| **shooter**{{< hook-ro >}} | [Player](/vext/ref/client/type/player) \| nil |  |

## Returns

| Type | Description |
| ---- | ----------- |
| **bool** \| **nil** |  |

## Example

```lua
Hooks:Install('BulletEntity:Collision', 1, function(hook, entity, hit, shooter)
    -- Do stuff here.
end)
```
