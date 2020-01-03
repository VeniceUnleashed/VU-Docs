---
title: LocalForceData
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| LocalForceData()                                                          | Create a new instance of this container type.                                                                       |
| LocalForceData(LocalForceData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| LocalForceData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [LocalForceData](LocalForceData).                      |
| LocalForceData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [LocalForceData](LocalForceData).        |
| LocalForceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LocalForceData](LocalForceData). |

## Properties

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| localForce | [Vec3](/vext/ref/shared/class/Vec3) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [LocalForceData](LocalForceData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LocalForceData](LocalForceData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
