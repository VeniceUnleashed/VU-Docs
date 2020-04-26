---
title: UIntRange
---


## Summary
### Constructors
| |
| ----------- |
| **[UIntRange](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "min" >}} | int |
| {{< prop "max" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIntRange](/vext/ref/fb/uintrange) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIntRange" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIntRange {#constructor-0}
> **UIntRange**()

Creates a new [UIntRange](/vext/ref/fb/uintrange) frostbite structure.

## Properties
### {{% prop-heading "min" %}}
> **int**

### {{% prop-heading "max" %}}
> **int**

## Methods
### Clone
> **Clone**(): [UIntRange](/vext/ref/fb/uintrange)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIntRange](/vext/ref/fb/uintrange)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIntRange](/vext/ref/fb/uintrange) type.

