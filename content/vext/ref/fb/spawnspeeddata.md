---
title: SpawnSpeedData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SpawnSpeedData()                                                          | Create a new instance of this container type.                                                                       |
| SpawnSpeedData(SpawnSpeedData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SpawnSpeedData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [SpawnSpeedData](/vext/ref/fb/spawnspeeddata/).                      |
| SpawnSpeedData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SpawnSpeedData](/vext/ref/fb/spawnspeeddata/).        |
| SpawnSpeedData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnSpeedData](/vext/ref/fb/spawnspeeddata/). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| speed | number |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnSpeedData](/vext/ref/fb/spawnspeeddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnSpeedData](/vext/ref/fb/spawnspeeddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
