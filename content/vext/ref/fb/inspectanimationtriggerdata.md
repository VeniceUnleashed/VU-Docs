---
title: InspectAnimationTriggerData
---


## Summary
### Constructors
| |
| ----------- |
| **[InspectAnimationTriggerData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "animation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "probability" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InspectAnimationTriggerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InspectAnimationTriggerData {#constructor-0}
> **InspectAnimationTriggerData**()

Creates a new [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata) frostbite structure.

## Properties
### {{% prop-heading "animation" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "probability" %}}
> **float**

## Methods
### Clone
> **Clone**(): [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata) type.

