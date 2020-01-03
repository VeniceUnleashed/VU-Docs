---
title: SpawnAnimationFrameData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SpawnAnimationFrameData()                                                          | Create a new instance of this container type.                                                                                         |
| SpawnAnimationFrameData(SpawnAnimationFrameData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| SpawnAnimationFrameData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [SpawnAnimationFrameData](/vext/ref/fb/spawnanimationframedata/).                      |
| SpawnAnimationFrameData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SpawnAnimationFrameData](/vext/ref/fb/spawnanimationframedata/).        |
| SpawnAnimationFrameData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnAnimationFrameData](/vext/ref/fb/spawnanimationframedata/). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| animationFrame | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnAnimationFrameData](/vext/ref/fb/spawnanimationframedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnAnimationFrameData](/vext/ref/fb/spawnanimationframedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
