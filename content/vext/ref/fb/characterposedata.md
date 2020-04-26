---
title: CharacterPoseData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[CharacterPoseData](#constructor-0)**() |
| **[CharacterPoseData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CharacterPoseData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "eyePosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "collisionBoxMaxExpand" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "collisionBoxMinExpand" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "height" >}} | float |
| {{< prop "stepHeight" >}} | float |
| {{< prop "throttleModifierCurve" >}} | [Vec2](/vext/ref/shared/type/vec2)[] |
| {{< prop "poseType" >}} | [CharacterPoseType](/vext/ref/fb/characterposetype) |
| {{< prop "collisionType" >}} | [CharacterPoseCollisionType](/vext/ref/fb/characterposecollisiontype) |
| {{< prop "lookConstraints" >}} | [LookConstraintsData](/vext/ref/fb/lookconstraintsdata) |
| {{< prop "transitionTimes" >}} | [PoseTransitionTime](/vext/ref/fb/posetransitiontime)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterPoseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterPoseData {#constructor-0}

> **CharacterPoseData**()

Creates a new [CharacterPoseData](/vext/ref/fb/characterposedata) frostbite instance.

### CharacterPoseData {#constructor-1}

> **CharacterPoseData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterPoseData](/vext/ref/fb/characterposedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CharacterPoseData {#constructor-2}

> **CharacterPoseData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CharacterPoseData](/vext/ref/fb/characterposedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CharacterPoseData](/vext/ref/fb/characterposedata). |

## Properties

### {{% prop-heading "eyePosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "collisionBoxMaxExpand" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "collisionBoxMinExpand" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "height" %}}

> **float**

### {{% prop-heading "stepHeight" %}}

> **float**

### {{% prop-heading "throttleModifierCurve" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**[]

### {{% prop-heading "poseType" %}}

> **[CharacterPoseType](/vext/ref/fb/characterposetype)**

### {{% prop-heading "collisionType" %}}

> **[CharacterPoseCollisionType](/vext/ref/fb/characterposecollisiontype)**

### {{% prop-heading "lookConstraints" %}}

> **[LookConstraintsData](/vext/ref/fb/lookconstraintsdata)**

### {{% prop-heading "transitionTimes" %}}

> **[PoseTransitionTime](/vext/ref/fb/posetransitiontime)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterPoseData](/vext/ref/fb/characterposedata) type.

