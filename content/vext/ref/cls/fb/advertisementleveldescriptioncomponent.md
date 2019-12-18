---
title: AdvertisementLevelDescriptionComponent (Frostbite Container)
---
### Base Classes

[LevelDescriptionComponent](LevelDescriptionComponent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                          | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AdvertisementLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                          |
| AdvertisementLevelDescriptionComponent(AdvertisementLevelDescriptionComponent other)                 | Create a reference copy of an instance of the same type.                                                                                                               |
| AdvertisementLevelDescriptionComponent([LevelDescriptionComponent](LevelDescriptionComponent) other) | Upcast an instance of type [LevelDescriptionComponent](LevelDescriptionComponent) to [AdvertisementLevelDescriptionComponent](AdvertisementLevelDescriptionComponent). |
| AdvertisementLevelDescriptionComponent([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AdvertisementLevelDescriptionComponent](AdvertisementLevelDescriptionComponent).    |

## Properties

| Name       | Type                                                   | Description |
| ---------- | ------------------------------------------------------ | ----------- |
| identifier | string                                                 |             |
| members    | [AdvertisementZoneMember](AdvertisementZoneMember)\[\] |             |

## Methods

| Type                                                                             | Name            | Parameters                                     |
| -------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AdvertisementLevelDescriptionComponent](AdvertisementLevelDescriptionComponent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AdvertisementLevelDescriptionComponent](AdvertisementLevelDescriptionComponent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
