---
title: MovieTextureAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MovieTextureAsset()                                                          | Create a new instance of this container type.                                                                             |
| MovieTextureAsset(MovieTextureAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MovieTextureAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MovieTextureAsset](MovieTextureAsset).                                      |
| MovieTextureAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MovieTextureAsset](MovieTextureAsset). |

## Properties

| Name                    | Type                              | Description |
| ----------------------- | --------------------------------- | ----------- |
| chunkGuid               | [Guid](/vext/ref/cls/shr/Guid) |             |
| chunkSize               | number                            |             |
| subtitleChunkGuid       | [Guid](/vext/ref/cls/shr/Guid) |             |
| subtitleChunkSize       | number                            |             |
| hasLocalizedAudioTracks | bool                              |             |
| overrideBackgroundMusic | bool                              |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MovieTextureAsset](MovieTextureAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MovieTextureAsset](MovieTextureAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
