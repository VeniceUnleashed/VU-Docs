---
title: EmitterSystemAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EmitterSystemAsset()                                                          | Create a new instance of this container type.                                                                               |
| EmitterSystemAsset(EmitterSystemAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| EmitterSystemAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EmitterSystemAsset](EmitterSystemAsset).                                      |
| EmitterSystemAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EmitterSystemAsset](EmitterSystemAsset). |

## Properties

| Name               | Type                                                   | Description |
| ------------------ | ------------------------------------------------------ | ----------- |
| textureInfos       | [EmitterTextureAtlasInfo](EmitterTextureAtlasInfo)\[\] |             |
| baseAtlasTexture   | [TextureAsset](TextureAsset)                           |             |
| normalAtlasTexture | [TextureAsset](TextureAsset)                           |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [EmitterSystemAsset](EmitterSystemAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EmitterSystemAsset](EmitterSystemAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
