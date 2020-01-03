---
title: ShaderTextureUnlockPartCollection
---
### Base Classes

[ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                                 | Description                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ShaderTextureUnlockPartCollection()                                                                                         | Create a new instance of this container type.                                                                                                                                            |
| ShaderTextureUnlockPartCollection(ShaderTextureUnlockPartCollection other)                                                  | Create a reference copy of an instance of the same type.                                                                                                                                 |
| ShaderTextureUnlockPartCollection([ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection/) other) | Upcast an instance of type [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection/) to [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection/). |
| ShaderTextureUnlockPartCollection([DataContainer](/vext/ref/shared/class/datacontainer) other)                                | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection/).                                |

## Properties

| Name                    | Type                                               | Description |
| ----------------------- | -------------------------------------------------- | ----------- |
| defaultTextureReference | [TextureReference](/vext/ref/fb/texturereference/)               |             |
| unlockParts             | [TextureUnlockPartData](/vext/ref/fb/textureunlockpartdata/)\[\] |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
