---
title: UIDirectAccessCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIDirectAccessCompData()                                                          | Create a new instance of this container type.                                                                                       |
| UIDirectAccessCompData(UIDirectAccessCompData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIDirectAccessCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIDirectAccessCompData](UIDirectAccessCompData).                  |
| UIDirectAccessCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIDirectAccessCompData](UIDirectAccessCompData).                                      |
| UIDirectAccessCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIDirectAccessCompData](UIDirectAccessCompData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIDirectAccessCompData](UIDirectAccessCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIDirectAccessCompData](UIDirectAccessCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
