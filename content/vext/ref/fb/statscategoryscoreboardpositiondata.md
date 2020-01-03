---
title: StatsCategoryScoreboardPositionData
---
### Base Classes

[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryScoreboardPositionData()                                                          | Create a new instance of this container type.                                                                                                                 |
| StatsCategoryScoreboardPositionData(StatsCategoryScoreboardPositionData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| StatsCategoryScoreboardPositionData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryScoreboardPositionData](/vext/ref/fb/statscategoryscoreboardpositiondata/).      |
| StatsCategoryScoreboardPositionData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryScoreboardPositionData](/vext/ref/fb/statscategoryscoreboardpositiondata/).                        |
| StatsCategoryScoreboardPositionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryScoreboardPositionData](/vext/ref/fb/statscategoryscoreboardpositiondata/). |

## Properties

| Name      | Type                                         | Description |
| --------- | -------------------------------------------- | ----------- |
| positions | [ScoreboardPosition](/vext/ref/fb/scoreboardposition/)\[\] |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryScoreboardPositionData](/vext/ref/fb/statscategoryscoreboardpositiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryScoreboardPositionData](/vext/ref/fb/statscategoryscoreboardpositiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
