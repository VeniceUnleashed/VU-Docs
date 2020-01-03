---
title: ShaderGraph
---
### Base Classes

[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ShaderGraph()                                                          | Create a new instance of this container type.                                                                 |
| ShaderGraph(ShaderGraph other)                                         | Create a reference copy of an instance of the same type.                                                      |
| ShaderGraph([SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) other)    | Upcast an instance of type [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) to [ShaderGraph](/vext/ref/fb/shadergraph/).    |
| ShaderGraph([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ShaderGraph](/vext/ref/fb/shadergraph/).                                      |
| ShaderGraph([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderGraph](/vext/ref/fb/shadergraph/). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| maxSubMaterialCount   | number |             |
| gammaCorrectionEnable | bool   |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [ShaderGraph](/vext/ref/fb/shadergraph/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderGraph](/vext/ref/fb/shadergraph/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
