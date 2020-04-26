---
title: EloFunctionPoint
---


## Summary
### Constructors
| |
| ----------- |
| **[EloFunctionPoint](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "xValue" >}} | float |
| {{< prop "yValue" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EloFunctionPoint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EloFunctionPoint {#constructor-0}
> **EloFunctionPoint**()

Creates a new [EloFunctionPoint](/vext/ref/fb/elofunctionpoint) frostbite structure.

## Properties
### {{% prop-heading "xValue" %}}
> **float**

### {{% prop-heading "yValue" %}}
> **float**

## Methods
### Clone
> **Clone**(): [EloFunctionPoint](/vext/ref/fb/elofunctionpoint)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EloFunctionPoint](/vext/ref/fb/elofunctionpoint)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EloFunctionPoint](/vext/ref/fb/elofunctionpoint) type.

