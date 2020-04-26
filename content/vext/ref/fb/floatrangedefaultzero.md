---
title: FloatRangeDefaultZero
---


## Summary
### Constructors
| |
| ----------- |
| **[FloatRangeDefaultZero](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "min" >}} | float |
| {{< prop "max" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FloatRangeDefaultZero" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FloatRangeDefaultZero {#constructor-0}
> **FloatRangeDefaultZero**()

Creates a new [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero) frostbite structure.

## Properties
### {{% prop-heading "min" %}}
> **float**

### {{% prop-heading "max" %}}
> **float**

## Methods
### Clone
> **Clone**(): [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero) type.

