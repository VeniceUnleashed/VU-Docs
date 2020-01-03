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
| meshBlueprint | [ObjectBlueprint](/vext/ref/fb/objectblueprint/) |             |
| materialNames | string\[\]                         |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata/) | [Clone](#clone) |            |

### Clone

> [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
