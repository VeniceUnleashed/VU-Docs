---
title: GunSwayStanceZoomModifierData
---


## Summary
### Constructors
| |
| ----------- |
| **[GunSwayStanceZoomModifierData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dispersionMod" >}} | [GunSwayDispersionModData](/vext/ref/fb/gunswaydispersionmoddata) |
| {{< prop "recoilMagnitudeMod" >}} | float |
| {{< prop "recoilAngleMod" >}} | float |
| {{< prop "lagYawMod" >}} | float |
| {{< prop "lagPitchMod" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunSwayStanceZoomModifierData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunSwayStanceZoomModifierData {#constructor-0}
> **GunSwayStanceZoomModifierData**()

Creates a new [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) frostbite structure.

## Properties
### {{% prop-heading "dispersionMod" %}}
> **[GunSwayDispersionModData](/vext/ref/fb/gunswaydispersionmoddata)**

### {{% prop-heading "recoilMagnitudeMod" %}}
> **float**

### {{% prop-heading "recoilAngleMod" %}}
> **float**

### {{% prop-heading "lagYawMod" %}}
> **float**

### {{% prop-heading "lagPitchMod" %}}
> **float**

## Methods
### Clone
> **Clone**(): [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) type.

