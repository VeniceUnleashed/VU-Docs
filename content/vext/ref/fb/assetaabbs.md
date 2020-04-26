---
title: AssetAabbs
---


## Summary
### Constructors
| |
| ----------- |
| **[AssetAabbs](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "partAabb" >}} | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AssetAabbs](/vext/ref/fb/assetaabbs) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AssetAabbs" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AssetAabbs {#constructor-0}
> **AssetAabbs**()

Creates a new [AssetAabbs](/vext/ref/fb/assetaabbs) frostbite structure.

## Properties
### {{% prop-heading "partAabb" %}}
> **[AxisAlignedBox](/vext/ref/shared/class/axisalignedbox)**[]

## Methods
### Clone
> **Clone**(): [AssetAabbs](/vext/ref/fb/assetaabbs)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AssetAabbs](/vext/ref/fb/assetaabbs)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AssetAabbs](/vext/ref/fb/assetaabbs) type.

