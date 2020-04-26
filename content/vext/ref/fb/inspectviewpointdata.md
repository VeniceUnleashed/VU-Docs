---
title: InspectViewPointData
---


## Summary
### Constructors
| |
| ----------- |
| **[InspectViewPointData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "viewPointID" >}} | string |
| {{< prop "animationTriggers" >}} | [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata)[] |
| {{< prop "continuousAnimationSignal" >}} | [AntRef](/vext/ref/fb/antref)[] |
| {{< prop "lookAtHeight" >}} | float |
| {{< prop "yaw" >}} | float |
| {{< prop "pitch" >}} | float |
| {{< prop "distance" >}} | float |
| {{< prop "fovOffset" >}} | float |
| {{< prop "adjustmentYaw" >}} | float |
| {{< prop "fixed" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [InspectViewPointData](/vext/ref/fb/inspectviewpointdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InspectViewPointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InspectViewPointData {#constructor-0}
> **InspectViewPointData**()

Creates a new [InspectViewPointData](/vext/ref/fb/inspectviewpointdata) frostbite structure.

## Properties
### {{% prop-heading "viewPointID" %}}
> **string**

### {{% prop-heading "animationTriggers" %}}
> **[InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata)**[]

### {{% prop-heading "continuousAnimationSignal" %}}
> **[AntRef](/vext/ref/fb/antref)**[]

### {{% prop-heading "lookAtHeight" %}}
> **float**

### {{% prop-heading "yaw" %}}
> **float**

### {{% prop-heading "pitch" %}}
> **float**

### {{% prop-heading "distance" %}}
> **float**

### {{% prop-heading "fovOffset" %}}
> **float**

### {{% prop-heading "adjustmentYaw" %}}
> **float**

### {{% prop-heading "fixed" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [InspectViewPointData](/vext/ref/fb/inspectviewpointdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[InspectViewPointData](/vext/ref/fb/inspectviewpointdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InspectViewPointData](/vext/ref/fb/inspectviewpointdata) type.

