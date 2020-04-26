---
title: Consumable
---


## Summary
### Constructors
| |
| ----------- |
| **[Consumable](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "instance" >}} | [Guid](/vext/ref/shared/class/guid) |
| {{< prop "group" >}} | [ConsumableGroup](/vext/ref/fb/consumablegroup) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [Consumable](/vext/ref/fb/consumable) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "Consumable" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### Consumable {#constructor-0}
> **Consumable**()

Creates a new [Consumable](/vext/ref/fb/consumable) frostbite structure.

## Properties
### {{% prop-heading "instance" %}}
> **[Guid](/vext/ref/shared/class/guid)**

### {{% prop-heading "group" %}}
> **[ConsumableGroup](/vext/ref/fb/consumablegroup)**

## Methods
### Clone
> **Clone**(): [Consumable](/vext/ref/fb/consumable)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[Consumable](/vext/ref/fb/consumable)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [Consumable](/vext/ref/fb/consumable) type.

