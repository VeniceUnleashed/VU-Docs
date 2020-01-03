---
title: SpawnAnimationData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SpawnAnimationData()                                                          | Create a new instance of this container type.                                                                               |
| SpawnAnimationData(SpawnAnimationData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SpawnAnimationData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [SpawnAnimationData](/vext/ref/fb/spawnanimationdata/).                      |
| SpawnAnimationData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SpawnAnimationData](/vext/ref/fb/spawnanimationdata/).        |
| SpawnAnimationData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnAnimationData](/vext/ref/fb/spawnanimationdata/). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| animationSpeed | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnAnimationData](/vext/ref/fb/spawnanimationdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnAnimationData](/vext/ref/fb/spawnanimationdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
