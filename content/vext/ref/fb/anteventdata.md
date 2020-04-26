---
title: AntEventData
---


## Summary
### Constructors
| |
| ----------- |
| **[AntEventData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "tagId" >}} | int |
| {{< prop "event" >}} | [EventSpec](/vext/ref/fb/eventspec) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AntEventData](/vext/ref/fb/anteventdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntEventData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntEventData {#constructor-0}
> **AntEventData**()

Creates a new [AntEventData](/vext/ref/fb/anteventdata) frostbite structure.

## Properties
### {{% prop-heading "tagId" %}}
> **int**

### {{% prop-heading "event" %}}
> **[EventSpec](/vext/ref/fb/eventspec)**

## Methods
### Clone
> **Clone**(): [AntEventData](/vext/ref/fb/anteventdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AntEventData](/vext/ref/fb/anteventdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntEventData](/vext/ref/fb/anteventdata) type.

