---
title: SpatialEntity
---

Inherits from [Entity](/vext/ref/shared/type/entity)

## Summary

### Constructors

|  |
| --- |
| **[SpatialEntity](#constructor-0)**(other: [Entity](/vext/ref/shared/type/entity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "aabb" true >}} | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) |
| {{< prop "aabbTransform" true >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpatialEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpatialEntity {#constructor-0}

> **SpatialEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

## Properties

### {{% prop-heading "transform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

Gets or sets the world transform of this entity.
  > NOTE: You must assign a new LinearTransfrom to update, changing individual vector components **will not work**

Example:
```lua
local myTransform = mySpatialEntity.transform
myTransform.trans.y = 1
mySpatialEntity.transform = myTransform
```


### {{% prop-heading "aabb" true %}}

> **[AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)**

### {{% prop-heading "aabbTransform" true %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

