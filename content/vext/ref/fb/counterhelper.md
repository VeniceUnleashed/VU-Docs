---
title: CounterHelper
---


## Summary
### Constructors
| |
| ----------- |
| **[CounterHelper](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dummy" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CounterHelper](/vext/ref/fb/counterhelper) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CounterHelper" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CounterHelper {#constructor-0}
> **CounterHelper**()

Creates a new [CounterHelper](/vext/ref/fb/counterhelper) frostbite structure.

## Properties
### {{% prop-heading "dummy" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [CounterHelper](/vext/ref/fb/counterhelper)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CounterHelper](/vext/ref/fb/counterhelper)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CounterHelper](/vext/ref/fb/counterhelper) type.

