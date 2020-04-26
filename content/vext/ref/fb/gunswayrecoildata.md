---
title: GunSwayRecoilData
---


## Summary
### Constructors
| |
| ----------- |
| **[GunSwayRecoilData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "recoilAmplitudeMax" >}} | float |
| {{< prop "recoilAmplitudeIncPerShot" >}} | float |
| {{< prop "horizontalRecoilAmplitudeIncPerShotMin" >}} | float |
| {{< prop "horizontalRecoilAmplitudeIncPerShotMax" >}} | float |
| {{< prop "horizontalRecoilAmplitudeMax" >}} | float |
| {{< prop "recoilAmplitudeDecreaseFactor" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunSwayRecoilData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunSwayRecoilData {#constructor-0}
> **GunSwayRecoilData**()

Creates a new [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) frostbite structure.

## Properties
### {{% prop-heading "recoilAmplitudeMax" %}}
> **float**

### {{% prop-heading "recoilAmplitudeIncPerShot" %}}
> **float**

### {{% prop-heading "horizontalRecoilAmplitudeIncPerShotMin" %}}
> **float**

### {{% prop-heading "horizontalRecoilAmplitudeIncPerShotMax" %}}
> **float**

### {{% prop-heading "horizontalRecoilAmplitudeMax" %}}
> **float**

### {{% prop-heading "recoilAmplitudeDecreaseFactor" %}}
> **float**

## Methods
### Clone
> **Clone**(): [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) type.

