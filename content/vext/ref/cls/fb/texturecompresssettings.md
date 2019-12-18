---
title: TextureCompressSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| TextureCompressSettings()                                                          | Create a new instance of this container type.                                                                                         |
| TextureCompressSettings(TextureCompressSettings other)                             | Create a reference copy of an instance of the same type.                                                                              |
| TextureCompressSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TextureCompressSettings](TextureCompressSettings). |

## Properties

| Name                       | Type                                                     | Description |
| -------------------------- | -------------------------------------------------------- | ----------- |
| viewMode                   | [TextureCompressQualityMode](TextureCompressQualityMode) |             |
| textureCompressJobPoolSize | number                                                   |             |
| debugDrawAlphaOverlayScale | number                                                   |             |
| debugDrawEnable            | bool                                                     |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TextureCompressSettings](TextureCompressSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TextureCompressSettings](TextureCompressSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
