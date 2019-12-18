---
title: UIKillCardCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UIKillCardCompData()                                                          | Create a new instance of this container type.                                                                               |
| UIKillCardCompData(UIKillCardCompData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UIKillCardCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIKillCardCompData](UIKillCardCompData).                  |
| UIKillCardCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIKillCardCompData](UIKillCardCompData).                                      |
| UIKillCardCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIKillCardCompData](UIKillCardCompData). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UIKillCardCompData](UIKillCardCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIKillCardCompData](UIKillCardCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
