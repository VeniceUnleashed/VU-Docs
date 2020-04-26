---
title: ZoomLevelSpecificTransitionTime
---


## Summary
### Constructors
| |
| ----------- |
| **[ZoomLevelSpecificTransitionTime](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "fromZoomLevel" >}} | int |
| {{< prop "toZoomLevel" >}} | int |
| {{< prop "zoomTransitionTime" >}} | float |
| {{< prop "fovTransitionTime" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ZoomLevelSpecificTransitionTime](/vext/ref/fb/zoomlevelspecifictransitiontime) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ZoomLevelSpecificTransitionTime" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ZoomLevelSpecificTransitionTime {#constructor-0}
> **ZoomLevelSpecificTransitionTime**()

Creates a new [ZoomLevelSpecificTransitionTime](/vext/ref/fb/zoomlevelspecifictransitiontime) frostbite structure.

## Properties
### {{% prop-heading "fromZoomLevel" %}}
> **int**

### {{% prop-heading "toZoomLevel" %}}
> **int**

### {{% prop-heading "zoomTransitionTime" %}}
> **float**

### {{% prop-heading "fovTransitionTime" %}}
> **float**

## Methods
### Clone
> **Clone**(): [ZoomLevelSpecificTransitionTime](/vext/ref/fb/zoomlevelspecifictransitiontime)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ZoomLevelSpecificTransitionTime](/vext/ref/fb/zoomlevelspecifictransitiontime)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ZoomLevelSpecificTransitionTime](/vext/ref/fb/zoomlevelspecifictransitiontime) type.

