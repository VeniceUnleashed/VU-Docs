---
title: StatsCategoryScoreboardPositionData
---
### Base Classes

[StatsCategoryBaseData](StatsCategoryBaseData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryScoreboardPositionData()                                                          | Create a new instance of this container type.                                                                                                                 |
| StatsCategoryScoreboardPositionData(StatsCategoryScoreboardPositionData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| StatsCategoryScoreboardPositionData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryScoreboardPositionData](StatsCategoryScoreboardPositionData).      |
| StatsCategoryScoreboardPositionData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryScoreboardPositionData](StatsCategoryScoreboardPositionData).                        |
| StatsCategoryScoreboardPositionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryScoreboardPositionData](StatsCategoryScoreboardPositionData). |

## Properties

| Name      | Type                                         | Description |
| --------- | -------------------------------------------- | ----------- |
| positions | [ScoreboardPosition](ScoreboardPosition)\[\] |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryScoreboardPositionData](StatsCategoryScoreboardPositionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryScoreboardPositionData](StatsCategoryScoreboardPositionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
