---
title: SpawnDirectionData (Frostbite Container)
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SpawnDirectionData()                                                          | Create a new instance of this container type.                                                                               |
| SpawnDirectionData(SpawnDirectionData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SpawnDirectionData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [SpawnDirectionData](SpawnDirectionData).                      |
| SpawnDirectionData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [SpawnDirectionData](SpawnDirectionData).        |
| SpawnDirectionData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpawnDirectionData](SpawnDirectionData). |

## Properties

| Name                                | Type   | Description |
| ----------------------------------- | ------ | ----------- |
| directionFromEmitterOrigin          | number |             |
| inheritSpeedAndDirectionFromEmitter | bool   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnDirectionData](SpawnDirectionData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpawnDirectionData](SpawnDirectionData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
