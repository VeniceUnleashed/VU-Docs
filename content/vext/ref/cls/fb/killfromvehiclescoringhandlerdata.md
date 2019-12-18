---
title: KillFromVehicleScoringHandlerData (Frostbite Container)
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
| KillFromVehicleScoringHandlerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [KillFromVehicleScoringHandlerData](KillFromVehicleScoringHandlerData). |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [KillFromVehicleScoringHandlerData](KillFromVehicleScoringHandlerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [KillFromVehicleScoringHandlerData](KillFromVehicleScoringHandlerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
