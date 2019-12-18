---
title: UIPreRoundCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UIPreRoundCompData()                                                          | Create a new instance of this container type.                                                                               |
| UIPreRoundCompData(UIPreRoundCompData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UIPreRoundCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIPreRoundCompData](UIPreRoundCompData).                  |
| UIPreRoundCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIPreRoundCompData](UIPreRoundCompData).                                      |
| UIPreRoundCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIPreRoundCompData](UIPreRoundCompData). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UIPreRoundCompData](UIPreRoundCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIPreRoundCompData](UIPreRoundCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
