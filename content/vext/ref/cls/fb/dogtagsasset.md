---
title: DogTagsAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| DogTagsAsset()                                                          | Create a new instance of this container type.                                                                   |
| DogTagsAsset(DogTagsAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| DogTagsAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DogTagsAsset](DogTagsAsset).                                      |
| DogTagsAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DogTagsAsset](DogTagsAsset). |

## Properties

| Name            | Type                                               | Description |
| --------------- | -------------------------------------------------- | ----------- |
| meleeKillWeapon | [StatsCategoryWeaponData](StatsCategoryWeaponData) |             |
| basicDogTags    | [BasicDogTagData](BasicDogTagData)\[\]             |             |
| advancedDogTags | [AdvancedDogTagData](AdvancedDogTagData)\[\]       |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [DogTagsAsset](DogTagsAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DogTagsAsset](DogTagsAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
