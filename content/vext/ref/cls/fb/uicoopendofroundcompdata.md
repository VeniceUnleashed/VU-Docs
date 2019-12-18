---
title: UICoopEndOfRoundCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UICoopEndOfRoundCompData()                                                          | Create a new instance of this container type.                                                                                           |
| UICoopEndOfRoundCompData(UICoopEndOfRoundCompData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UICoopEndOfRoundCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UICoopEndOfRoundCompData](UICoopEndOfRoundCompData).                  |
| UICoopEndOfRoundCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UICoopEndOfRoundCompData](UICoopEndOfRoundCompData).                                      |
| UICoopEndOfRoundCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UICoopEndOfRoundCompData](UICoopEndOfRoundCompData). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UICoopEndOfRoundCompData](UICoopEndOfRoundCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UICoopEndOfRoundCompData](UICoopEndOfRoundCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
