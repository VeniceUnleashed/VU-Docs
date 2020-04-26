---
title: NearTargetDetonationData
---


## Summary
### Constructors
| |
| ----------- |
| **[NearTargetDetonationData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "detonationRadius" >}} | float |
| {{< prop "minDetonationDelay" >}} | float |
| {{< prop "maxDetonationDelay" >}} | float |
| {{< prop "detonateNearTarget" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [NearTargetDetonationData](/vext/ref/fb/neartargetdetonationdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "NearTargetDetonationData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### NearTargetDetonationData {#constructor-0}
> **NearTargetDetonationData**()

Creates a new [NearTargetDetonationData](/vext/ref/fb/neartargetdetonationdata) frostbite structure.

## Properties
### {{% prop-heading "detonationRadius" %}}
> **float**

### {{% prop-heading "minDetonationDelay" %}}
> **float**

### {{% prop-heading "maxDetonationDelay" %}}
> **float**

### {{% prop-heading "detonateNearTarget" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [NearTargetDetonationData](/vext/ref/fb/neartargetdetonationdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[NearTargetDetonationData](/vext/ref/fb/neartargetdetonationdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [NearTargetDetonationData](/vext/ref/fb/neartargetdetonationdata) type.

