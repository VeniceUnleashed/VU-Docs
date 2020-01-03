---
title: SpawnPositionData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SpawnPositionData()                                                          | Create a new instance of this container type.                                                                             |
| SpawnPositionData(SpawnPositionData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SpawnPositionData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [SpawnPositionData](/vext/ref/fb/spawnpositiondata/).                      |
| SpawnPositionData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SpawnPositionData](/vext/ref/fb/spawnpositiondata/).        |
| SpawnPositionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnPositionData](/vext/ref/fb/spawnpositiondata/). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnPositionData](/vext/ref/fb/spawnpositiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnPositionData](/vext/ref/fb/spawnpositiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
