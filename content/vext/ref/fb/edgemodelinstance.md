---
title: EdgeModelInstance
---


## Summary
### Constructors
| |
| ----------- |
| **[EdgeModelInstance](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EdgeModelInstance](/vext/ref/fb/edgemodelinstance) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EdgeModelInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EdgeModelInstance {#constructor-0}
> **EdgeModelInstance**()

Creates a new [EdgeModelInstance](/vext/ref/fb/edgemodelinstance) frostbite structure.

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

## Methods
### Clone
> **Clone**(): [EdgeModelInstance](/vext/ref/fb/edgemodelinstance)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EdgeModelInstance](/vext/ref/fb/edgemodelinstance)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EdgeModelInstance](/vext/ref/fb/edgemodelinstance) type.

