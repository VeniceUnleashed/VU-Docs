---
title: LodBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[LodBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "disableControllerUpdate" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "disablePoseUpdate" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "distanceFromCamera" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LodBinding](/vext/ref/fb/lodbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LodBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LodBinding {#constructor-0}
> **LodBinding**()

Creates a new [LodBinding](/vext/ref/fb/lodbinding) frostbite structure.

## Properties
### {{% prop-heading "disableControllerUpdate" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "disablePoseUpdate" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "distanceFromCamera" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [LodBinding](/vext/ref/fb/lodbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LodBinding](/vext/ref/fb/lodbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LodBinding](/vext/ref/fb/lodbinding) type.

