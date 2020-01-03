---
title: BasicDogTagData
---
### Base Classes

[DogTagData](/vext/ref/fb/dogtagdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| BasicDogTagData()                                                          | Create a new instance of this container type.                                                                         |
| BasicDogTagData(BasicDogTagData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| BasicDogTagData([DogTagData](/vext/ref/fb/dogtagdata/) other)                            | Upcast an instance of type [DogTagData](/vext/ref/fb/dogtagdata/) to [BasicDogTagData](/vext/ref/fb/basicdogtagdata/).                            |
| BasicDogTagData([UnlockAssetBase](/vext/ref/fb/unlockassetbase/) other)                  | Upcast an instance of type [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) to [BasicDogTagData](/vext/ref/fb/basicdogtagdata/).                  |
| BasicDogTagData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BasicDogTagData](/vext/ref/fb/basicdogtagdata/).                                      |
| BasicDogTagData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BasicDogTagData](/vext/ref/fb/basicdogtagdata/). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [BasicDogTagData](/vext/ref/fb/basicdogtagdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BasicDogTagData](/vext/ref/fb/basicdogtagdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
