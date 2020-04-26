---
title: EnlightenDbInstance
---


## Summary
### Constructors
| |
| ----------- |
| **[EnlightenDbInstance](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "worldBoundingbox" >}} | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox) |
| {{< prop "worldTransform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "uvTranslation" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "uvTransform" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "geometryId" >}} | int |
| {{< prop "objectVariation" >}} | string |
| {{< prop "guidString" >}} | string |
| {{< prop "uvSizeX" >}} | int |
| {{< prop "uvSizeY" >}} | int |
| {{< prop "pixelSize" >}} | float |
| {{< prop "enlightenMeshName" >}} | string |
| {{< prop "meshAsset" >}} | string |
| {{< prop "instanceAlbedos" >}} | int[] |
| {{< prop "cacheKey" >}} | [Guid](/vext/ref/shared/class/guid) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EnlightenDbInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EnlightenDbInstance {#constructor-0}
> **EnlightenDbInstance**()

Creates a new [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance) frostbite structure.

## Properties
### {{% prop-heading "worldBoundingbox" %}}
> **[AxisAlignedBox](/vext/ref/shared/class/axisalignedbox)**

### {{% prop-heading "worldTransform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "uvTranslation" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "uvTransform" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

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
> **[Guid](/vext/ref/shared/class/guid)**

## Methods
### Clone
> **Clone**(): [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EnlightenDbInstance](/vext/ref/fb/enlightendbinstance)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance) type.

