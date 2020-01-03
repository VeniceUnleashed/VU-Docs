---
title: VeniceMissionObjectiveHudData
---
### Base Classes

[MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceMissionObjectiveHudData()                                                          | Create a new instance of this container type.                                                                                                     |
| VeniceMissionObjectiveHudData(VeniceMissionObjectiveHudData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VeniceMissionObjectiveHudData([MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata/) other)  | Upcast an instance of type [MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata/) to [VeniceMissionObjectiveHudData](/vext/ref/fb/venicemissionobjectivehuddata/).  |
| VeniceMissionObjectiveHudData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceMissionObjectiveHudData](/vext/ref/fb/venicemissionobjectivehuddata/). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceMissionObjectiveHudData](/vext/ref/fb/venicemissionobjectivehuddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceMissionObjectiveHudData](/vext/ref/fb/venicemissionobjectivehuddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
