---
title: ShaderGraph
---
### Base Classes

[SurfaceShaderBaseAsset](SurfaceShaderBaseAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ShaderGraph()                                                          | Create a new instance of this container type.                                                                 |
| ShaderGraph(ShaderGraph other)                                         | Create a reference copy of an instance of the same type.                                                      |
| ShaderGraph([SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) other)    | Upcast an instance of type [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) to [ShaderGraph](ShaderGraph).    |
| ShaderGraph([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ShaderGraph](ShaderGraph).                                      |
| ShaderGraph([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderGraph](ShaderGraph). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| maxSubMaterialCount   | number |             |
| gammaCorrectionEnable | bool   |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [ShaderGraph](ShaderGraph) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderGraph](ShaderGraph) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
