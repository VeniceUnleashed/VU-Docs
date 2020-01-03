---
title: AdvancedDogTagData
---
### Base Classes

[DogTagData](/vext/ref/fb/dogtagdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AdvancedDogTagData()                                                          | Create a new instance of this container type.                                                                               |
| AdvancedDogTagData(AdvancedDogTagData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AdvancedDogTagData([DogTagData](/vext/ref/fb/dogtagdata/) other)                            | Upcast an instance of type [DogTagData](/vext/ref/fb/dogtagdata/) to [AdvancedDogTagData](/vext/ref/fb/advanceddogtagdata/).                            |
| AdvancedDogTagData([UnlockAssetBase](/vext/ref/fb/unlockassetbase/) other)                  | Upcast an instance of type [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) to [AdvancedDogTagData](/vext/ref/fb/advanceddogtagdata/).                  |
| AdvancedDogTagData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AdvancedDogTagData](/vext/ref/fb/advanceddogtagdata/).                                      |
| AdvancedDogTagData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AdvancedDogTagData](/vext/ref/fb/advanceddogtagdata/). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| statCode             | string |             |
| statSID              | string |             |
| isStatMeasuredInTime | bool   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AdvancedDogTagData](/vext/ref/fb/advanceddogtagdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AdvancedDogTagData](/vext/ref/fb/advanceddogtagdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
