---
title: UnlockableTextureCollection
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| UnlockableTextureCollection()                                                          | Create a new instance of this container type.                                                                                                 |
| UnlockableTextureCollection(UnlockableTextureCollection other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| UnlockableTextureCollection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockableTextureCollection](/vext/ref/fb/unlockabletexturecollection/). |

## Properties

| Name         | Type                         | Description |
| ------------ | ---------------------------- | ----------- |
| defaultValue | [TextureAsset](/vext/ref/fb/textureasset/) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UnlockableTextureCollection](/vext/ref/fb/unlockabletexturecollection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnlockableTextureCollection](/vext/ref/fb/unlockabletexturecollection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
