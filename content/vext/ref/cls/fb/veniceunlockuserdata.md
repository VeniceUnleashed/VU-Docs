---
title: VeniceUnlockUserData (Frostbite Container)
---
### Base Classes

[UnlockUserDataBase](UnlockUserDataBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VeniceUnlockUserData()                                                          | Create a new instance of this container type.                                                                                   |
| VeniceUnlockUserData(VeniceUnlockUserData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VeniceUnlockUserData([UnlockUserDataBase](UnlockUserDataBase) other)            | Upcast an instance of type [UnlockUserDataBase](UnlockUserDataBase) to [VeniceUnlockUserData](VeniceUnlockUserData).            |
| VeniceUnlockUserData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VeniceUnlockUserData](VeniceUnlockUserData).                                      |
| VeniceUnlockUserData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VeniceUnlockUserData](VeniceUnlockUserData). |

## Properties

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| checkSquad | bool |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceUnlockUserData](VeniceUnlockUserData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VeniceUnlockUserData](VeniceUnlockUserData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
