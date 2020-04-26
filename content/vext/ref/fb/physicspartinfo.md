---
title: PhysicsPartInfo
---

## Summary

### Constructors

|  |
| --- |
| **[PhysicsPartInfo](#constructor-0)**() |
| **[PhysicsPartInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "partComponentIndex" >}} | int |
| {{< prop "healthStateIndex" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PhysicsPartInfo](/vext/ref/fb/physicspartinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PhysicsPartInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PhysicsPartInfo {#constructor-0}

> **PhysicsPartInfo**()

Creates a new [PhysicsPartInfo](/vext/ref/fb/physicspartinfo) frostbite instance.

### PhysicsPartInfo {#constructor-1}

> **PhysicsPartInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PhysicsPartInfo](/vext/ref/fb/physicspartinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "partComponentIndex" %}}

> **int**

### {{% prop-heading "healthStateIndex" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [PhysicsPartInfo](/vext/ref/fb/physicspartinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PhysicsPartInfo](/vext/ref/fb/physicspartinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PhysicsPartInfo](/vext/ref/fb/physicspartinfo) type.

