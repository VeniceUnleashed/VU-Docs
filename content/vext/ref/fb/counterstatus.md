---
title: CounterStatus
---


## Summary
### Constructors
| |
| ----------- |
| **[CounterStatus](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "currentValue" >}} | float |
| {{< prop "originalValue" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CounterStatus](/vext/ref/fb/counterstatus) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CounterStatus" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CounterStatus {#constructor-0}
> **CounterStatus**()

Creates a new [CounterStatus](/vext/ref/fb/counterstatus) frostbite structure.

## Properties
### {{% prop-heading "currentValue" %}}
> **float**

### {{% prop-heading "originalValue" %}}
> **float**

## Methods
### Clone
> **Clone**(): [CounterStatus](/vext/ref/fb/counterstatus)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CounterStatus](/vext/ref/fb/counterstatus)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CounterStatus](/vext/ref/fb/counterstatus) type.

