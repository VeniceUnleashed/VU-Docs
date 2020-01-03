---
title: DogTagData
---
### Base Classes

[UnlockAssetBase](/vext/ref/fb/unlockassetbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| DogTagData()                                                          | Create a new instance of this container type.                                                               |
| DogTagData(DogTagData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| DogTagData([UnlockAssetBase](/vext/ref/fb/unlockassetbase/) other)                  | Upcast an instance of type [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) to [DogTagData](/vext/ref/fb/dogtagdata/).                  |
| DogTagData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DogTagData](/vext/ref/fb/dogtagdata/).                                      |
| DogTagData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DogTagData](/vext/ref/fb/dogtagdata/). |

## Properties

| Name              | Type                             | Description |
| ----------------- | -------------------------------- | ----------- |
| nameSID           | string                           |             |
| descriptionSID    | string                           |             |
| imageName         | string                           |             |
| smallImageName    | string                           |             |
| category          | [DogTagCategory](/vext/ref/fb/dogtagcategory/) |             |
| invertText        | bool                             |             |
| isAlwaysAvailable | bool                             |             |
| excludedOnXenon   | bool                             |             |
| excludedOnPs3     | bool                             |             |
| excludedOnWin32   | bool                             |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [DogTagData](/vext/ref/fb/dogtagdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DogTagData](/vext/ref/fb/dogtagdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
