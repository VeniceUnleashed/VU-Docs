---
title: EnlightenPipelineTerrain
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenPipelineTerrain()                                                          | Create a new instance of this container type.                                                                                           |
| EnlightenPipelineTerrain(EnlightenPipelineTerrain other)                            | Create a reference copy of an instance of the same type.                                                                                |
| EnlightenPipelineTerrain([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EnlightenPipelineTerrain](/vext/ref/fb/enlightenpipelineterrain/).                                      |
| EnlightenPipelineTerrain([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenPipelineTerrain](/vext/ref/fb/enlightenpipelineterrain/). |

## Properties

| Name   | Type                                                             | Description |
| ------ | ---------------------------------------------------------------- | ----------- |
| meshes | [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh/)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenPipelineTerrain](/vext/ref/fb/enlightenpipelineterrain/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenPipelineTerrain](/vext/ref/fb/enlightenpipelineterrain/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
