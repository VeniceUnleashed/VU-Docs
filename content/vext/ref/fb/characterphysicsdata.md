---
title: CharacterPhysicsData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| CharacterPhysicsData()                                                          | Create a new instance of this container type.                                                                                   |
| CharacterPhysicsData(CharacterPhysicsData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| CharacterPhysicsData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata/).                                      |
| CharacterPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata/). |

## Properties

| Name                                 | Type                                           | Description |
| ------------------------------------ | ---------------------------------------------- | ----------- |
| poses                                | [CharacterPoseData](/vext/ref/fb/characterposedata/)\[\]     |             |
| states                               | [CharacterStateData](/vext/ref/fb/characterstatedata/)\[\]   |             |
| defaultState                         | [CharacterStateType](/vext/ref/fb/characterstatetype/)       |             |
| sprint                               | [CharacterSprintData](/vext/ref/fb/charactersprintdata/)     |             |
| materialPair                         | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/) |             |
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
| [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
