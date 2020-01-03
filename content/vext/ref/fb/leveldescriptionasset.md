---
title: LevelDescriptionAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| LevelDescriptionAsset()                                                          | Create a new instance of this container type.                                                                                     |
| LevelDescriptionAsset(LevelDescriptionAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| LevelDescriptionAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset/).                                      |
| LevelDescriptionAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset/). |

## Properties

| Name        | Type                                                                       | Description |
| ----------- | -------------------------------------------------------------------------- | ----------- |
| levelName   | string                                                                     |             |
| categories  | [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory/)\[\] |             |
| description | [LevelDescription](/vext/ref/fb/leveldescription/)                                       |             |
| startPoints | string\[\]                                                                 |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
