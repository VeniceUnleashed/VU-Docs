---
title: StreamGridCell
---


## Summary
### Constructors
| |
| ----------- |
| **[StreamGridCell](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "referenceData" >}} | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) \| nil |
| {{< prop "x" >}} | int |
| {{< prop "z" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [StreamGridCell](/vext/ref/fb/streamgridcell) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StreamGridCell" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StreamGridCell {#constructor-0}
> **StreamGridCell**()

Creates a new [StreamGridCell](/vext/ref/fb/streamgridcell) frostbite structure.

## Properties
### {{% prop-heading "referenceData" %}}
> **[ReferenceObjectData](/vext/ref/fb/referenceobjectdata)** | **nil**

### {{% prop-heading "x" %}}
> **int**

### {{% prop-heading "z" %}}
> **int**

## Methods
### Clone
> **Clone**(): [StreamGridCell](/vext/ref/fb/streamgridcell)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[StreamGridCell](/vext/ref/fb/streamgridcell)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StreamGridCell](/vext/ref/fb/streamgridcell) type.

