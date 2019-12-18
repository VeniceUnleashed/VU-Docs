---
title: EnlightenRuntimeConfig (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenRuntimeConfig()                                                          | Create a new instance of this container type.                                                                                       |
| EnlightenRuntimeConfig(EnlightenRuntimeConfig other)                              | Create a reference copy of an instance of the same type.                                                                            |
| EnlightenRuntimeConfig([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EnlightenRuntimeConfig](EnlightenRuntimeConfig).                                      |
| EnlightenRuntimeConfig([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EnlightenRuntimeConfig](EnlightenRuntimeConfig). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| jobCount | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EnlightenRuntimeConfig](EnlightenRuntimeConfig) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EnlightenRuntimeConfig](EnlightenRuntimeConfig) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
