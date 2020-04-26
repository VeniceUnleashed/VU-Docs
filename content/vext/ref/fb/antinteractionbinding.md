---
title: AntInteractionBinding
---

## Summary

### Constructors

|  |
| --- |
| **[AntInteractionBinding](#constructor-0)**() |
| **[AntInteractionBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "otherAnimatableID" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AntInteractionBinding](/vext/ref/fb/antinteractionbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntInteractionBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntInteractionBinding {#constructor-0}

> **AntInteractionBinding**()

Creates a new [AntInteractionBinding](/vext/ref/fb/antinteractionbinding) frostbite instance.

### AntInteractionBinding {#constructor-1}

> **AntInteractionBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntInteractionBinding](/vext/ref/fb/antinteractionbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "otherAnimatableID" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [AntInteractionBinding](/vext/ref/fb/antinteractionbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AntInteractionBinding](/vext/ref/fb/antinteractionbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntInteractionBinding](/vext/ref/fb/antinteractionbinding) type.

