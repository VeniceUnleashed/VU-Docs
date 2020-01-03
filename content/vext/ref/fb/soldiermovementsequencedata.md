---
title: SoldierMovementSequenceData
---
### Base Classes

[MovementActionData](/vext/ref/fb/movementactiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierMovementSequenceData()                                                          | Create a new instance of this container type.                                                                                                 |
| SoldierMovementSequenceData(SoldierMovementSequenceData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SoldierMovementSequenceData([MovementActionData](/vext/ref/fb/movementactiondata/) other)            | Upcast an instance of type [MovementActionData](/vext/ref/fb/movementactiondata/) to [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata/).            |
| SoldierMovementSequenceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata/). |

## Properties

| Name                       | Type                                   | Description |
| -------------------------- | -------------------------------------- | ----------- |
| recordedInput              | [RecordedInputData](/vext/ref/fb/recordedinputdata/) |             |
| inputRecordingIndex        | number                                 |             |
| ignoreRecordingIndexFilter | bool                                   |             |
| reportWhenFinished         | bool                                   |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
