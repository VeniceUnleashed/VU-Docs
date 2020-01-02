---
title: CharacterPoseData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| CharacterPoseData()                                                          | Create a new instance of this container type.                                                                             |
| CharacterPoseData(CharacterPoseData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| CharacterPoseData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterPoseData](CharacterPoseData). |

## Properties

| Name                  | Type                                                     | Description |
| --------------------- | -------------------------------------------------------- | ----------- |
| eyePosition           | [Vec3](/vext/ref/shared/class/Vec3)                        |             |
| collisionBoxMaxExpand | [Vec3](/vext/ref/shared/class/Vec3)                        |             |
| collisionBoxMinExpand | [Vec3](/vext/ref/shared/class/Vec3)                        |             |
| height                | number                                                   |             |
| stepHeight            | number                                                   |             |
| throttleModifierCurve | [Vec2](/vext/ref/shared/class/Vec2)\[\]                    |             |
| poseType              | [CharacterPoseType](CharacterPoseType)                   |             |
| collisionType         | [CharacterPoseCollisionType](CharacterPoseCollisionType) |             |
| lookConstraints       | [LookConstraintsData](LookConstraintsData)               |             |
| transitionTimes       | [PoseTransitionTime](PoseTransitionTime)\[\]             |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterPoseData](CharacterPoseData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterPoseData](CharacterPoseData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
