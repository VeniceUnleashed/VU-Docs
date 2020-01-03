---
title: PlayerOrderTrackerData
---
### Base Classes

[HudTrackerData](/vext/ref/fb/hudtrackerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PlayerOrderTrackerData()                                                          | Create a new instance of this container type.                                                                                       |
| PlayerOrderTrackerData(PlayerOrderTrackerData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PlayerOrderTrackerData([HudTrackerData](/vext/ref/fb/hudtrackerdata/) other)                    | Upcast an instance of type [HudTrackerData](/vext/ref/fb/hudtrackerdata/) to [PlayerOrderTrackerData](/vext/ref/fb/playerordertrackerdata/).                    |
| PlayerOrderTrackerData([UIPartData](/vext/ref/fb/uipartdata/) other)                            | Upcast an instance of type [UIPartData](/vext/ref/fb/uipartdata/) to [PlayerOrderTrackerData](/vext/ref/fb/playerordertrackerdata/).                            |
| PlayerOrderTrackerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerOrderTrackerData](/vext/ref/fb/playerordertrackerdata/). |

## Properties

| Name       | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| attackIcon | [UIHudIcon](/vext/ref/fb/uihudicon/) |             |
| defendIcon | [UIHudIcon](/vext/ref/fb/uihudicon/) |             |
| moveToIcon | [UIHudIcon](/vext/ref/fb/uihudicon/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerOrderTrackerData](/vext/ref/fb/playerordertrackerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerOrderTrackerData](/vext/ref/fb/playerordertrackerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
