---
title: UIColorTemplate (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UIColorTemplate()                                                          | Create a new instance of this container type.                                                                         |
| UIColorTemplate(UIColorTemplate other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UIColorTemplate([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIColorTemplate](UIColorTemplate).                                      |
| UIColorTemplate([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIColorTemplate](UIColorTemplate). |

## Properties

| Name   | Type                   | Description |
| ------ | ---------------------- | ----------- |
| colors | [UIColor](UIColor)\[\] |             |
| active | bool                   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UIColorTemplate](UIColorTemplate) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIColorTemplate](UIColorTemplate) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
