---
title: SpawnRateData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| SpawnRateData()                                                          | Create a new instance of this container type.                                                                     |
| SpawnRateData(SpawnRateData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| SpawnRateData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [SpawnRateData](/vext/ref/fb/spawnratedata/).                      |
| SpawnRateData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SpawnRateData](/vext/ref/fb/spawnratedata/).        |
| SpawnRateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnRateData](/vext/ref/fb/spawnratedata/). |

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
| [SpawnRateData](/vext/ref/fb/spawnratedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnRateData](/vext/ref/fb/spawnratedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
