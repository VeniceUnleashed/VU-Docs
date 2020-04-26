---
title: MissileLockableInfoData
---


## Summary
### Constructors
| |
| ----------- |
| **[MissileLockableInfoData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "heatSignature" >}} | float |
| {{< prop "radarSignature" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MissileLockableInfoData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MissileLockableInfoData {#constructor-0}
> **MissileLockableInfoData**()

Creates a new [MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata) frostbite structure.

## Properties
### {{% prop-heading "heatSignature" %}}
> **float**

### {{% prop-heading "radarSignature" %}}
> **float**

## Methods
### Clone
> **Clone**(): [MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata) type.

