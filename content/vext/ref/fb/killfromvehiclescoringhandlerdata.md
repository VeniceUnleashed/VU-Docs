---
title: KillFromVehicleScoringHandlerData
---
### Base Classes

[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| KillFromVehicleScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                                             |
| KillFromVehicleScoringHandlerData(KillFromVehicleScoringHandlerData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| KillFromVehicleScoringHandlerData([ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) other)            | Upcast an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) to [KillFromVehicleScoringHandlerData](/vext/ref/fb/killfromvehiclescoringhandlerdata/).            |
| KillFromVehicleScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KillFromVehicleScoringHandlerData](/vext/ref/fb/killfromvehiclescoringhandlerdata/). |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [KillFromVehicleScoringHandlerData](/vext/ref/fb/killfromvehiclescoringhandlerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KillFromVehicleScoringHandlerData](/vext/ref/fb/killfromvehiclescoringhandlerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
