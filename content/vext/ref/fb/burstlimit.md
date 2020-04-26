---
title: BurstLimit
---


## Summary
### Constructors
| |
| ----------- |
| **[BurstLimit](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "min" >}} | int |
| {{< prop "max" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [BurstLimit](/vext/ref/fb/burstlimit) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BurstLimit" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BurstLimit {#constructor-0}
> **BurstLimit**()

Creates a new [BurstLimit](/vext/ref/fb/burstlimit) frostbite structure.

## Properties
### {{% prop-heading "min" %}}
> **int**

### {{% prop-heading "max" %}}
> **int**

## Methods
### Clone
> **Clone**(): [BurstLimit](/vext/ref/fb/burstlimit)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[BurstLimit](/vext/ref/fb/burstlimit)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BurstLimit](/vext/ref/fb/burstlimit) type.

