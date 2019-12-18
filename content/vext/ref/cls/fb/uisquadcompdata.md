---
title: UISquadCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UISquadCompData()                                                          | Create a new instance of this container type.                                                                         |
| UISquadCompData(UISquadCompData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UISquadCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UISquadCompData](UISquadCompData).                  |
| UISquadCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UISquadCompData](UISquadCompData).                                      |
| UISquadCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UISquadCompData](UISquadCompData). |

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
| [UISquadCompData](UISquadCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UISquadCompData](UISquadCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
