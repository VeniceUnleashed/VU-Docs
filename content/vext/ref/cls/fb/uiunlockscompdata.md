---
title: UIUnlocksCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIUnlocksCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIUnlocksCompData(UIUnlocksCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIUnlocksCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIUnlocksCompData](UIUnlocksCompData).                  |
| UIUnlocksCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIUnlocksCompData](UIUnlocksCompData).                                      |
| UIUnlocksCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIUnlocksCompData](UIUnlocksCompData). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIUnlocksCompData](UIUnlocksCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIUnlocksCompData](UIUnlocksCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
