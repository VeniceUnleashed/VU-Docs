---
title: DecalAtlasTile (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| DecalAtlasTile()                     | Create a new instance of this structure type.            |
| DecalAtlasTile(DecalAtlasTile other) | Create a reference copy of a structure of the same type. |

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

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [DecalAtlasTile](DecalAtlasTile) | [Clone](#clone) |            |

### Clone

> [DecalAtlasTile](DecalAtlasTile) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
