---
title: UIGeneralCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIGeneralCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIGeneralCompData(UIGeneralCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIGeneralCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIGeneralCompData](UIGeneralCompData).                  |
| UIGeneralCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIGeneralCompData](UIGeneralCompData).                                      |
| UIGeneralCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIGeneralCompData](UIGeneralCompData). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIGeneralCompData](UIGeneralCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIGeneralCompData](UIGeneralCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
