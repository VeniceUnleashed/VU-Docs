---
title: EntityFactory:Create
---

> **EntityFactory:Create**(entityData: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform)): [Entity](/vext/ref/shared/type/entity) \| nil

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entityData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |

## Returns

| Type | Description |
| ---- | ----------- |
| **[Entity](/vext/ref/shared/type/entity)** \| **nil** |  |

## Example

```lua
Hooks:Install('EntityFactory:Create', 1, function(hook, entityData, transform)
    -- Do stuff here.
end)
```
