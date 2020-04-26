---
title: AntInteractionBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[AntInteractionBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "otherAnimatableID" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AntInteractionBinding](/vext/ref/fb/antinteractionbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntInteractionBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntInteractionBinding {#constructor-0}
> **AntInteractionBinding**()

Creates a new [AntInteractionBinding](/vext/ref/fb/antinteractionbinding) frostbite structure.

## Properties
### {{% prop-heading "otherAnimatableID" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [AntInteractionBinding](/vext/ref/fb/antinteractionbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AntInteractionBinding](/vext/ref/fb/antinteractionbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntInteractionBinding](/vext/ref/fb/antinteractionbinding) type.

