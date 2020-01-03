---
title: CustomizedMeshMaterialsData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| CustomizedMeshMaterialsData()                                  | Create a new instance of this structure type.            |
| CustomizedMeshMaterialsData(CustomizedMeshMaterialsData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                               | Description |
| ------------- | ---------------------------------- | ----------- |
| meshBlueprint | [ObjectBlueprint](ObjectBlueprint) |             |
| materialNames | string\[\]                         |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [CustomizedMeshMaterialsData](CustomizedMeshMaterialsData) | [Clone](#clone) |            |

### Clone

> [CustomizedMeshMaterialsData](CustomizedMeshMaterialsData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
