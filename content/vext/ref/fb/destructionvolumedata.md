---
title: DestructionVolumeData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[DestructionVolumeData](#constructor-0)**() |
| **[DestructionVolumeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DestructionVolumeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "boundingBox" >}} | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox) |
| {{< prop "asset" >}} | [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset) \| nil |
| {{< prop "impacts" >}} | [Vec4](/vext/ref/shared/class/vec4)[] |
| {{< prop "partToImpactIndices" >}} | int[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DestructionVolumeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DestructionVolumeData {#constructor-0}
> **DestructionVolumeData**()

Creates a new [DestructionVolumeData](/vext/ref/fb/destructionvolumedata) frostbite instance.

### DestructionVolumeData {#constructor-1}
> **DestructionVolumeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DestructionVolumeData](/vext/ref/fb/destructionvolumedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DestructionVolumeData {#constructor-2}
> **DestructionVolumeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionVolumeData](/vext/ref/fb/destructionvolumedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DestructionVolumeData](/vext/ref/fb/destructionvolumedata). |

## Properties
### {{% prop-heading "boundingBox" %}}
> **[AxisAlignedBox](/vext/ref/shared/class/axisalignedbox)**

### {{% prop-heading "asset" %}}
> **[DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset)** | **nil**

### {{% prop-heading "impacts" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**[]

### {{% prop-heading "partToImpactIndices" %}}
> **int**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DestructionVolumeData](/vext/ref/fb/destructionvolumedata) type.

