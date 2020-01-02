---
title: SpawnSubViewData
---
### Base Classes

[SubViewData](SubViewData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SpawnSubViewData()                                                          | Create a new instance of this container type.                                                                           |
| SpawnSubViewData(SpawnSubViewData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SpawnSubViewData([SubViewData](SubViewData) other)                          | Upcast an instance of type [SubViewData](SubViewData) to [SpawnSubViewData](SpawnSubViewData).                          |
| SpawnSubViewData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnSubViewData](SpawnSubViewData). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SpawnSubViewData](SpawnSubViewData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnSubViewData](SpawnSubViewData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
