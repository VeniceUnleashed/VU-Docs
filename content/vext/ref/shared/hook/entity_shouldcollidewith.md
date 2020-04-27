---
title: Entity:ShouldCollideWith
---

> **Entity:ShouldCollideWith**(entity: [Entity](/vext/ref/shared/type/entity), shouldCollideWith: [Entity](/vext/ref/shared/type/entity)): bool

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entity** | [Entity](/vext/ref/shared/type/entity) |  |
| **shouldCollideWith** | [Entity](/vext/ref/shared/type/entity) |  |

## Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Example

```lua
Hooks:Install('Entity:ShouldCollideWith', 1, function(hook, entity, shouldCollideWith)
    -- Do stuff here.
end)
```
