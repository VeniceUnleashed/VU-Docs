---
title: GunSwayStandData
---


## Summary
### Constructors
| |
| ----------- |
| **[GunSwayStandData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "noZoom" >}} | [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata) |
| {{< prop "zoom" >}} | [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GunSwayStandData](/vext/ref/fb/gunswaystanddata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GunSwayStandData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GunSwayStandData {#constructor-0}
> **GunSwayStandData**()

Creates a new [GunSwayStandData](/vext/ref/fb/gunswaystanddata) frostbite structure.

## Properties
### {{% prop-heading "noZoom" %}}
> **[GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata)**

### {{% prop-heading "zoom" %}}
> **[GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata)**

## Methods
### Clone
> **Clone**(): [GunSwayStandData](/vext/ref/fb/gunswaystanddata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GunSwayStandData](/vext/ref/fb/gunswaystanddata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GunSwayStandData](/vext/ref/fb/gunswaystanddata) type.

