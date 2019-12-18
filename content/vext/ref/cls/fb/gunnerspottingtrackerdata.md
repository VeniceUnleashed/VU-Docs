---
title: GunnerSpottingTrackerData (Frostbite Container)
---
### Base Classes

[HudTrackerData](HudTrackerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GunnerSpottingTrackerData()                                                          | Create a new instance of this container type.                                                                                             |
| GunnerSpottingTrackerData(GunnerSpottingTrackerData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| GunnerSpottingTrackerData([HudTrackerData](HudTrackerData) other)                    | Upcast an instance of type [HudTrackerData](HudTrackerData) to [GunnerSpottingTrackerData](GunnerSpottingTrackerData).                    |
| GunnerSpottingTrackerData([UIPartData](UIPartData) other)                            | Upcast an instance of type [UIPartData](UIPartData) to [GunnerSpottingTrackerData](GunnerSpottingTrackerData).                            |
| GunnerSpottingTrackerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GunnerSpottingTrackerData](GunnerSpottingTrackerData). |

## Properties

| Name                | Type                   | Description |
| ------------------- | ---------------------- | ----------- |
| spottedInfantryIcon | [UIHudIcon](UIHudIcon) |             |
| spottedVehicleIcon  | [UIHudIcon](UIHudIcon) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GunnerSpottingTrackerData](GunnerSpottingTrackerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GunnerSpottingTrackerData](GunnerSpottingTrackerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
