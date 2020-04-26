---
title: SequenceEventData
---


## Summary
### Constructors
| |
| ----------- |
| **[SequenceEventData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "event" >}} | [EventSpec](/vext/ref/fb/eventspec) |
| {{< prop "time" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SequenceEventData](/vext/ref/fb/sequenceeventdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SequenceEventData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SequenceEventData {#constructor-0}
> **SequenceEventData**()

Creates a new [SequenceEventData](/vext/ref/fb/sequenceeventdata) frostbite structure.

## Properties
### {{% prop-heading "event" %}}
> **[EventSpec](/vext/ref/fb/eventspec)**

### {{% prop-heading "time" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SequenceEventData](/vext/ref/fb/sequenceeventdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SequenceEventData](/vext/ref/fb/sequenceeventdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SequenceEventData](/vext/ref/fb/sequenceeventdata) type.

