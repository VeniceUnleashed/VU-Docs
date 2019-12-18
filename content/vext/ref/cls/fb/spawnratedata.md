---
title: SpawnRateData (Frostbite Container)
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| SpawnRateData()                                                          | Create a new instance of this container type.                                                                     |
| SpawnRateData(SpawnRateData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| SpawnRateData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [SpawnRateData](SpawnRateData).                      |
| SpawnRateData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [SpawnRateData](SpawnRateData).        |
| SpawnRateData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpawnRateData](SpawnRateData). |

## Properties

| Name                   | Type   | Description |
| ---------------------- | ------ | ----------- |
| spawnRate              | number |             |
| trailSegmentLength     | number |             |
| distributeOverTime     | bool   |             |
| distributeOverDistance | bool   |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [SpawnRateData](SpawnRateData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpawnRateData](SpawnRateData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
