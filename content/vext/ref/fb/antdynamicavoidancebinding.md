---
title: AntDynamicAvoidanceBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[AntDynamicAvoidanceBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "timeUntilCollision" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "distanceUntilCollision" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "normalizedVelocity" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "speed" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntDynamicAvoidanceBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntDynamicAvoidanceBinding {#constructor-0}
> **AntDynamicAvoidanceBinding**()

Creates a new [AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding) frostbite structure.

## Properties
### {{% prop-heading "timeUntilCollision" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "distanceUntilCollision" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "normalizedVelocity" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "speed" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding) type.

