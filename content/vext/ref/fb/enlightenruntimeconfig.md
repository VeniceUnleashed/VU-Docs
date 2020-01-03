---
title: EnlightenRuntimeConfig
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenRuntimeConfig()                                                          | Create a new instance of this container type.                                                                                       |
| EnlightenRuntimeConfig(EnlightenRuntimeConfig other)                              | Create a reference copy of an instance of the same type.                                                                            |
| EnlightenRuntimeConfig([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EnlightenRuntimeConfig](/vext/ref/fb/enlightenruntimeconfig/).                                      |
| EnlightenRuntimeConfig([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenRuntimeConfig](/vext/ref/fb/enlightenruntimeconfig/). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| jobCount | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EnlightenRuntimeConfig](/vext/ref/fb/enlightenruntimeconfig/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenRuntimeConfig](/vext/ref/fb/enlightenruntimeconfig/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
