---
title: SoundDataAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SoundDataAsset()                                                          | Create a new instance of this container type.                                                                       |
| SoundDataAsset(SoundDataAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SoundDataAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoundDataAsset](SoundDataAsset).                                      |
| SoundDataAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundDataAsset](SoundDataAsset). |

## Properties

| Name     | Type                                 | Description |
| -------- | ------------------------------------ | ----------- |
| nameHash | number                               |             |
| chunks   | [SoundDataChunk](SoundDataChunk)\[\] |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SoundDataAsset](SoundDataAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundDataAsset](SoundDataAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
