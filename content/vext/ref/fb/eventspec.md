---
title: EventSpec
---


## Summary
### Constructors
| |
| ----------- |
| **[EventSpec](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EventSpec](/vext/ref/fb/eventspec) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EventSpec" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EventSpec {#constructor-0}
> **EventSpec**()

Creates a new [EventSpec](/vext/ref/fb/eventspec) frostbite structure.

## Properties
### {{% prop-heading "id" %}}
> **int**

## Methods
### Clone
> **Clone**(): [EventSpec](/vext/ref/fb/eventspec)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EventSpec](/vext/ref/fb/eventspec)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EventSpec](/vext/ref/fb/eventspec) type.

