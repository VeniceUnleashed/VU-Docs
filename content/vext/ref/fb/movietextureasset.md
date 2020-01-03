---
title: MovieTextureAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MovieTextureAsset()                                                          | Create a new instance of this container type.                                                                             |
| MovieTextureAsset(MovieTextureAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MovieTextureAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [MovieTextureAsset](/vext/ref/fb/movietextureasset/).                                      |
| MovieTextureAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MovieTextureAsset](/vext/ref/fb/movietextureasset/). |

## Properties

| Name                    | Type                              | Description |
| ----------------------- | --------------------------------- | ----------- |
| chunkGuid               | [Guid](/vext/ref/shared/class/guid) |             |
| chunkSize               | number                            |             |
| subtitleChunkGuid       | [Guid](/vext/ref/shared/class/guid) |             |
| subtitleChunkSize       | number                            |             |
| hasLocalizedAudioTracks | bool                              |             |
| overrideBackgroundMusic | bool                              |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MovieTextureAsset](/vext/ref/fb/movietextureasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MovieTextureAsset](/vext/ref/fb/movietextureasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
