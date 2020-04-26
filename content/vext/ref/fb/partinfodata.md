---
title: PartInfoData
---


## Summary
### Constructors
| |
| ----------- |
| **[PartInfoData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "aabb" >}} | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox) |
| {{< prop "translation" >}} | [Vec3](/vext/ref/shared/class/vec3) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PartInfoData](/vext/ref/fb/partinfodata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PartInfoData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PartInfoData {#constructor-0}
> **PartInfoData**()

Creates a new [PartInfoData](/vext/ref/fb/partinfodata) frostbite structure.

## Properties
### {{% prop-heading "aabb" %}}
> **[AxisAlignedBox](/vext/ref/shared/class/axisalignedbox)**

### {{% prop-heading "translation" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

## Methods
### Clone
> **Clone**(): [PartInfoData](/vext/ref/fb/partinfodata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PartInfoData](/vext/ref/fb/partinfodata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PartInfoData](/vext/ref/fb/partinfodata) type.

