---
title: ShaderDatabaseAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ShaderDatabaseAsset()                                                          | Create a new instance of this container type.                                                                                 |
| ShaderDatabaseAsset(ShaderDatabaseAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ShaderDatabaseAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ShaderDatabaseAsset](ShaderDatabaseAsset).                                      |
| ShaderDatabaseAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ShaderDatabaseAsset](ShaderDatabaseAsset). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| levelName | string |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ShaderDatabaseAsset](ShaderDatabaseAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ShaderDatabaseAsset](ShaderDatabaseAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
