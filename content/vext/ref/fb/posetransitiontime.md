---
title: PoseTransitionTime
---


## Summary
### Constructors
| |
| ----------- |
| **[PoseTransitionTime](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "toPose" >}} | [CharacterPoseType](/vext/ref/fb/characterposetype) |
| {{< prop "transitionTime" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PoseTransitionTime](/vext/ref/fb/posetransitiontime) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PoseTransitionTime" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PoseTransitionTime {#constructor-0}
> **PoseTransitionTime**()

Creates a new [PoseTransitionTime](/vext/ref/fb/posetransitiontime) frostbite structure.

## Properties
### {{% prop-heading "toPose" %}}
> **[CharacterPoseType](/vext/ref/fb/characterposetype)**

### {{% prop-heading "transitionTime" %}}
> **float**

## Methods
### Clone
> **Clone**(): [PoseTransitionTime](/vext/ref/fb/posetransitiontime)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PoseTransitionTime](/vext/ref/fb/posetransitiontime)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PoseTransitionTime](/vext/ref/fb/posetransitiontime) type.

