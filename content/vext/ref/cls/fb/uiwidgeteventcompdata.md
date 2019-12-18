---
title: UIWidgetEventCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIWidgetEventCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIWidgetEventCompData(UIWidgetEventCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIWidgetEventCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIWidgetEventCompData](UIWidgetEventCompData).                  |
| UIWidgetEventCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIWidgetEventCompData](UIWidgetEventCompData).                                      |
| UIWidgetEventCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIWidgetEventCompData](UIWidgetEventCompData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIWidgetEventCompData](UIWidgetEventCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIWidgetEventCompData](UIWidgetEventCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
