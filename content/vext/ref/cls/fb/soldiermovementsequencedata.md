---
title: SoldierMovementSequenceData (Frostbite Container)
---
### Base Classes

[MovementActionData](MovementActionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierMovementSequenceData()                                                          | Create a new instance of this container type.                                                                                                 |
| SoldierMovementSequenceData(SoldierMovementSequenceData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SoldierMovementSequenceData([MovementActionData](MovementActionData) other)            | Upcast an instance of type [MovementActionData](MovementActionData) to [SoldierMovementSequenceData](SoldierMovementSequenceData).            |
| SoldierMovementSequenceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierMovementSequenceData](SoldierMovementSequenceData). |

## Properties

| Name                       | Type                                   | Description |
| -------------------------- | -------------------------------------- | ----------- |
| recordedInput              | [RecordedInputData](RecordedInputData) |             |
| inputRecordingIndex        | number                                 |             |
| ignoreRecordingIndexFilter | bool                                   |             |
| reportWhenFinished         | bool                                   |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierMovementSequenceData](SoldierMovementSequenceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierMovementSequenceData](SoldierMovementSequenceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
