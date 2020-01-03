---
title: ShaderDatabaseAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ShaderDatabaseAsset()                                                          | Create a new instance of this container type.                                                                                 |
| ShaderDatabaseAsset(ShaderDatabaseAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ShaderDatabaseAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ShaderDatabaseAsset](/vext/ref/fb/shaderdatabaseasset/).                                      |
| ShaderDatabaseAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderDatabaseAsset](/vext/ref/fb/shaderdatabaseasset/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| levelName | string |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ShaderDatabaseAsset](/vext/ref/fb/shaderdatabaseasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderDatabaseAsset](/vext/ref/fb/shaderdatabaseasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
