---
title: BulletEntity:Collision
---

> **BulletEntity:Collision**(entity: [Entity](/vext/ref/shared/type/entity), hit: [RayCastHit](/vext/ref/shared/type/raycasthit), shooter: [Player](/vext/ref/client/type/player) \| nil)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entity**{{< hook-ro >}} | [Entity](/vext/ref/shared/type/entity) |  |
| **hit** | [RayCastHit](/vext/ref/shared/type/raycasthit) |  |
| **shooter**{{< hook-ro >}} | [Player](/vext/ref/client/type/player) \| nil |  |

## Example

```lua
Hooks:Install('BulletEntity:Collision', 1, function(hook, entity, hit, shooter)
    -- Do stuff here.
end)
```
