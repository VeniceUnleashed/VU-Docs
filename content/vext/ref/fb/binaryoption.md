---
title: BinaryOption
---


## Summary
### Constructors
| |
| ----------- |
| **[BinaryOption](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [BinaryOption](/vext/ref/fb/binaryoption) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BinaryOption" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BinaryOption {#constructor-0}
> **BinaryOption**()

Creates a new [BinaryOption](/vext/ref/fb/binaryoption) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

## Methods
### Clone
> **Clone**(): [BinaryOption](/vext/ref/fb/binaryoption)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[BinaryOption](/vext/ref/fb/binaryoption)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BinaryOption](/vext/ref/fb/binaryoption) type.

