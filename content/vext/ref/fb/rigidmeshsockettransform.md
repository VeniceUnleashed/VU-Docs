---
title: RigidMeshSocketTransform
---


## Summary
### Constructors
| |
| ----------- |
| **[RigidMeshSocketTransform](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "socketObject" >}} | [WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RigidMeshSocketTransform" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RigidMeshSocketTransform {#constructor-0}
> **RigidMeshSocketTransform**()

Creates a new [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform) frostbite structure.

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "socketObject" %}}
> **[WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata)** | **nil**

## Methods
### Clone
> **Clone**(): [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform) type.

