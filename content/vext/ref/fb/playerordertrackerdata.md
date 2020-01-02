---
title: PlayerOrderTrackerData
---
### Base Classes

[HudTrackerData](HudTrackerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PlayerOrderTrackerData()                                                          | Create a new instance of this container type.                                                                                       |
| PlayerOrderTrackerData(PlayerOrderTrackerData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PlayerOrderTrackerData([HudTrackerData](HudTrackerData) other)                    | Upcast an instance of type [HudTrackerData](HudTrackerData) to [PlayerOrderTrackerData](PlayerOrderTrackerData).                    |
| PlayerOrderTrackerData([UIPartData](UIPartData) other)                            | Upcast an instance of type [UIPartData](UIPartData) to [PlayerOrderTrackerData](PlayerOrderTrackerData).                            |
| PlayerOrderTrackerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerOrderTrackerData](PlayerOrderTrackerData). |

## Properties

| Name       | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| attackIcon | [UIHudIcon](UIHudIcon) |             |
| defendIcon | [UIHudIcon](UIHudIcon) |             |
| moveToIcon | [UIHudIcon](UIHudIcon) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerOrderTrackerData](PlayerOrderTrackerData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerOrderTrackerData](PlayerOrderTrackerData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
