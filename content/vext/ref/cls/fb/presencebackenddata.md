---
title: PresenceBackendData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PresenceBackendData()                                                          | Create a new instance of this container type.                                                                                 |
| PresenceBackendData(PresenceBackendData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PresenceBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceBackendData](PresenceBackendData).                                      |
| PresenceBackendData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceBackendData](PresenceBackendData). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| requests | [PresenceRequest](PresenceRequest)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresenceBackendData](PresenceBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceBackendData](PresenceBackendData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
