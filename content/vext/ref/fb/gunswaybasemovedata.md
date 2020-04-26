---
title: GunSwayBaseMoveData
---


## Summary
### Constructors
| |
| ----------- |
| **[GunSwayBaseMoveData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "baseValue" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "moving" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "recoil" >}} | [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) |
| {{< prop "gunSwayLag" >}} | [GunSwayLagData](/vext/ref/fb/gunswaylagdata) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunSwayBaseMoveData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunSwayBaseMoveData {#constructor-0}
> **GunSwayBaseMoveData**()

Creates a new [GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata) frostbite structure.

## Properties
### {{% prop-heading "baseValue" %}}
> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "moving" %}}
> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "recoil" %}}
> **[GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata)**

### {{% prop-heading "gunSwayLag" %}}
> **[GunSwayLagData](/vext/ref/fb/gunswaylagdata)**

## Methods
### Clone
> **Clone**(): [GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata) type.

