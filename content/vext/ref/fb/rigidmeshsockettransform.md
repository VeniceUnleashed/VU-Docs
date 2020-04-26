---
title: RigidMeshSocketTransform
---

## Summary

### Constructors

|  |
| --- |
| **[RigidMeshSocketTransform](#constructor-0)**() |
| **[RigidMeshSocketTransform](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "socketObject" >}} | [WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RigidMeshSocketTransform" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RigidMeshSocketTransform {#constructor-0}

> **RigidMeshSocketTransform**()

Creates a new [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform) frostbite instance.

### RigidMeshSocketTransform {#constructor-1}

> **RigidMeshSocketTransform**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "transform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "socketObject" %}}

> **[WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform) type.

