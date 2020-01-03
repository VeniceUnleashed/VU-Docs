---
title: UnlockAssetBase
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UnlockAssetBase()                                                          | Create a new instance of this container type.                                                                         |
| UnlockAssetBase(UnlockAssetBase other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UnlockAssetBase([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UnlockAssetBase](/vext/ref/fb/unlockassetbase/).                                      |
| UnlockAssetBase([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockAssetBase](/vext/ref/fb/unlockassetbase/). |

## Properties

| Name                 | Type                                     | Description |
| -------------------- | ---------------------------------------- | ----------- |
| unlockScore          | number                                   |             |
| unlockUserData       | [UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/) |             |
| debugUnlockId        | string                                   |             |
| identifier           | number                                   |             |
| availableForPlayer   | [UnlockAvailability](/vext/ref/fb/unlockavailability/) |             |
| nextLevelUnlockAsset | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/)       |             |
| autoAvailable        | bool                                     |             |
| hiddenInProgression  | bool                                     |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
