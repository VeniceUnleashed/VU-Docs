---
title: PresenceBlobServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceBlobServiceData()                                                          | Create a new instance of this container type.                                                                                         |
| PresenceBlobServiceData(PresenceBlobServiceData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PresenceBlobServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceBlobServiceData](PresenceBlobServiceData).          |
| PresenceBlobServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceBlobServiceData](PresenceBlobServiceData).                                      |
| PresenceBlobServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceBlobServiceData](PresenceBlobServiceData). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceBlobServiceData](PresenceBlobServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceBlobServiceData](PresenceBlobServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
