---
title: TextureSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| TextureSettings()                                                          | Create a new instance of this container type.                                                                         |
| TextureSettings(TextureSettings other)                                     | Create a reference copy of an instance of the same type.                                                              |
| TextureSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureSettings](/vext/ref/fb/texturesettings/). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| skipMipmapCount       | number |             |
| loadingEnabled        | bool   |             |
| renderTexturesEnabled | bool   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [TextureSettings](/vext/ref/fb/texturesettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TextureSettings](/vext/ref/fb/texturesettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
