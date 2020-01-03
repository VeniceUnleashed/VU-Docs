---
title: VeniceUnlockUserData
---
### Base Classes

[UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VeniceUnlockUserData()                                                          | Create a new instance of this container type.                                                                                   |
| VeniceUnlockUserData(VeniceUnlockUserData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VeniceUnlockUserData([UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/) other)            | Upcast an instance of type [UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/) to [VeniceUnlockUserData](/vext/ref/fb/veniceunlockuserdata/).            |
| VeniceUnlockUserData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VeniceUnlockUserData](/vext/ref/fb/veniceunlockuserdata/).                                      |
| VeniceUnlockUserData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceUnlockUserData](/vext/ref/fb/veniceunlockuserdata/). |

## Properties

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| checkSquad | bool |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceUnlockUserData](/vext/ref/fb/veniceunlockuserdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceUnlockUserData](/vext/ref/fb/veniceunlockuserdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
