---
title: MeshMaterial (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| MeshMaterial()                                                          | Create a new instance of this container type.                                                                   |
| MeshMaterial(MeshMaterial other)                                        | Create a reference copy of an instance of the same type.                                                        |
| MeshMaterial([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MeshMaterial](MeshMaterial). |

## Properties

| Name           | Type                                                               | Description |
| -------------- | ------------------------------------------------------------------ | ----------- |
| shaderInstance | [SurfaceShaderInstanceData](SurfaceShaderInstanceData)             |             |
| shader         | [SurfaceShaderInstanceDataStruct](SurfaceShaderInstanceDataStruct) |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [MeshMaterial](MeshMaterial) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MeshMaterial](MeshMaterial) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
