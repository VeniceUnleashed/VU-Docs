---
title: PresenceServiceData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PresenceServiceData()                                                          | Create a new instance of this container type.                                                                                 |
| PresenceServiceData(PresenceServiceData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PresenceServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceServiceData](PresenceServiceData).                                      |
| PresenceServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceServiceData](PresenceServiceData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresenceServiceData](PresenceServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceServiceData](PresenceServiceData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
