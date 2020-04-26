---
title: PoseTransitionTime
---

## Summary

### Constructors

|  |
| --- |
| **[PoseTransitionTime](#constructor-0)**() |
| **[PoseTransitionTime](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "toPose" >}} | [CharacterPoseType](/vext/ref/fb/characterposetype) |
| {{< prop "transitionTime" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PoseTransitionTime](/vext/ref/fb/posetransitiontime) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PoseTransitionTime" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PoseTransitionTime {#constructor-0}

> **PoseTransitionTime**()

Creates a new [PoseTransitionTime](/vext/ref/fb/posetransitiontime) frostbite instance.

### PoseTransitionTime {#constructor-1}

> **PoseTransitionTime**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PoseTransitionTime](/vext/ref/fb/posetransitiontime) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "toPose" %}}

> **[CharacterPoseType](/vext/ref/fb/characterposetype)**

### {{% prop-heading "transitionTime" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [PoseTransitionTime](/vext/ref/fb/posetransitiontime)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PoseTransitionTime](/vext/ref/fb/posetransitiontime)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PoseTransitionTime](/vext/ref/fb/posetransitiontime) type.

