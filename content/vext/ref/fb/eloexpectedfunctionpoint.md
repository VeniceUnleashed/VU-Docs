---
title: EloExpectedFunctionPoint
---


## Summary
### Constructors
| |
| ----------- |
| **[EloExpectedFunctionPoint](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "xValue" >}} | float |
| {{< prop "yValue" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EloExpectedFunctionPoint](/vext/ref/fb/eloexpectedfunctionpoint) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EloExpectedFunctionPoint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EloExpectedFunctionPoint {#constructor-0}
> **EloExpectedFunctionPoint**()

Creates a new [EloExpectedFunctionPoint](/vext/ref/fb/eloexpectedfunctionpoint) frostbite structure.

## Properties
### {{% prop-heading "xValue" %}}
> **float**

### {{% prop-heading "yValue" %}}
> **float**

## Methods
### Clone
> **Clone**(): [EloExpectedFunctionPoint](/vext/ref/fb/eloexpectedfunctionpoint)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EloExpectedFunctionPoint](/vext/ref/fb/eloexpectedfunctionpoint)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EloExpectedFunctionPoint](/vext/ref/fb/eloexpectedfunctionpoint) type.

