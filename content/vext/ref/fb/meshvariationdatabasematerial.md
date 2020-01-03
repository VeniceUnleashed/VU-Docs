---
title: MeshVariationDatabaseMaterial
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
| material          | [MeshMaterial](/vext/ref/fb/meshmaterial/)                         |             |
| materialVariation | [MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation/)       |             |
| textureParameters | [TextureShaderParameter](/vext/ref/fb/textureshaderparameter/)\[\] |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial/) | [Clone](#clone) |            |

### Clone

> [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
