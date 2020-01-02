---
title: XenonPresenceBackendData
---
### Base Classes

[PresenceBackendData](PresenceBackendData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| XenonPresenceBackendData()                                                          | Create a new instance of this container type.                                                                                           |
| XenonPresenceBackendData(XenonPresenceBackendData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| XenonPresenceBackendData([PresenceBackendData](PresenceBackendData) other)          | Upcast an instance of type [PresenceBackendData](PresenceBackendData) to [XenonPresenceBackendData](XenonPresenceBackendData).          |
| XenonPresenceBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [XenonPresenceBackendData](XenonPresenceBackendData).                                      |
| XenonPresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [XenonPresenceBackendData](XenonPresenceBackendData). |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| titleId | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [XenonPresenceBackendData](XenonPresenceBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [XenonPresenceBackendData](XenonPresenceBackendData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
