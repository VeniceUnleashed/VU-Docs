---
title: UIPersistenceCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIPersistenceCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIPersistenceCompData(UIPersistenceCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIPersistenceCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIPersistenceCompData](UIPersistenceCompData).                  |
| UIPersistenceCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIPersistenceCompData](UIPersistenceCompData).                                      |
| UIPersistenceCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIPersistenceCompData](UIPersistenceCompData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIPersistenceCompData](UIPersistenceCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIPersistenceCompData](UIPersistenceCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
