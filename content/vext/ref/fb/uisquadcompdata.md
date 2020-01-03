---
title: UISquadCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UISquadCompData()                                                          | Create a new instance of this container type.                                                                         |
| UISquadCompData(UISquadCompData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UISquadCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UISquadCompData](/vext/ref/fb/uisquadcompdata/).                  |
| UISquadCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UISquadCompData](/vext/ref/fb/uisquadcompdata/).                                      |
| UISquadCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISquadCompData](/vext/ref/fb/uisquadcompdata/). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| squad15                 | string |             |
| squad32                 | string |             |
| squad1                  | string |             |
| squad2                  | string |             |
| squad3                  | string |             |
| squad4                  | string |             |
| squad5                  | string |             |
| squad6                  | string |             |
| squad7                  | string |             |
| squad8                  | string |             |
| squad9                  | string |             |
| squad10                 | string |             |
| squad11                 | string |             |
| squad12                 | string |             |
| squad13                 | string |             |
| squad14                 | string |             |
| squad16                 | string |             |
| squad24                 | string |             |
| squad17                 | string |             |
| squad18                 | string |             |
| squad19                 | string |             |
| squad20                 | string |             |
| squad21                 | string |             |
| squad22                 | string |             |
| squad23                 | string |             |
| squad31                 | string |             |
| squad25                 | string |             |
| squad26                 | string |             |
| squad27                 | string |             |
| squad28                 | string |             |
| squad29                 | string |             |
| squad30                 | string |             |
| hideLocalSquadBoostData | bool   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UISquadCompData](/vext/ref/fb/uisquadcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UISquadCompData](/vext/ref/fb/uisquadcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
