---
title: EnlightenDbInstance
---

## Summary

### Constructors

|  |
| --- |
| **[EnlightenDbInstance](#constructor-0)**() |
| **[EnlightenDbInstance](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "worldBoundingbox" >}} | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) |
| {{< prop "worldTransform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "uvTranslation" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "uvTransform" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "geometryId" >}} | int |
| {{< prop "objectVariation" >}} | string |
| {{< prop "guidString" >}} | string |
| {{< prop "uvSizeX" >}} | int |
| {{< prop "uvSizeY" >}} | int |
| {{< prop "pixelSize" >}} | float |
| {{< prop "enlightenMeshName" >}} | string |
| {{< prop "meshAsset" >}} | string |
| {{< prop "instanceAlbedos" >}} | int[] |
| {{< prop "cacheKey" >}} | [Guid](/vext/ref/shared/type/guid) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EnlightenDbInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EnlightenDbInstance {#constructor-0}

> **EnlightenDbInstance**()

Creates a new [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance) frostbite instance.

### EnlightenDbInstance {#constructor-1}

> **EnlightenDbInstance**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "worldBoundingbox" %}}

> **[AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)**

### {{% prop-heading "worldTransform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "uvTranslation" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "uvTransform" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "geometryId" %}}

> **int**

### {{% prop-heading "objectVariation" %}}

> **string**

### {{% prop-heading "guidString" %}}

> **string**

### {{% prop-heading "uvSizeX" %}}

> **int**

### {{% prop-heading "uvSizeY" %}}

> **int**

### {{% prop-heading "pixelSize" %}}

> **float**

### {{% prop-heading "enlightenMeshName" %}}

> **string**

### {{% prop-heading "meshAsset" %}}

> **string**

### {{% prop-heading "instanceAlbedos" %}}

> **int**[]

### {{% prop-heading "cacheKey" %}}

> **[Guid](/vext/ref/shared/type/guid)**

## Methods

### Clone {#clone}

> **Clone**(): [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EnlightenDbInstance](/vext/ref/fb/enlightendbinstance)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance) type.

