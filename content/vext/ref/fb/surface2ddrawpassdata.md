---
title: Surface2dDrawPassData
---


## Summary
### Constructors
| |
| ----------- |
| **[Surface2dDrawPassData](#constructor-0)**() |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "Surface2dDrawPassData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### Surface2dDrawPassData {#constructor-0}
> **Surface2dDrawPassData**()

Creates a new [Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata) frostbite structure.

## Methods
### Clone
> **Clone**(): [Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata) type.

