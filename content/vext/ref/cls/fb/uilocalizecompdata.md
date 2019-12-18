---
title: UILocalizeCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UILocalizeCompData()                                                          | Create a new instance of this container type.                                                                               |
| UILocalizeCompData(UILocalizeCompData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UILocalizeCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UILocalizeCompData](UILocalizeCompData).                  |
| UILocalizeCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UILocalizeCompData](UILocalizeCompData).                                      |
| UILocalizeCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UILocalizeCompData](UILocalizeCompData). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UILocalizeCompData](UILocalizeCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UILocalizeCompData](UILocalizeCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
