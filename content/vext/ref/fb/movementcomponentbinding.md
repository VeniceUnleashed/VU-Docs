---
title: MovementComponentBinding
---

## Summary

### Constructors

|  |
| --- |
| **[MovementComponentBinding](#constructor-0)**() |
| **[MovementComponentBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "animationControlled" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MovementComponentBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MovementComponentBinding {#constructor-0}

> **MovementComponentBinding**()

Creates a new [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding) frostbite instance.

### MovementComponentBinding {#constructor-1}

> **MovementComponentBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "animationControlled" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MovementComponentBinding](/vext/ref/fb/movementcomponentbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding) type.

