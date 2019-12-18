---
title: UnlockAssetBase (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UnlockAssetBase()                                                          | Create a new instance of this container type.                                                                         |
| UnlockAssetBase(UnlockAssetBase other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UnlockAssetBase([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UnlockAssetBase](UnlockAssetBase).                                      |
| UnlockAssetBase([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UnlockAssetBase](UnlockAssetBase). |

## Properties

| Name                 | Type                                     | Description |
| -------------------- | ---------------------------------------- | ----------- |
| unlockScore          | number                                   |             |
| unlockUserData       | [UnlockUserDataBase](UnlockUserDataBase) |             |
| debugUnlockId        | string                                   |             |
| identifier           | number                                   |             |
| availableForPlayer   | [UnlockAvailability](UnlockAvailability) |             |
| nextLevelUnlockAsset | [UnlockAssetBase](UnlockAssetBase)       |             |
| autoAvailable        | bool                                     |             |
| hiddenInProgression  | bool                                     |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UnlockAssetBase](UnlockAssetBase) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UnlockAssetBase](UnlockAssetBase) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
