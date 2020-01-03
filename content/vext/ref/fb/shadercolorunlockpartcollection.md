---
title: ShaderColorUnlockPartCollection
---
### Base Classes

[ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                               | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ShaderColorUnlockPartCollection()                                                                                         | Create a new instance of this container type.                                                                                                                                        |
| ShaderColorUnlockPartCollection(ShaderColorUnlockPartCollection other)                                                    | Create a reference copy of an instance of the same type.                                                                                                                             |
| ShaderColorUnlockPartCollection([ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection/) other) | Upcast an instance of type [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection/) to [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection/). |
| ShaderColorUnlockPartCollection([DataContainer](/vext/ref/shared/class/datacontainer) other)                                | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection/).                                |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| defaultColorReference | [ColorReference](/vext/ref/fb/colorreference/)               |             |
| unlockParts           | [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata/)\[\] |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
