---
title: PhysicsPartInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[PhysicsPartInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "partComponentIndex" >}} | int |
| {{< prop "healthStateIndex" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PhysicsPartInfo](/vext/ref/fb/physicspartinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PhysicsPartInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PhysicsPartInfo {#constructor-0}
> **PhysicsPartInfo**()

Creates a new [PhysicsPartInfo](/vext/ref/fb/physicspartinfo) frostbite structure.

## Properties
### {{% prop-heading "partComponentIndex" %}}
> **int**

### {{% prop-heading "healthStateIndex" %}}
> **int**

## Methods
### Clone
> **Clone**(): [PhysicsPartInfo](/vext/ref/fb/physicspartinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PhysicsPartInfo](/vext/ref/fb/physicspartinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PhysicsPartInfo](/vext/ref/fb/physicspartinfo) type.

