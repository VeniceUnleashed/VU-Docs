---
title: PointEnvelopePoint
---


## Summary
### Constructors
| |
| ----------- |
| **[PointEnvelopePoint](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | float |
| {{< prop "y" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PointEnvelopePoint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PointEnvelopePoint {#constructor-0}
> **PointEnvelopePoint**()

Creates a new [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint) frostbite structure.

## Properties
### {{% prop-heading "x" %}}
> **float**

### {{% prop-heading "y" %}}
> **float**

## Methods
### Clone
> **Clone**(): [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint) type.

