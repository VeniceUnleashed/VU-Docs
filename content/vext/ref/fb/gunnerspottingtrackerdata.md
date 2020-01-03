---
title: GunnerSpottingTrackerData
---
### Base Classes

[HudTrackerData](/vext/ref/fb/hudtrackerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GunnerSpottingTrackerData()                                                          | Create a new instance of this container type.                                                                                             |
| GunnerSpottingTrackerData(GunnerSpottingTrackerData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| GunnerSpottingTrackerData([HudTrackerData](/vext/ref/fb/hudtrackerdata/) other)                    | Upcast an instance of type [HudTrackerData](/vext/ref/fb/hudtrackerdata/) to [GunnerSpottingTrackerData](/vext/ref/fb/gunnerspottingtrackerdata/).                    |
| GunnerSpottingTrackerData([UIPartData](/vext/ref/fb/uipartdata/) other)                            | Upcast an instance of type [UIPartData](/vext/ref/fb/uipartdata/) to [GunnerSpottingTrackerData](/vext/ref/fb/gunnerspottingtrackerdata/).                            |
| GunnerSpottingTrackerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GunnerSpottingTrackerData](/vext/ref/fb/gunnerspottingtrackerdata/). |

## Properties

| Name                | Type                   | Description |
| ------------------- | ---------------------- | ----------- |
| spottedInfantryIcon | [UIHudIcon](/vext/ref/fb/uihudicon/) |             |
| spottedVehicleIcon  | [UIHudIcon](/vext/ref/fb/uihudicon/) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GunnerSpottingTrackerData](/vext/ref/fb/gunnerspottingtrackerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GunnerSpottingTrackerData](/vext/ref/fb/gunnerspottingtrackerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
