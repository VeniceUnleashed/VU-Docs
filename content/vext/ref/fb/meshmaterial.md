---
title: MeshMaterial
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| MeshMaterial()                                                          | Create a new instance of this container type.                                                                   |
| MeshMaterial(MeshMaterial other)                                        | Create a reference copy of an instance of the same type.                                                        |
| MeshMaterial([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshMaterial](MeshMaterial). |

## Properties

| Name           | Type                                                               | Description |
| -------------- | ------------------------------------------------------------------ | ----------- |
| shaderInstance | [SurfaceShaderInstanceData](SurfaceShaderInstanceData)             |             |
| shader         | [SurfaceShaderInstanceDataStruct](SurfaceShaderInstanceDataStruct) |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [MeshMaterial](MeshMaterial) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshMaterial](MeshMaterial) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
