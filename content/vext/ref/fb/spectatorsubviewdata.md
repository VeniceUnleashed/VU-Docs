---
title: SpectatorSubViewData
---
### Base Classes

[SubViewData](SubViewData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SpectatorSubViewData()                                                          | Create a new instance of this container type.                                                                                   |
| SpectatorSubViewData(SpectatorSubViewData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SpectatorSubViewData([SubViewData](SubViewData) other)                          | Upcast an instance of type [SubViewData](SubViewData) to [SpectatorSubViewData](SpectatorSubViewData).                          |
| SpectatorSubViewData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpectatorSubViewData](SpectatorSubViewData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpectatorSubViewData](SpectatorSubViewData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpectatorSubViewData](SpectatorSubViewData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
