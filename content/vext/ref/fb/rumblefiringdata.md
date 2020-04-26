---
title: RumbleFiringData
---


## Summary
### Constructors
| |
| ----------- |
| **[RumbleFiringData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lowRumble" >}} | float |
| {{< prop "highRumble" >}} | float |
| {{< prop "rumbleDuration" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [RumbleFiringData](/vext/ref/fb/rumblefiringdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RumbleFiringData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RumbleFiringData {#constructor-0}
> **RumbleFiringData**()

Creates a new [RumbleFiringData](/vext/ref/fb/rumblefiringdata) frostbite structure.

## Properties
### {{% prop-heading "lowRumble" %}}
> **float**

### {{% prop-heading "highRumble" %}}
> **float**

### {{% prop-heading "rumbleDuration" %}}
> **float**

## Methods
### Clone
> **Clone**(): [RumbleFiringData](/vext/ref/fb/rumblefiringdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[RumbleFiringData](/vext/ref/fb/rumblefiringdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RumbleFiringData](/vext/ref/fb/rumblefiringdata) type.

