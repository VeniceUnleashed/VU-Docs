---
title: DogTagsAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| DogTagsAsset()                                                          | Create a new instance of this container type.                                                                   |
| DogTagsAsset(DogTagsAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| DogTagsAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DogTagsAsset](/vext/ref/fb/dogtagsasset/).                                      |
| DogTagsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DogTagsAsset](/vext/ref/fb/dogtagsasset/). |

## Properties

| Name            | Type                                               | Description |
| --------------- | -------------------------------------------------- | ----------- |
| meleeKillWeapon | [StatsCategoryWeaponData](/vext/ref/fb/statscategoryweapondata/) |             |
| basicDogTags    | [BasicDogTagData](/vext/ref/fb/basicdogtagdata/)\[\]             |             |
| advancedDogTags | [AdvancedDogTagData](/vext/ref/fb/advanceddogtagdata/)\[\]       |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [DogTagsAsset](/vext/ref/fb/dogtagsasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DogTagsAsset](/vext/ref/fb/dogtagsasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
