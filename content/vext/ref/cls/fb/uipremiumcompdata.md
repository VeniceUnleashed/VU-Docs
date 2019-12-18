---
title: UIPremiumCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIPremiumCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIPremiumCompData(UIPremiumCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIPremiumCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIPremiumCompData](UIPremiumCompData).                  |
| UIPremiumCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIPremiumCompData](UIPremiumCompData).                                      |
| UIPremiumCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIPremiumCompData](UIPremiumCompData). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIPremiumCompData](UIPremiumCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIPremiumCompData](UIPremiumCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
