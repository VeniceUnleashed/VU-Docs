---
title: CharacterPhysicsData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| CharacterPhysicsData()                                                          | Create a new instance of this container type.                                                                                   |
| CharacterPhysicsData(CharacterPhysicsData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| CharacterPhysicsData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CharacterPhysicsData](CharacterPhysicsData).                                      |
| CharacterPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterPhysicsData](CharacterPhysicsData). |

## Properties

| Name                                 | Type                                           | Description |
| ------------------------------------ | ---------------------------------------------- | ----------- |
| poses                                | [CharacterPoseData](CharacterPoseData)\[\]     |             |
| states                               | [CharacterStateData](CharacterStateData)\[\]   |             |
| defaultState                         | [CharacterStateType](CharacterStateType)       |             |
| sprint                               | [CharacterSprintData](CharacterSprintData)     |             |
| materialPair                         | [MaterialContainerPair](MaterialContainerPair) |             |
| pushableObjectWeight                 | number                                         |             |
| mass                                 | number                                         |             |
| maxAscendAngle                       | number                                         |             |
| physicalRadius                       | number                                         |             |
| waterDepthLimit                      | number                                         |             |
| inputAcceleration                    | number                                         |             |
| ladderAcceptAngle                    | number                                         |             |
| ladderAcceptAnglePitch               | number                                         |             |
| jumpPenaltyTime                      | number                                         |             |
| jumpPenaltyFactor                    | number                                         |             |
| radiusToPredictCollisionOnCharacters | number                                         |             |
| allowPoseChangeDuringTransition      | bool                                           |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterPhysicsData](CharacterPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterPhysicsData](CharacterPhysicsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
