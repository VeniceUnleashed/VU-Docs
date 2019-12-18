---
title: UIConnectionCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIConnectionCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIConnectionCompData(UIConnectionCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIConnectionCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIConnectionCompData](UIConnectionCompData).                  |
| UIConnectionCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIConnectionCompData](UIConnectionCompData).                                      |
| UIConnectionCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIConnectionCompData](UIConnectionCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIConnectionCompData](UIConnectionCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIConnectionCompData](UIConnectionCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
