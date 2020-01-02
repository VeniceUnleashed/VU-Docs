---
title: UIWidgetMovieCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIWidgetMovieCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIWidgetMovieCompData(UIWidgetMovieCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIWidgetMovieCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIWidgetMovieCompData](UIWidgetMovieCompData).                  |
| UIWidgetMovieCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIWidgetMovieCompData](UIWidgetMovieCompData).                                      |
| UIWidgetMovieCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIWidgetMovieCompData](UIWidgetMovieCompData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIWidgetMovieCompData](UIWidgetMovieCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIWidgetMovieCompData](UIWidgetMovieCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
