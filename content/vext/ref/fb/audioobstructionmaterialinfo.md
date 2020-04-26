---
title: AudioObstructionMaterialInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[AudioObstructionMaterialInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "material" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "obstructionFrequency" >}} | float |
| {{< prop "gainReduction" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AudioObstructionMaterialInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AudioObstructionMaterialInfo {#constructor-0}
> **AudioObstructionMaterialInfo**()

Creates a new [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo) frostbite structure.

## Properties
### {{% prop-heading "material" %}}
> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** | **nil**

### {{% prop-heading "obstructionFrequency" %}}
> **float**

### {{% prop-heading "gainReduction" %}}
> **float**

## Methods
### Clone
> **Clone**(): [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo) type.

