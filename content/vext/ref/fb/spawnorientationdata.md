---
title: SpawnOrientationData
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SpawnOrientationData()                                                          | Create a new instance of this container type.                                                                                   |
| SpawnOrientationData(SpawnOrientationData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SpawnOrientationData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [SpawnOrientationData](SpawnOrientationData).                      |
| SpawnOrientationData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [SpawnOrientationData](SpawnOrientationData).        |
| SpawnOrientationData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnOrientationData](SpawnOrientationData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnOrientationData](SpawnOrientationData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnOrientationData](SpawnOrientationData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
