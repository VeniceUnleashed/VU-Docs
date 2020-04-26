---
title: RecoilData
---


## Summary
### Constructors
| |
| ----------- |
| **[RecoilData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxRecoilAngleX" >}} | float |
| {{< prop "minRecoilAngleX" >}} | float |
| {{< prop "maxRecoilAngleY" >}} | float |
| {{< prop "minRecoilAngleY" >}} | float |
| {{< prop "maxRecoilAngleZ" >}} | float |
| {{< prop "minRecoilAngleZ" >}} | float |
| {{< prop "maxRecoilFov" >}} | float |
| {{< prop "minRecoilFov" >}} | float |
| {{< prop "recoilFollowsDispersion" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [RecoilData](/vext/ref/fb/recoildata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RecoilData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RecoilData {#constructor-0}
> **RecoilData**()

Creates a new [RecoilData](/vext/ref/fb/recoildata) frostbite structure.

## Properties
### {{% prop-heading "maxRecoilAngleX" %}}
> **float**

### {{% prop-heading "minRecoilAngleX" %}}
> **float**

### {{% prop-heading "maxRecoilAngleY" %}}
> **float**

### {{% prop-heading "minRecoilAngleY" %}}
> **float**

### {{% prop-heading "maxRecoilAngleZ" %}}
> **float**

### {{% prop-heading "minRecoilAngleZ" %}}
> **float**

### {{% prop-heading "maxRecoilFov" %}}
> **float**

### {{% prop-heading "minRecoilFov" %}}
> **float**

### {{% prop-heading "recoilFollowsDispersion" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [RecoilData](/vext/ref/fb/recoildata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[RecoilData](/vext/ref/fb/recoildata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RecoilData](/vext/ref/fb/recoildata) type.

