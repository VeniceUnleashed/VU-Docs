---
title: ShaderTextureUnlockPartCollection
---
### Base Classes

[ShaderCustomizationUnlockPartCollection](ShaderCustomizationUnlockPartCollection)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                                 | Description                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ShaderTextureUnlockPartCollection()                                                                                         | Create a new instance of this container type.                                                                                                                                            |
| ShaderTextureUnlockPartCollection(ShaderTextureUnlockPartCollection other)                                                  | Create a reference copy of an instance of the same type.                                                                                                                                 |
| ShaderTextureUnlockPartCollection([ShaderCustomizationUnlockPartCollection](ShaderCustomizationUnlockPartCollection) other) | Upcast an instance of type [ShaderCustomizationUnlockPartCollection](ShaderCustomizationUnlockPartCollection) to [ShaderTextureUnlockPartCollection](ShaderTextureUnlockPartCollection). |
| ShaderTextureUnlockPartCollection([DataContainer](/vext/ref/shared/class/datacontainer) other)                                | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderTextureUnlockPartCollection](ShaderTextureUnlockPartCollection).                                |

## Properties

| Name                    | Type                                               | Description |
| ----------------------- | -------------------------------------------------- | ----------- |
| defaultTextureReference | [TextureReference](TextureReference)               |             |
| unlockParts             | [TextureUnlockPartData](TextureUnlockPartData)\[\] |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ShaderTextureUnlockPartCollection](ShaderTextureUnlockPartCollection) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderTextureUnlockPartCollection](ShaderTextureUnlockPartCollection) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
