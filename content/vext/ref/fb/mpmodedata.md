---
title: MPModeData
---


## Summary
### Constructors
| |
| ----------- |
| **[MPModeData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "vehiclePoints" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MPModeData](/vext/ref/fb/mpmodedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MPModeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MPModeData {#constructor-0}
> **MPModeData**()

Creates a new [MPModeData](/vext/ref/fb/mpmodedata) frostbite structure.

## Properties
### {{% prop-heading "vehiclePoints" %}}
> **int**

## Methods
### Clone
> **Clone**(): [MPModeData](/vext/ref/fb/mpmodedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MPModeData](/vext/ref/fb/mpmodedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MPModeData](/vext/ref/fb/mpmodedata) type.

