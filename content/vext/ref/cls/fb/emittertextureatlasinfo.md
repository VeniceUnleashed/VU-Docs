---
title: EmitterTextureAtlasInfo (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| EmitterTextureAtlasInfo()                              | Create a new instance of this structure type.            |
| EmitterTextureAtlasInfo(EmitterTextureAtlasInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                              | Description |
| ----------- | --------------------------------- | ----------- |
| minUv       | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| maxUv       | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| textureName | string                            |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [EmitterTextureAtlasInfo](EmitterTextureAtlasInfo) | [Clone](#clone) |            |

### Clone

> [EmitterTextureAtlasInfo](EmitterTextureAtlasInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
