---
title: SpawnRotationData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SpawnRotationData()                                                          | Create a new instance of this container type.                                                                             |
| SpawnRotationData(SpawnRotationData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SpawnRotationData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [SpawnRotationData](/vext/ref/fb/spawnrotationdata/).                      |
| SpawnRotationData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SpawnRotationData](/vext/ref/fb/spawnrotationdata/).        |
| SpawnRotationData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnRotationData](/vext/ref/fb/spawnrotationdata/). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| rotation | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnRotationData](/vext/ref/fb/spawnrotationdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnRotationData](/vext/ref/fb/spawnrotationdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
