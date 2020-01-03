---
title: UIIngameMenuCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIIngameMenuCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIIngameMenuCompData(UIIngameMenuCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIIngameMenuCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIIngameMenuCompData](UIIngameMenuCompData).                  |
| UIIngameMenuCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIIngameMenuCompData](UIIngameMenuCompData).                                      |
| UIIngameMenuCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIIngameMenuCompData](UIIngameMenuCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIIngameMenuCompData](UIIngameMenuCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIIngameMenuCompData](UIIngameMenuCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
