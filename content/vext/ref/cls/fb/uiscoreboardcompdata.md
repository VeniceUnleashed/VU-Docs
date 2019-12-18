---
title: UIScoreboardCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIScoreboardCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIScoreboardCompData(UIScoreboardCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIScoreboardCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIScoreboardCompData](UIScoreboardCompData).                  |
| UIScoreboardCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIScoreboardCompData](UIScoreboardCompData).                                      |
| UIScoreboardCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIScoreboardCompData](UIScoreboardCompData). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| maxUpdateInterval | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIScoreboardCompData](UIScoreboardCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIScoreboardCompData](UIScoreboardCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
