---
title: MovementComponentBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[MovementComponentBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "animationControlled" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MovementComponentBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MovementComponentBinding {#constructor-0}
> **MovementComponentBinding**()

Creates a new [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding) frostbite structure.

## Properties
### {{% prop-heading "animationControlled" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MovementComponentBinding](/vext/ref/fb/movementcomponentbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding) type.

