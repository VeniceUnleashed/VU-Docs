---
title: TerrainQuadDecalAtlasTile (Frostbite Structure)
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
| [TerrainQuadDecalAtlasTile](TerrainQuadDecalAtlasTile) | [Clone](#clone) |            |

### Clone

> [TerrainQuadDecalAtlasTile](TerrainQuadDecalAtlasTile) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
