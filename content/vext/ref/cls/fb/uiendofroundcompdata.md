---
title: UIEndOfRoundCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIEndOfRoundCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIEndOfRoundCompData(UIEndOfRoundCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIEndOfRoundCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIEndOfRoundCompData](UIEndOfRoundCompData).                  |
| UIEndOfRoundCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIEndOfRoundCompData](UIEndOfRoundCompData).                                      |
| UIEndOfRoundCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIEndOfRoundCompData](UIEndOfRoundCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIEndOfRoundCompData](UIEndOfRoundCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIEndOfRoundCompData](UIEndOfRoundCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
