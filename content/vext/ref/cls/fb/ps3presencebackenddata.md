---
title: Ps3PresenceBackendData (Frostbite Container)
---
### Base Classes

[PresenceBackendData](PresenceBackendData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Ps3PresenceBackendData()                                                          | Create a new instance of this container type.                                                                                       |
| Ps3PresenceBackendData(Ps3PresenceBackendData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| Ps3PresenceBackendData([PresenceBackendData](PresenceBackendData) other)          | Upcast an instance of type [PresenceBackendData](PresenceBackendData) to [Ps3PresenceBackendData](Ps3PresenceBackendData).          |
| Ps3PresenceBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [Ps3PresenceBackendData](Ps3PresenceBackendData).                                      |
| Ps3PresenceBackendData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Ps3PresenceBackendData](Ps3PresenceBackendData). |

## Properties

| Name                    | Type                                                         | Description |
| ----------------------- | ------------------------------------------------------------ | ----------- |
| communicationId         | string                                                       |             |
| communicationSignature  | string                                                       |             |
| skuSettings             | [Ps3SkuSettings](Ps3SkuSettings)\[\]                         |             |
| parentalLockAgeSettings | [Ps3ParentalLockAgeSettings](Ps3ParentalLockAgeSettings)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [Ps3PresenceBackendData](Ps3PresenceBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Ps3PresenceBackendData](Ps3PresenceBackendData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
