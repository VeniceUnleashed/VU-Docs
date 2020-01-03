---
title: UICapturepointCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UICapturepointCompData()                                                          | Create a new instance of this container type.                                                                                       |
| UICapturepointCompData(UICapturepointCompData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UICapturepointCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UICapturepointCompData](UICapturepointCompData).                  |
| UICapturepointCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UICapturepointCompData](UICapturepointCompData).                                      |
| UICapturepointCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICapturepointCompData](UICapturepointCompData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UICapturepointCompData](UICapturepointCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICapturepointCompData](UICapturepointCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
