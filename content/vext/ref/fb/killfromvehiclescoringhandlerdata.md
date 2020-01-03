---
title: KillFromVehicleScoringHandlerData
---
### Base Classes

[ScoringHandlerData](ScoringHandlerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| KillFromVehicleScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                                             |
| KillFromVehicleScoringHandlerData(KillFromVehicleScoringHandlerData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| KillFromVehicleScoringHandlerData([ScoringHandlerData](ScoringHandlerData) other)            | Upcast an instance of type [ScoringHandlerData](ScoringHandlerData) to [KillFromVehicleScoringHandlerData](KillFromVehicleScoringHandlerData).            |
| KillFromVehicleScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KillFromVehicleScoringHandlerData](KillFromVehicleScoringHandlerData). |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [KillFromVehicleScoringHandlerData](KillFromVehicleScoringHandlerData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KillFromVehicleScoringHandlerData](KillFromVehicleScoringHandlerData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
