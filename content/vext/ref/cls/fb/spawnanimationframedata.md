---
title: SpawnAnimationFrameData (Frostbite Container)
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SpawnAnimationFrameData()                                                          | Create a new instance of this container type.                                                                                         |
| SpawnAnimationFrameData(SpawnAnimationFrameData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| SpawnAnimationFrameData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [SpawnAnimationFrameData](SpawnAnimationFrameData).                      |
| SpawnAnimationFrameData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [SpawnAnimationFrameData](SpawnAnimationFrameData).        |
| SpawnAnimationFrameData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpawnAnimationFrameData](SpawnAnimationFrameData). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| animationFrame | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnAnimationFrameData](SpawnAnimationFrameData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpawnAnimationFrameData](SpawnAnimationFrameData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
