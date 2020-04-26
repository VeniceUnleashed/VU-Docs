---
title: EventScaleData
---


## Summary
### Constructors
| |
| ----------- |
| **[EventScaleData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "event" >}} | [StatEvent](/vext/ref/fb/statevent) |
| {{< prop "scale" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EventScaleData](/vext/ref/fb/eventscaledata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EventScaleData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EventScaleData {#constructor-0}
> **EventScaleData**()

Creates a new [EventScaleData](/vext/ref/fb/eventscaledata) frostbite structure.

## Properties
### {{% prop-heading "event" %}}
> **[StatEvent](/vext/ref/fb/statevent)**

### {{% prop-heading "scale" %}}
> **float**

## Methods
### Clone
> **Clone**(): [EventScaleData](/vext/ref/fb/eventscaledata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EventScaleData](/vext/ref/fb/eventscaledata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EventScaleData](/vext/ref/fb/eventscaledata) type.

