---
title: DataCopValueSetting (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| DataCopValueSetting()                          | Create a new instance of this structure type.            |
| DataCopValueSetting(DataCopValueSetting other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| dataKey      | number |             |
| frameSpacing | number |             |
| offset       | number |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [DataCopValueSetting](DataCopValueSetting) | [Clone](#clone) |            |

### Clone

> [DataCopValueSetting](DataCopValueSetting) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
