---
title: AnimationDrivenBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[AnimationDrivenBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "velocity" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "enableCollision" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AnimationDrivenBinding](/vext/ref/fb/animationdrivenbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AnimationDrivenBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AnimationDrivenBinding {#constructor-0}
> **AnimationDrivenBinding**()

Creates a new [AnimationDrivenBinding](/vext/ref/fb/animationdrivenbinding) frostbite structure.

## Properties
### {{% prop-heading "velocity" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "enableCollision" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [AnimationDrivenBinding](/vext/ref/fb/animationdrivenbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AnimationDrivenBinding](/vext/ref/fb/animationdrivenbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AnimationDrivenBinding](/vext/ref/fb/animationdrivenbinding) type.

