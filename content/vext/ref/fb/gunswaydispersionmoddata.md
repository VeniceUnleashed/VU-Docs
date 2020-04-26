---
title: GunSwayDispersionModData
---


## Summary
### Constructors
| |
| ----------- |
| **[GunSwayDispersionModData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minAngleModifier" >}} | float |
| {{< prop "maxAngleModifier" >}} | float |
| {{< prop "increasePerShotModifier" >}} | float |
| {{< prop "decreasePerSecondModifier" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunSwayDispersionModData](/vext/ref/fb/gunswaydispersionmoddata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunSwayDispersionModData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunSwayDispersionModData {#constructor-0}
> **GunSwayDispersionModData**()

Creates a new [GunSwayDispersionModData](/vext/ref/fb/gunswaydispersionmoddata) frostbite structure.

## Properties
### {{% prop-heading "minAngleModifier" %}}
> **float**

### {{% prop-heading "maxAngleModifier" %}}
> **float**

### {{% prop-heading "increasePerShotModifier" %}}
> **float**

### {{% prop-heading "decreasePerSecondModifier" %}}
> **float**

## Methods
### Clone
> **Clone**(): [GunSwayDispersionModData](/vext/ref/fb/gunswaydispersionmoddata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunSwayDispersionModData](/vext/ref/fb/gunswaydispersionmoddata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunSwayDispersionModData](/vext/ref/fb/gunswaydispersionmoddata) type.

