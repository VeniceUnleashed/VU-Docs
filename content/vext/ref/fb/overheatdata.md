---
title: OverHeatData
---


## Summary
### Constructors
| |
| ----------- |
| **[OverHeatData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "heatPerBullet" >}} | float |
| {{< prop "heatDropPerSecond" >}} | float |
| {{< prop "overHeatPenaltyTime" >}} | float |
| {{< prop "overHeatThreshold" >}} | float |
| {{< prop "overHeatEffect" >}} | [FireEffectData](/vext/ref/fb/fireeffectdata) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [OverHeatData](/vext/ref/fb/overheatdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OverHeatData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OverHeatData {#constructor-0}
> **OverHeatData**()

Creates a new [OverHeatData](/vext/ref/fb/overheatdata) frostbite structure.

## Properties
### {{% prop-heading "heatPerBullet" %}}
> **float**

### {{% prop-heading "heatDropPerSecond" %}}
> **float**

### {{% prop-heading "overHeatPenaltyTime" %}}
> **float**

### {{% prop-heading "overHeatThreshold" %}}
> **float**

### {{% prop-heading "overHeatEffect" %}}
> **[FireEffectData](/vext/ref/fb/fireeffectdata)**

## Methods
### Clone
> **Clone**(): [OverHeatData](/vext/ref/fb/overheatdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[OverHeatData](/vext/ref/fb/overheatdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OverHeatData](/vext/ref/fb/overheatdata) type.

