---
title: AnimationSpawnTemplate
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AnimationSpawnTemplate()                                                          | Create a new instance of this container type.                                                                                       |
| AnimationSpawnTemplate(AnimationSpawnTemplate other)                              | Create a reference copy of an instance of the same type.                                                                            |
| AnimationSpawnTemplate([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimationSpawnTemplate](/vext/ref/fb/animationspawntemplate/). |

## Properties

| Name     | Type                             | Description |
| -------- | -------------------------------- | ----------- |
| runStyle | [AntEnumeration](/vext/ref/fb/antenumeration/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AnimationSpawnTemplate](/vext/ref/fb/animationspawntemplate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimationSpawnTemplate](/vext/ref/fb/animationspawntemplate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
