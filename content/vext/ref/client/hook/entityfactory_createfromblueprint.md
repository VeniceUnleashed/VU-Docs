---
title: EntityFactory:CreateFromBlueprint
---

> **EntityFactory:CreateFromBlueprint**(blueprint: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform), variation: int, parentRepresentative: [DataContainer](/vext/ref/shared/type/datacontainer) \| nil): [EntityBus](/vext/ref/shared/type/entitybus) \| nil

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **blueprint** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
| **variation** | int |  |
| **parentRepresentative** | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |  |

## Returns

| Type | Description |
| ---- | ----------- |
| **[EntityBus](/vext/ref/shared/type/entitybus)** \| **nil** |  |

## Example

```lua
Hooks:Install('EntityFactory:CreateFromBlueprint', 1, function(hook, blueprint, transform, variation, parentRepresentative)
    -- Do stuff here.
end)
```
