---
title: TerrainQuadDecalAtlasTile
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| TerrainQuadDecalAtlasTile()                                | Create a new instance of this structure type.            |
| TerrainQuadDecalAtlasTile(TerrainQuadDecalAtlasTile other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| tileIndexX | number |             |
| tileIndexY | number |             |
| tileCountX | number |             |
| tileCountY | number |             |
| flipX      | bool   |             |
| flipY      | bool   |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile/) | [Clone](#clone) |            |

### Clone

> [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
