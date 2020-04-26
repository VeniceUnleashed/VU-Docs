---
title: CharacterPhysicsData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[CharacterPhysicsData](#constructor-0)**() |
| **[CharacterPhysicsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CharacterPhysicsData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[CharacterPhysicsData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "poses" >}} | [CharacterPoseData](/vext/ref/fb/characterposedata)[] |
| {{< prop "states" >}} | [CharacterStateData](/vext/ref/fb/characterstatedata)[] |
| {{< prop "defaultState" >}} | [CharacterStateType](/vext/ref/fb/characterstatetype) |
| {{< prop "sprint" >}} | [CharacterSprintData](/vext/ref/fb/charactersprintdata) \| nil |
| {{< prop "materialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "pushableObjectWeight" >}} | int |
| {{< prop "mass" >}} | float |
| {{< prop "maxAscendAngle" >}} | float |
| {{< prop "physicalRadius" >}} | float |
| {{< prop "waterDepthLimit" >}} | float |
| {{< prop "inputAcceleration" >}} | float |
| {{< prop "ladderAcceptAngle" >}} | float |
| {{< prop "ladderAcceptAnglePitch" >}} | float |
| {{< prop "jumpPenaltyTime" >}} | float |
| {{< prop "jumpPenaltyFactor" >}} | float |
| {{< prop "radiusToPredictCollisionOnCharacters" >}} | float |
| {{< prop "allowPoseChangeDuringTransition" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterPhysicsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterPhysicsData {#constructor-0}

> **CharacterPhysicsData**()

Creates a new [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata) frostbite instance.

### CharacterPhysicsData {#constructor-1}

> **CharacterPhysicsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CharacterPhysicsData {#constructor-2}

> **CharacterPhysicsData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata). |

### CharacterPhysicsData {#constructor-3}

> **CharacterPhysicsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata). |

## Properties

### {{% prop-heading "poses" %}}

> **[CharacterPoseData](/vext/ref/fb/characterposedata)**[]

### {{% prop-heading "states" %}}

> **[CharacterStateData](/vext/ref/fb/characterstatedata)**[]

### {{% prop-heading "defaultState" %}}

> **[CharacterStateType](/vext/ref/fb/characterstatetype)**

### {{% prop-heading "sprint" %}}

> **[CharacterSprintData](/vext/ref/fb/charactersprintdata)** \| **nil**

### {{% prop-heading "materialPair" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "pushableObjectWeight" %}}

> **int**

### {{% prop-heading "mass" %}}

> **float**

### {{% prop-heading "maxAscendAngle" %}}

> **float**

### {{% prop-heading "physicalRadius" %}}

> **float**

### {{% prop-heading "waterDepthLimit" %}}

> **float**

### {{% prop-heading "inputAcceleration" %}}

> **float**

### {{% prop-heading "ladderAcceptAngle" %}}

> **float**

### {{% prop-heading "ladderAcceptAnglePitch" %}}

> **float**

### {{% prop-heading "jumpPenaltyTime" %}}

> **float**

### {{% prop-heading "jumpPenaltyFactor" %}}

> **float**

### {{% prop-heading "radiusToPredictCollisionOnCharacters" %}}

> **float**

### {{% prop-heading "allowPoseChangeDuringTransition" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata) type.

