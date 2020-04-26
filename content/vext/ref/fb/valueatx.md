---
title: ValueAtX
---


## Summary
### Constructors
| |
| ----------- |
| **[ValueAtX](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | float |
| {{< prop "value" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ValueAtX](/vext/ref/fb/valueatx) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ValueAtX" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ValueAtX {#constructor-0}
> **ValueAtX**()

Creates a new [ValueAtX](/vext/ref/fb/valueatx) frostbite structure.

## Properties
### {{% prop-heading "x" %}}
> **float**

### {{% prop-heading "value" %}}
> **float**

## Methods
### Clone
> **Clone**(): [ValueAtX](/vext/ref/fb/valueatx)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ValueAtX](/vext/ref/fb/valueatx)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ValueAtX](/vext/ref/fb/valueatx) type.

