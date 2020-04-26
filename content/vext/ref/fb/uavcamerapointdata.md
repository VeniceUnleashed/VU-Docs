---
title: UavCameraPointData
---


## Summary
### Constructors
| |
| ----------- |
| **[UavCameraPointData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minTime" >}} | float |
| {{< prop "maxTime" >}} | float |
| {{< prop "speed" >}} | float |
| {{< prop "accelerationTime" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UavCameraPointData](/vext/ref/fb/uavcamerapointdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UavCameraPointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UavCameraPointData {#constructor-0}
> **UavCameraPointData**()

Creates a new [UavCameraPointData](/vext/ref/fb/uavcamerapointdata) frostbite structure.

## Properties
### {{% prop-heading "minTime" %}}
> **float**

### {{% prop-heading "maxTime" %}}
> **float**

### {{% prop-heading "speed" %}}
> **float**

### {{% prop-heading "accelerationTime" %}}
> **float**

## Methods
### Clone
> **Clone**(): [UavCameraPointData](/vext/ref/fb/uavcamerapointdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UavCameraPointData](/vext/ref/fb/uavcamerapointdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UavCameraPointData](/vext/ref/fb/uavcamerapointdata) type.

