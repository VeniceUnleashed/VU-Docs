---
title: SpawnAnimationData (Frostbite Container)
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SpawnAnimationData()                                                          | Create a new instance of this container type.                                                                               |
| SpawnAnimationData(SpawnAnimationData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SpawnAnimationData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [SpawnAnimationData](SpawnAnimationData).                      |
| SpawnAnimationData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [SpawnAnimationData](SpawnAnimationData).        |
| SpawnAnimationData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpawnAnimationData](SpawnAnimationData). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| animationSpeed | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnAnimationData](SpawnAnimationData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpawnAnimationData](SpawnAnimationData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
