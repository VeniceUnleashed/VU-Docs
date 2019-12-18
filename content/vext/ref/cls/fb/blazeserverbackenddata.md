---
title: BlazeServerBackendData (Frostbite Container)
---
### Base Classes

[ServerBackendData](ServerBackendData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| BlazeServerBackendData()                                                          | Create a new instance of this container type.                                                                                       |
| BlazeServerBackendData(BlazeServerBackendData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| BlazeServerBackendData([ServerBackendData](ServerBackendData) other)              | Upcast an instance of type [ServerBackendData](ServerBackendData) to [BlazeServerBackendData](BlazeServerBackendData).              |
| BlazeServerBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [BlazeServerBackendData](BlazeServerBackendData).                                      |
| BlazeServerBackendData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BlazeServerBackendData](BlazeServerBackendData). |

## Properties

| Name             | Type                                                       | Description |
| ---------------- | ---------------------------------------------------------- | ----------- |
| createParameters | [BlazeCreateGameParameters](BlazeCreateGameParameters)     |             |
| configUrl        | [OnlineEnvironmentConsoleUrl](OnlineEnvironmentConsoleUrl) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [BlazeServerBackendData](BlazeServerBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BlazeServerBackendData](BlazeServerBackendData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
