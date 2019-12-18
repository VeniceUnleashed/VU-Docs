---
title: MeshVariationDatabaseMaterial (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                        | Description                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| MeshVariationDatabaseMaterial()                                    | Create a new instance of this structure type.            |
| MeshVariationDatabaseMaterial(MeshVariationDatabaseMaterial other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type                                                 | Description |
| ----------------- | ---------------------------------------------------- | ----------- |
| material          | [MeshMaterial](MeshMaterial)                         |             |
| materialVariation | [MeshMaterialVariation](MeshMaterialVariation)       |             |
| textureParameters | [TextureShaderParameter](TextureShaderParameter)\[\] |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [MeshVariationDatabaseMaterial](MeshVariationDatabaseMaterial) | [Clone](#clone) |            |

### Clone

> [MeshVariationDatabaseMaterial](MeshVariationDatabaseMaterial) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
