---
title: AdvertisementLevelDescriptionComponent
---
### Base Classes

[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                          | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AdvertisementLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                          |
| AdvertisementLevelDescriptionComponent(AdvertisementLevelDescriptionComponent other)                 | Create a reference copy of an instance of the same type.                                                                                                               |
| AdvertisementLevelDescriptionComponent([LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) other) | Upcast an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) to [AdvertisementLevelDescriptionComponent](/vext/ref/fb/advertisementleveldescriptioncomponent/). |
| AdvertisementLevelDescriptionComponent([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AdvertisementLevelDescriptionComponent](/vext/ref/fb/advertisementleveldescriptioncomponent/).    |

## Properties

| Name       | Type                                                   | Description |
| ---------- | ------------------------------------------------------ | ----------- |
| identifier | string                                                 |             |
| members    | [AdvertisementZoneMember](/vext/ref/fb/advertisementzonemember/)\[\] |             |

## Methods

| Type                                                                             | Name            | Parameters                                     |
| -------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AdvertisementLevelDescriptionComponent](/vext/ref/fb/advertisementleveldescriptioncomponent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AdvertisementLevelDescriptionComponent](/vext/ref/fb/advertisementleveldescriptioncomponent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
