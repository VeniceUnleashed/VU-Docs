---
title: LanServerBackendData
---
### Base Classes

[ServerBackendData](ServerBackendData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LanServerBackendData()                                                          | Create a new instance of this container type.                                                                                   |
| LanServerBackendData(LanServerBackendData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LanServerBackendData([ServerBackendData](ServerBackendData) other)              | Upcast an instance of type [ServerBackendData](ServerBackendData) to [LanServerBackendData](LanServerBackendData).              |
| LanServerBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [LanServerBackendData](LanServerBackendData).                                      |
| LanServerBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LanServerBackendData](LanServerBackendData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LanServerBackendData](LanServerBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LanServerBackendData](LanServerBackendData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
