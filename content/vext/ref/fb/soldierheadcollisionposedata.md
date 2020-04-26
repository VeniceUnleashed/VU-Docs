---
title: SoldierHeadCollisionPoseData
---

## Summary

### Constructors

|  |
| --- |
| **[SoldierHeadCollisionPoseData](#constructor-0)**() |
| **[SoldierHeadCollisionPoseData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "idleOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "movingForwardOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierHeadCollisionPoseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierHeadCollisionPoseData {#constructor-0}

> **SoldierHeadCollisionPoseData**()

Creates a new [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata) frostbite instance.

### SoldierHeadCollisionPoseData {#constructor-1}

> **SoldierHeadCollisionPoseData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "idleOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "movingForwardOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Methods

### Clone {#clone}

> **Clone**(): [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata) type.

