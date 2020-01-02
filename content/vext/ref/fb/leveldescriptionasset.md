---
title: LevelDescriptionAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| LevelDescriptionAsset()                                                          | Create a new instance of this container type.                                                                                     |
| LevelDescriptionAsset(LevelDescriptionAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| LevelDescriptionAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [LevelDescriptionAsset](LevelDescriptionAsset).                                      |
| LevelDescriptionAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelDescriptionAsset](LevelDescriptionAsset). |

## Properties

| Name        | Type                                                                       | Description |
| ----------- | -------------------------------------------------------------------------- | ----------- |
| levelName   | string                                                                     |             |
| categories  | [LevelDescriptionInclusionCategory](LevelDescriptionInclusionCategory)\[\] |             |
| description | [LevelDescription](LevelDescription)                                       |             |
| startPoints | string\[\]                                                                 |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [LevelDescriptionAsset](LevelDescriptionAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LevelDescriptionAsset](LevelDescriptionAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
