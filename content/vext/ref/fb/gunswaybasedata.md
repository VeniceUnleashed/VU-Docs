---
title: GunSwayBaseData
---


## Summary
### Constructors
| |
| ----------- |
| **[GunSwayBaseData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "baseValue" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "recoil" >}} | [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) |
| {{< prop "gunSwayLag" >}} | [GunSwayLagData](/vext/ref/fb/gunswaylagdata) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunSwayBaseData](/vext/ref/fb/gunswaybasedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunSwayBaseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunSwayBaseData {#constructor-0}
> **GunSwayBaseData**()

Creates a new [GunSwayBaseData](/vext/ref/fb/gunswaybasedata) frostbite structure.

## Properties
### {{% prop-heading "baseValue" %}}
> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "recoil" %}}
> **[GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata)**

### {{% prop-heading "gunSwayLag" %}}
> **[GunSwayLagData](/vext/ref/fb/gunswaylagdata)**

## Methods
### Clone
> **Clone**(): [GunSwayBaseData](/vext/ref/fb/gunswaybasedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunSwayBaseData](/vext/ref/fb/gunswaybasedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunSwayBaseData](/vext/ref/fb/gunswaybasedata) type.

