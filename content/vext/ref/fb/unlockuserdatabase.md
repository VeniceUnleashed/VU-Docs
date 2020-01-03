---
title: UnlockUserDataBase
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UnlockUserDataBase()                                                          | Create a new instance of this container type.                                                                               |
| UnlockUserDataBase(UnlockUserDataBase other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UnlockUserDataBase([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/).                                      |
| UnlockUserDataBase([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
