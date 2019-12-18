---
title: SpawnRotationSpeedData (Frostbite Container)
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SpawnRotationSpeedData()                                                          | Create a new instance of this container type.                                                                                       |
| SpawnRotationSpeedData(SpawnRotationSpeedData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SpawnRotationSpeedData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [SpawnRotationSpeedData](SpawnRotationSpeedData).                      |
| SpawnRotationSpeedData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [SpawnRotationSpeedData](SpawnRotationSpeedData).        |
| SpawnRotationSpeedData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpawnRotationSpeedData](SpawnRotationSpeedData). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| rotationSpeed | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpawnRotationSpeedData](SpawnRotationSpeedData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpawnRotationSpeedData](SpawnRotationSpeedData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
