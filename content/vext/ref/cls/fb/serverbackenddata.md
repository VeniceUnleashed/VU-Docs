---
title: ServerBackendData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ServerBackendData()                                                          | Create a new instance of this container type.                                                                             |
| ServerBackendData(ServerBackendData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| ServerBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ServerBackendData](ServerBackendData).                                      |
| ServerBackendData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ServerBackendData](ServerBackendData). |

## Properties

| Name     | Type                                                               | Description |
| -------- | ------------------------------------------------------------------ | ----------- |
| mappings | [ServerBackendAttributeMapping](ServerBackendAttributeMapping)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [ServerBackendData](ServerBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ServerBackendData](ServerBackendData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
