---
title: FloatRange
---


## Summary
### Constructors
| |
| ----------- |
| **[FloatRange](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "min" >}} | float |
| {{< prop "max" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [FloatRange](/vext/ref/fb/floatrange) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FloatRange" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FloatRange {#constructor-0}
> **FloatRange**()

Creates a new [FloatRange](/vext/ref/fb/floatrange) frostbite structure.

## Properties
### {{% prop-heading "min" %}}
> **float**

### {{% prop-heading "max" %}}
> **float**

## Methods
### Clone
> **Clone**(): [FloatRange](/vext/ref/fb/floatrange)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[FloatRange](/vext/ref/fb/floatrange)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FloatRange](/vext/ref/fb/floatrange) type.

