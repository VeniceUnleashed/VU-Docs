---
title: UnlockUserDataBase (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UnlockUserDataBase()                                                          | Create a new instance of this container type.                                                                               |
| UnlockUserDataBase(UnlockUserDataBase other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UnlockUserDataBase([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UnlockUserDataBase](UnlockUserDataBase).                                      |
| UnlockUserDataBase([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UnlockUserDataBase](UnlockUserDataBase). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UnlockUserDataBase](UnlockUserDataBase) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UnlockUserDataBase](UnlockUserDataBase) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
