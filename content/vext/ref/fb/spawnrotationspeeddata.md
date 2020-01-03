---
title: SpawnRotationSpeedData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SpawnRotationSpeedData()                                                          | Create a new instance of this container type.                                                                                       |
| SpawnRotationSpeedData(SpawnRotationSpeedData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SpawnRotationSpeedData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [SpawnRotationSpeedData](/vext/ref/fb/spawnrotationspeeddata/).                      |
| SpawnRotationSpeedData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SpawnRotationSpeedData](/vext/ref/fb/spawnrotationspeeddata/).        |
| SpawnRotationSpeedData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnRotationSpeedData](/vext/ref/fb/spawnrotationspeeddata/). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| rotationSpeed | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpawnRotationSpeedData](/vext/ref/fb/spawnrotationspeeddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnRotationSpeedData](/vext/ref/fb/spawnrotationspeeddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
