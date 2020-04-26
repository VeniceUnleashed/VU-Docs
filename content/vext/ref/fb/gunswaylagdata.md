---
title: GunSwayLagData
---


## Summary
### Constructors
| |
| ----------- |
| **[GunSwayLagData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "moveStrafeModifier" >}} | float |
| {{< prop "moveForwardModifier" >}} | float |
| {{< prop "rotateYawModifier" >}} | float |
| {{< prop "rotatePitchModifier" >}} | float |
| {{< prop "releaseModifier" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunSwayLagData](/vext/ref/fb/gunswaylagdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunSwayLagData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunSwayLagData {#constructor-0}
> **GunSwayLagData**()

Creates a new [GunSwayLagData](/vext/ref/fb/gunswaylagdata) frostbite structure.

## Properties
### {{% prop-heading "moveStrafeModifier" %}}
> **float**

### {{% prop-heading "moveForwardModifier" %}}
> **float**

### {{% prop-heading "rotateYawModifier" %}}
> **float**

### {{% prop-heading "rotatePitchModifier" %}}
> **float**

### {{% prop-heading "releaseModifier" %}}
> **float**

## Methods
### Clone
> **Clone**(): [GunSwayLagData](/vext/ref/fb/gunswaylagdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunSwayLagData](/vext/ref/fb/gunswaylagdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunSwayLagData](/vext/ref/fb/gunswaylagdata) type.

