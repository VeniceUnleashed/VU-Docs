---
title: IntOption
---


## Summary
### Constructors
| |
| ----------- |
| **[IntOption](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "value" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [IntOption](/vext/ref/fb/intoption) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "IntOption" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### IntOption {#constructor-0}
> **IntOption**()

Creates a new [IntOption](/vext/ref/fb/intoption) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "value" %}}
> **int**

## Methods
### Clone
> **Clone**(): [IntOption](/vext/ref/fb/intoption)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[IntOption](/vext/ref/fb/intoption)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [IntOption](/vext/ref/fb/intoption) type.

