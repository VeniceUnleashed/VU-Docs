---
title: UIMinimapCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIMinimapCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIMinimapCompData(UIMinimapCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIMinimapCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIMinimapCompData](UIMinimapCompData).                  |
| UIMinimapCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIMinimapCompData](UIMinimapCompData).                                      |
| UIMinimapCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIMinimapCompData](UIMinimapCompData). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIMinimapCompData](UIMinimapCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIMinimapCompData](UIMinimapCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
