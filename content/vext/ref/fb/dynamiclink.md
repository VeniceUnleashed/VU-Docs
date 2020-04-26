---
title: DynamicLink
---


## Summary
### Constructors
| |
| ----------- |
| **[DynamicLink](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DynamicLink](/vext/ref/fb/dynamiclink) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DynamicLink" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DynamicLink {#constructor-0}
> **DynamicLink**()

Creates a new [DynamicLink](/vext/ref/fb/dynamiclink) frostbite structure.

## Properties
### {{% prop-heading "id" %}}
> **int**

## Methods
### Clone
> **Clone**(): [DynamicLink](/vext/ref/fb/dynamiclink)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DynamicLink](/vext/ref/fb/dynamiclink)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DynamicLink](/vext/ref/fb/dynamiclink) type.

