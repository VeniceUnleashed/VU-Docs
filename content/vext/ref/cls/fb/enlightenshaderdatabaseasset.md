---
title: EnlightenShaderDatabaseAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenShaderDatabaseAsset()                                                          | Create a new instance of this container type.                                                                                                   |
| EnlightenShaderDatabaseAsset(EnlightenShaderDatabaseAsset other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| EnlightenShaderDatabaseAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EnlightenShaderDatabaseAsset](EnlightenShaderDatabaseAsset).                                      |
| EnlightenShaderDatabaseAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EnlightenShaderDatabaseAsset](EnlightenShaderDatabaseAsset). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EnlightenShaderDatabaseAsset](EnlightenShaderDatabaseAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EnlightenShaderDatabaseAsset](EnlightenShaderDatabaseAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
