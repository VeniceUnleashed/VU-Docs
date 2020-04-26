---
title: GunSwayStanceTransition
---


## Summary
### Constructors
| |
| ----------- |
| **[GunSwayStanceTransition](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxPenaltyValue" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "coolDown" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunSwayStanceTransition" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunSwayStanceTransition {#constructor-0}
> **GunSwayStanceTransition**()

Creates a new [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) frostbite structure.

## Properties
### {{% prop-heading "maxPenaltyValue" %}}
> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "coolDown" %}}
> **float**

## Methods
### Clone
> **Clone**(): [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) type.

