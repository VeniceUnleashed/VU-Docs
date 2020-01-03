---
title: EnlightenPipelineTerrain
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenPipelineTerrain()                                                          | Create a new instance of this container type.                                                                                           |
| EnlightenPipelineTerrain(EnlightenPipelineTerrain other)                            | Create a reference copy of an instance of the same type.                                                                                |
| EnlightenPipelineTerrain([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EnlightenPipelineTerrain](EnlightenPipelineTerrain).                                      |
| EnlightenPipelineTerrain([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenPipelineTerrain](EnlightenPipelineTerrain). |

## Properties

| Name   | Type                                                             | Description |
| ------ | ---------------------------------------------------------------- | ----------- |
| meshes | [EnlightenPipelineTerrainMesh](EnlightenPipelineTerrainMesh)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenPipelineTerrain](EnlightenPipelineTerrain) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenPipelineTerrain](EnlightenPipelineTerrain) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
