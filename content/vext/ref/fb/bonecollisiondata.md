---
title: BoneCollisionData
---

## Summary

### Constructors

|  |
| --- |
| **[BoneCollisionData](#constructor-0)**() |
| **[BoneCollisionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "debugDrawColor" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "capsuleOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "boneName" >}} | string |
| {{< prop "animationHitReactionType" >}} | [HitReactionType](/vext/ref/fb/hitreactiontype) |
| {{< prop "materialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "boneAxis" >}} | int |
| {{< prop "capsuleLength" >}} | float |
| {{< prop "capsuleRadius" >}} | float |
| {{< prop "minPitch" >}} | [PitchModifier](/vext/ref/fb/pitchmodifier) |
| {{< prop "maxPitch" >}} | [PitchModifier](/vext/ref/fb/pitchmodifier) |
| {{< prop "validInHiLod" >}} | bool |
| {{< prop "validInLowLod" >}} | bool |
| {{< prop "usePhysicsRotation" >}} | bool |
| {{< prop "deactivateIfBehindWall" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [BoneCollisionData](/vext/ref/fb/bonecollisiondata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BoneCollisionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BoneCollisionData {#constructor-0}

> **BoneCollisionData**()

Creates a new [BoneCollisionData](/vext/ref/fb/bonecollisiondata) frostbite instance.

### BoneCollisionData {#constructor-1}

> **BoneCollisionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BoneCollisionData](/vext/ref/fb/bonecollisiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "debugDrawColor" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "capsuleOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "boneName" %}}

> **string**

### {{% prop-heading "animationHitReactionType" %}}

> **[HitReactionType](/vext/ref/fb/hitreactiontype)**

### {{% prop-heading "materialPair" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "boneAxis" %}}

> **int**

### {{% prop-heading "capsuleLength" %}}

> **float**

### {{% prop-heading "capsuleRadius" %}}

> **float**

### {{% prop-heading "minPitch" %}}

> **[PitchModifier](/vext/ref/fb/pitchmodifier)**

### {{% prop-heading "maxPitch" %}}

> **[PitchModifier](/vext/ref/fb/pitchmodifier)**

### {{% prop-heading "validInHiLod" %}}

> **bool**

### {{% prop-heading "validInLowLod" %}}

> **bool**

### {{% prop-heading "usePhysicsRotation" %}}

> **bool**

### {{% prop-heading "deactivateIfBehindWall" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [BoneCollisionData](/vext/ref/fb/bonecollisiondata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[BoneCollisionData](/vext/ref/fb/bonecollisiondata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BoneCollisionData](/vext/ref/fb/bonecollisiondata) type.

